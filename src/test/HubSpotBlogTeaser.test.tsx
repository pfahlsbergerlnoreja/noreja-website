import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi, describe, test, expect } from 'vitest'
import { HubSpotBlogTeaser } from '@/components/HubSpotBlogTeaser'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

// The real list is regenerated from the RSS feed on every build; fixed posts
// keep the tests deterministic.
vi.mock('@/lib/blogPosts', () => {
  const post = (language: string, n: number) => ({
    title: `${language} post ${n}`,
    link: `https://blog.noreja.com/${language}/post-${n}`,
    pubDate: 'Tue, 20 Oct 2026 07:00:00 GMT',
    description: `Teaser ${n}...`,
    author: 'Lukas Pfahlsberger',
  })
  return {
    blogPosts: {
      de: [1, 2, 3, 4, 5, 6].map((n) => post('de', n)),
      en: [1, 2, 3, 4, 5, 6].map((n) => post('en', n)),
    },
  }
})

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
  test('renders the heading and subtitle from the translations', () => {
    renderTeaser()

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(translations.en.blog.title)
    expect(heading).toHaveTextContent(translations.en.blog.titleHighlight)
    expect(screen.getByText(translations.en.blog.subtitle)).toBeInTheDocument()
  })

  test('renders German copy and German posts on a German route', () => {
    const { container } = renderTeaser({}, '/de')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      translations.de.blog.title
    )
    expect(screen.getByText(translations.de.blog.subtitle)).toBeInTheDocument()
    const desktopGrid = container.querySelector('.hidden.lg\\:grid')
    expect(desktopGrid).toHaveTextContent('de post 1')
    expect(desktopGrid).not.toHaveTextContent('en post 1')
  })

  test('renders one card per maxItems in the desktop grid', () => {
    const { container } = renderTeaser({ maxItems: 5 })

    const desktopGrid = container.querySelector('.hidden.lg\\:grid')
    expect(desktopGrid).toBeInTheDocument()
    expect(desktopGrid?.children).toHaveLength(5)
  })

  test('defaults to the three latest posts, linked to the blog', () => {
    const { container } = renderTeaser()

    const desktopGrid = container.querySelector('.hidden.lg\\:grid')
    expect(desktopGrid?.children).toHaveLength(3)
    expect(desktopGrid?.querySelector('a')).toHaveAttribute(
      'href',
      'https://blog.noreja.com/en/post-1'
    )
  })

  test('unmounts without errors', () => {
    const { unmount } = renderTeaser()

    expect(() => unmount()).not.toThrow()
  })
})
