import { callOpenAiApi } from 'actions/utilities/ai/chat-gpt/callOpenAiApi'

export const setFineTuningFile = async (fileId) => {
  const payload = {
    training_file: fileId,
    model: 'gpt-3.5-turbo'
  }

  const fetched = await callOpenAiApi('chat/completions', payload)

  return fetched
}
