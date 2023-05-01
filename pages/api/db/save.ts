import { supabase } from 'lib/supabase/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890', 10)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | Error>
) {
  const { title, story, image } = req.body
  const key = nanoid(10)
  try {
    const { data, error } = await supabase
      .from('story')
      .insert([
        {
          title,
          story,
          image,
          key
        }
      ])
      .select()
    if (error) {
      res.status(500).json({ message: error.message, details: error.details })
      return
    }
    const storyKey = data[0].key
    res.status(200).json({ key: storyKey })
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}
