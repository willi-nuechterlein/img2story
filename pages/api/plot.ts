import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { caption, genre, name } = req.body
  try {
    const reqBody = JSON.stringify({
      model: 'gpt-3.5-turbo-0301',
      messages: [
        {
          role: 'system',
          content: `Act as story writer.
          Given a caption of a photo and a genre, your task is to write a brief story outline and a stroy title. You should incorporate the content of the photo into the plot. The story should be of the genre provided to you.
          First, come up with a Story Title.
          Then write the story outline in the genre you were provided.
          If provided with CHARACTER_NAME, use it in your story. If not, come up with character name(s).
                    
          Respond in valid json with properties
          - title
          - outline

          outline value should be one string, no line breaks 
          DO NOT INCLUDE LINE BREAKS IN YOUR RESPONSE.

          Example response:
          {
            "title": "The story title",
            "outline": "The story outline"
          }
          `
        },
        {
          role: 'user',
          content: `Photo caption: ${caption}
          Genre: ${genre}
          ${name ? `CHARACTER_NAME: ${name}` : ''}
          Response (in valid json):
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
    const answer: string = resJson.choices[0].message.content
    res.status(200).send(answer)
  } catch (err) {
    console.error('Error processing upload:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}
