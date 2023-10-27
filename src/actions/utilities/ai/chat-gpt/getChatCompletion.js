import { callOpenAiApi } from 'actions/utilities/ai/chat-gpt/callOpenAiApi'

export const getChatCompletion = async (prompt) => {
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        'role': 'user',
        'content': prompt
      }
    ]
  }

  const fetched = await callOpenAiApi('chat/completions', payload)

  return fetched
}
