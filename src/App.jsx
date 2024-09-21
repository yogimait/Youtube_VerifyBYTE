import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import SubscriptionStatus from './components/SubscriptionStatus'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/youtube/callback" element={<Login />} />
      <Route 
        path="/subscription-status" 
        element={
          <PrivateRoute>
            <SubscriptionStatus />
          </PrivateRoute>
        } 
      />
    </Routes>
  )
}

export default App