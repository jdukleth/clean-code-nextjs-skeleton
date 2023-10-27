import { callOpenAiApi } from './callOpenAiApi'

export const getFilesList = async () => {
  const fetched = await callOpenAiApi('files')

  return fetched
}
