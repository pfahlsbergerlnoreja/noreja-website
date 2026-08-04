import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.hbspt for HubSpot tests  
Object.defineProperty(window, 'hbspt', {
  value: {
    forms: {
      create: vi.fn(),
    },
  },
  writable: true,
})

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
})

// jsdom implements neither observer API; scroll-triggered animations depend on them
class MockObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
  root = null
  rootMargin = ''
  thresholds: number[] = []
}

Object.defineProperty(window, 'IntersectionObserver', {
  value: MockObserver,
  writable: true,
})
Object.defineProperty(globalThis, 'IntersectionObserver', {
  value: MockObserver,
  writable: true,
})
Object.defineProperty(window, 'ResizeObserver', {
  value: MockObserver,
  writable: true,
})
Object.defineProperty(globalThis, 'ResizeObserver', {
  value: MockObserver,
  writable: true,
})

// jsdom does not implement matchMedia, which the responsive hooks rely on
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated, kept for older consumers
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
  writable: true,
})