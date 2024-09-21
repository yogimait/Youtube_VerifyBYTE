import React, { useEffect, useState } from 'react'
import { checkSubscription } from '../services/youtubeApi'

function SubscriptionStatus() {
  const [isSubscribed, setIsSubscribed] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const byteChannelId = import.meta.env.VITE_BYTE_CHANNEL_ID

  useEffect(() => {
    checkSubscription(byteChannelId)
      .then(subscribed => {
        setIsSubscribed(subscribed)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error checking subscription:', error)
        setIsLoading(false)
      })
  }, [])

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    textAlign: 'center'
  }

  const headingStyle = {
    color: '#FF0000',
    fontSize: '2em',
    marginBottom: '20px'
  }

  const linkStyle = {
    backgroundColor: '#FF0000',
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1.1em',
    transition: 'background-color 0.3s'
  }

  if (isLoading) {
    return <div style={containerStyle}><h2 style={headingStyle}>Loading...</h2></div>
  }

  return (
    <div style={containerStyle}>
      {isSubscribed ? (
        <div>
          <h2 style={headingStyle}>You are subscribed to BYTE YouTube channel!</h2>
          <p style={{fontSize: '1.2em', marginBottom: '20px'}}>This is the private route content only subscribers would see</p>
          <p>if you select me i'll give you a cookie🍪 Yogesh IT</p>
          <a 
            href={`https://www.youtube.com/channel/${byteChannelId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Visit BYTE YouTube Channel
          </a>
        </div>
      ) : (
        <div>
          <h2 style={headingStyle}>Sorry, you are not subscribed to BYTE YouTube channel.</h2>
          <p style={{fontSize: '1.2em', marginBottom: '20px'}}>Please subscribe to access exclusive content:</p>
          <a 
            href={`https://www.youtube.com/channel/${byteChannelId}?sub_confirmation=1`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Subscribe to BYTE YouTube Channel
          </a>
          <p style={{fontSize: '1.2em', marginBottom: '20px'}}>Subscribe to see the private route Message for only for </p>
        </div>
      )}
    </div>
  )
}

export default SubscriptionStatus