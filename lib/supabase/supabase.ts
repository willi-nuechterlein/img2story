import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tnmaxzeofeasjiivdpff.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
export const BUCKET_URL =
  'https://tnmaxzeofeasjiivdpff.supabase.co/storage/v1/object/public/images/'
export const supabase = createClient(supabaseUrl, supabaseKey)
