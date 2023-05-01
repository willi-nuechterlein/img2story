import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { outline, genre, title } = req.body
  try {
    const reqBody = JSON.stringify({
      model: 'gpt-3.5-turbo-0301',
      messages: [
        {
          role: 'system',
          content: `Act as a story writer.
          Given a title, story outline and genre, your task is to write a medium long story. The story should be based on the outline. The story should be of the genre provided to you.      
          `
        },
        {
          role: 'user',
          content: `Title: ${title}
          Genre: ${genre}
          Story outline: ${outline}
          Full story:
          `
        }
      ]
    })
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: reqBody
    })
    const resJson = await response.json()
    const story: string = resJson.choices[0].message.content
    res.status(200).json({ story })
  } catch (err) {
    console.error('Error processing upload:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}
