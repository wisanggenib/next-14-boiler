'use client'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/slices/authSlice'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login())
    router.push('/dashboard')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
