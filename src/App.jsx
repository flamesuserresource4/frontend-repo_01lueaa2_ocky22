import React from 'react'
import LogoHeader from './components/LogoHeader'
import AuthCard from './components/AuthCard'
import LegalNotice from './components/LegalNotice'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-fuchsia-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <LogoHeader />
        <AuthCard />
        <LegalNotice />
      </div>
    </div>
  )
}

export default App
