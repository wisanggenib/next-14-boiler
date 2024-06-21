'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/dashboard')
  }, [router])
  return (
    <div className="text-3xl font-bold underline bg-red-400">Hello world!</div>
  )
}

export default Home
