interface Bucket {
  count: number
  resetAt: number
}

interface RateLimitResult {
  allowed: boolean
  retryAfterSeconds: number
}

// In-memory, per-instance limiter. Good enough for a single Next.js server process;
// behind multiple serverless instances each instance has its own counters, so the
// effective limit is (instances * limit) — acceptable here since the goal is to stop
// a single client from looping requests, not to enforce an exact global quota.
const buckets = new Map<string, Bucket>()

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  if (bucket.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) }
  }

  bucket.count += 1
  return { allowed: true, retryAfterSeconds: 0 }
}

export function getClientKey(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
}
