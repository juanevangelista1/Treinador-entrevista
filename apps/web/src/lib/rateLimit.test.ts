import { describe, it, expect, afterEach, vi } from 'vitest'
import { checkRateLimit, getClientKey } from './rateLimit'

describe('checkRateLimit', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('allows requests up to the limit', () => {
    const key = 'allows-up-to-limit'
    const options = { limit: 3, windowMs: 60_000 }

    expect(checkRateLimit(key, options).allowed).toBe(true)
    expect(checkRateLimit(key, options).allowed).toBe(true)
    expect(checkRateLimit(key, options).allowed).toBe(true)
  })

  it('blocks the request once the limit is exceeded', () => {
    const key = 'blocks-over-limit'
    const options = { limit: 2, windowMs: 60_000 }

    checkRateLimit(key, options)
    checkRateLimit(key, options)
    const third = checkRateLimit(key, options)

    expect(third.allowed).toBe(false)
    expect(third.retryAfterSeconds).toBeGreaterThan(0)
  })

  it('tracks separate clients independently', () => {
    const options = { limit: 1, windowMs: 60_000 }

    expect(checkRateLimit('client-a', options).allowed).toBe(true)
    expect(checkRateLimit('client-b', options).allowed).toBe(true)
    expect(checkRateLimit('client-a', options).allowed).toBe(false)
  })

  it('resets the counter once the window elapses', () => {
    vi.useFakeTimers()
    const key = 'resets-after-window'
    const options = { limit: 1, windowMs: 1_000 }

    expect(checkRateLimit(key, options).allowed).toBe(true)
    expect(checkRateLimit(key, options).allowed).toBe(false)

    vi.advanceTimersByTime(1_001)

    expect(checkRateLimit(key, options).allowed).toBe(true)
  })
})

describe('getClientKey', () => {
  it('returns the first IP from x-forwarded-for', () => {
    const req = new Request('https://example.com', {
      headers: { 'x-forwarded-for': '203.0.113.5, 10.0.0.1' },
    })

    expect(getClientKey(req)).toBe('203.0.113.5')
  })

  it('falls back to "unknown" when the header is missing', () => {
    const req = new Request('https://example.com')

    expect(getClientKey(req)).toBe('unknown')
  })
})
