'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import PrivateLayout from '../layouts/PrivateLayout'
import { logout } from '../../store/slices/authSlice'

type PrivateLayoutProps = {
  children: ReactNode
}

const PrivateLayoutWrapper = ({ children }: PrivateLayoutProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    dispatch(logout())
    router.push('/login')
  }

  return <PrivateLayout handleLogout={handleLogout}>{children}</PrivateLayout>
}

export default PrivateLayoutWrapper
