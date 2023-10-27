export const callOpenAiApi = async (urlPath, payload, extraHeaders = {}) => {
  const url = `https://api.openai.com/v1/${urlPath}`

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
  const headers = { ...defaultHeaders, ...extraHeaders }

  const fetched = await fetch(url, {
    method: !!payload ? 'POST' : 'GET',
    headers,
    body: JSON.stringify(payload)
  })

  return await fetched.json()
}
