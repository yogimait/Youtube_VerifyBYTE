import axios from 'axios'

export async function handleAuth(code) {
  const clientId = import.meta.env.VITE_YOUTUBE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_YOUTUBE_CLIENT_SECRET
  const redirectUri = import.meta.env.VITE_REDIRECT_URI

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    })

    const { access_token, refresh_token } = response.data
    localStorage.setItem('youtube_access_token', access_token)
    localStorage.setItem('youtube_refresh_token', refresh_token)
  } catch (error) {
    console.error('Error during authentication:', error)
    throw error
  }
}

export function isAuthenticated() {
  return !!localStorage.getItem('youtube_access_token')
}