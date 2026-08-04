import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'
import { HubSpotBlogTeaser } from '@/components/HubSpotBlogTeaser'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

// LanguageProvider relies on router hooks, so a router is required.
// The route prefix decides which language the component renders in.
const renderTeaser = (
  props: Partial<React.ComponentProps<typeof HubSpotBlogTeaser>> = {},
  route = '/en'
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <LanguageProvider>
        <HubSpotBlogTeaser {...props} />
      </LanguageProvider>
    </MemoryRouter>
  )

describe('HubSpotBlogTeaser', () => {
  beforeEach(() => {
    // The component fetches an RSS feed on mount - keep tests offline and deterministic
    vi.spyOn(global, 'fetch').mockImplementation(
      () => new Promise(() => {}) // never resolves, so the loading state stays visible
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('renders the heading and subtitle from the translations', () => {
    renderTeaser()

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(translations.en.blog.title)
    expect(heading).toHaveTextContent(translations.en.blog.titleHighlight)
    expect(screen.getByText(translations.en.blog.subtitle)).toBeInTheDocument()
  })

  test('renders German copy on a German route', () => {
    renderTeaser({}, '/de')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      translations.de.blog.title
    )
    expect(screen.getByText(translations.de.blog.subtitle)).toBeInTheDocument()
  })

  test('renders one loading skeleton card per maxItems while posts are loading', () => {
    const { container } = renderTeaser({ maxItems: 5 })

    // The desktop grid renders maxItems skeleton cards; the mobile grid renders one
    const desktopGrid = container.querySelector('.hidden.lg\\:grid')
    expect(desktopGrid).toBeInTheDocument()
    expect(desktopGrid?.children).toHaveLength(5)
  })

  test('defaults to three skeleton cards', () => {
    const { container } = renderTeaser()

    const desktopGrid = container.querySelector('.hidden.lg\\:grid')
    expect(desktopGrid?.children).toHaveLength(3)
  })

  test('unmounts without errors', () => {
    const { unmount } = renderTeaser()

    expect(() => unmount()).not.toThrow()
  })
})
