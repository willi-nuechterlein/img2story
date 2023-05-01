import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import formidable, { File, Files } from 'formidable'
import { BUCKET_URL, supabase } from 'lib/supabase/supabase'

export const config = {
  api: {
    bodyParser: false
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let status = 200
  let resultBody

  const form = new formidable.IncomingForm()
  const uploadFile = async () => {
    return new Promise((resolve, reject) => {
      form.parse(req, async function (err, _fields, files: Files) {
        const file = files.file as File
        const filepath = file.originalFilename
        const contentType = file.mimetype
        const rawData = fs.readFileSync(file.filepath)
        if (!filepath || !contentType) return reject({ success: false })
        const { data, error } = await supabase.storage
          .from('images')
          .upload(filepath, rawData, {
            cacheControl: '3600',
            upsert: false,
            contentType
          })
        if (error || err) {
          status = 500
          resultBody = {
            status: 'fail',
            message: 'Upload error'
          }
          return reject({ success: false })
        }
        if (data) {
          resultBody = {
            status: 'ok',
            message: 'Files were uploaded successfully',
            fileUrl: `${BUCKET_URL}${data.path}`
          }
        }
        resolve({ success: true })
      })
    })
  }
  try {
    await uploadFile()
    res.status(status).json(resultBody)
  } catch (err) {
    res.status(status).json(resultBody)
  }
}

export default handler
