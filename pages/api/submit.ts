import type { NextApiRequest, NextApiResponse } from 'next'
import Replicate from 'replicate'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import requestIp from 'request-ip'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || ''
})

const redis = new Redis({
  url: 'https://eu2-merry-bird-32058.upstash.io',
  token: process.env.UPSTASH_TOKEN || ''
})
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, '3600 s')
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { nolimit } = req.body
  const clientIp = requestIp.getClientIp(req)
  if (!clientIp) {
    res.status(403).json({
      message: 'The request has been rate limited.'
    })
    return
  }
  if (!nolimit) {
    const rateLimitResult = await ratelimit.limit(clientIp)
    res.setHeader('X-RateLimit-Limit', rateLimitResult.limit)
    res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining)

    if (!rateLimitResult.success) {
      res.status(403).json({
        message: 'The request has been rate limited.',
        rateLimitState: rateLimitResult
      })
      return
    }
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { imageUrl } = req.body
  try {
    const output = await replicate.run(
      'andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608',
      {
        input: {
          image: imageUrl,
          caption: true
        }
      }
    )

    res.status(200).json(output)
  } catch (err) {
    console.error('Error processing upload:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}
