import fs from 'fs'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import { callOpenAiApi } from './callOpenAiApi'

export const storeFile = async (filePath) => {
  const stats = fs.statSync(filePath)
  const fileSize = stats.size

  const payload = {
    id: nanoid(10),
    object: 'file',
    bytes: fileSize,
    created_at: dayjs().unix(),
    filename: filePath,
    purpose: 'fine-tune',
    status: 'uploaded',
    status_details: null
  }

  const fetched = await callOpenAiApi('files', payload)

  return fetched
}
