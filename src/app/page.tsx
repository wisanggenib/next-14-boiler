'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/dashboard')
  }, [router])
  return <div>Redirecting ....</div>
}

export default Home
