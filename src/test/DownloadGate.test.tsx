import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'
import { DownloadGate } from '@/components/DownloadGate'
import { LanguageProvider } from '@/contexts/LanguageContext'

const SESSION_KEY = 'noreja_download_validated'
const PENDING_DOWNLOAD_KEY = 'pendingDownload'
const FILE_URL = 'https://example.com/test.pdf'

// LanguageProvider relies on router hooks, so a router is required.
// "/en" is used so the rendered labels are the English ones.
const renderGate = (props: Partial<React.ComponentProps<typeof DownloadGate>> = {}) =>
  render(
    <MemoryRouter initialEntries={['/en']}>
      <LanguageProvider>
        <DownloadGate
          title="Test Download"
          description="Test description"
          fileUrl={FILE_URL}
          formPortalId="12345"
          formGuid="abc-123"
          {...props}
        />
      </LanguageProvider>
    </MemoryRouter>
  )

// Marks the current session as already validated (or not)
const mockValidatedSession = (validated: boolean) => {
  window.sessionStorage.getItem = vi.fn().mockReturnValue(validated ? 'true' : null)
}

describe('DownloadGate gating logic', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    mockValidatedSession(false)
    vi.spyOn(window, 'open').mockImplementation(() => null)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('renders the download button', () => {
    renderGate()

    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument()
  })

  test('checks session storage for prior validation on click', async () => {
    renderGate()

    // The validation flag is read when the download is requested, not on mount
    expect(window.sessionStorage.getItem).not.toHaveBeenCalled()

    await userEvent.click(screen.getByRole('button', { name: /download/i }))

    expect(window.sessionStorage.getItem).toHaveBeenCalledWith(SESSION_KEY)
  })

  test('downloads directly when the session is already validated', async () => {
    mockValidatedSession(true)
    renderGate()

    await userEvent.click(screen.getByRole('button', { name: /download/i }))

    expect(window.open).toHaveBeenCalledWith(FILE_URL, '_blank')
    // No form is required, so no HubSpot form frame is mounted
    expect(document.querySelector('.hs-form-frame')).not.toBeInTheDocument()
  })

  test('opens the HubSpot form instead of downloading when not yet validated', async () => {
    renderGate()

    await userEvent.click(screen.getByRole('button', { name: /download/i }))

    const formFrame = await waitFor(() => {
      const frame = document.querySelector('.hs-form-frame')
      expect(frame).toBeInTheDocument()
      return frame as HTMLElement
    })

    expect(formFrame.dataset.portalId).toBe('12345')
    expect(formFrame.dataset.formId).toBe('abc-123')
    expect(window.open).not.toHaveBeenCalled()
  })

  test('stores the pending download so the thank-you page can trigger it after the redirect', async () => {
    renderGate()

    await userEvent.click(screen.getByRole('button', { name: /download/i }))

    await waitFor(() => {
      expect(localStorage.getItem(PENDING_DOWNLOAD_KEY)).not.toBeNull()
    })

    const pending = JSON.parse(localStorage.getItem(PENDING_DOWNLOAD_KEY) as string)
    expect(pending).toMatchObject({ fileUrl: FILE_URL, title: 'Test Download' })
  })

  test('downloads directly and skips the form when requiresForm is false', async () => {
    renderGate({ requiresForm: false })

    await userEvent.click(screen.getByRole('button', { name: /download/i }))

    expect(window.open).toHaveBeenCalledWith(FILE_URL, '_blank')
    expect(localStorage.getItem(PENDING_DOWNLOAD_KEY)).toBeNull()
  })
})
