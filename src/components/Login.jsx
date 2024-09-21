import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { handleAuth } from '../utils/auth'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const code = urlParams.get('code')

    if (code) {
      handleAuth(code).then(() => {
        navigate('/subscription-status')
      })
    }
  }, [location, navigate])

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_YOUTUBE_CLIENT_ID
    const redirectUri = import.meta.env.VITE_REDIRECT_URI
    const scope = 'https://www.googleapis.com/auth/youtube.force-ssl'
    
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0'
      }}>
        <h1 style={{
          color: '#FF0000',
          fontSize: '2.5em',
          marginBottom: '20px'
        }}>Welcome to BYTE Subscription Checker</h1>
        <button onClick={handleLogin} style={{
          backgroundColor: '#FF0000',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1.2em',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>Login with YouTube</button>
      </div>
  )
}

export default Login