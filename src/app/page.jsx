import { getChatCompletion } from 'actions/utilities/ai/chat-gpt/getChatCompletion'

const HomePage = async ({ params: { test } }) => {
  const prompt = 'Hello'
  const maxTokens = 10
  const response = await getChatCompletion(prompt, maxTokens)

  console.log(response.choices[0])

  return (
    <>Home Page {test}</>
  )
}

export default HomePage

export const generateStaticParams = () => [{ test: 'test123' }]
export const dynamicParams = false
