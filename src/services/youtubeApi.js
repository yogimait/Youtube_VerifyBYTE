import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export async function checkSubscription(channelId) {
  const accessToken = localStorage.getItem('youtube_access_token')
  
  try {
    const response = await axios.get(`${BASE_URL}/subscriptions`, {
      params: {
        part: 'snippet',
        forChannelId: channelId,
        mine: true
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return response.data.items.length > 0
  } catch (error) {
    console.error('Error checking subscription:', error)
    return false
  }
}