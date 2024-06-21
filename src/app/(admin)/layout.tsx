'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import AdminLayout from '../layouts/AdminLayout'
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

  const userData = useSelector((state: RootState) => state.auth.userData)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
    if (userData?.role !== 'vendor') {
      console.log(userData)
      router.push('/dashboard')
    }
  }, [isAuthenticated, userData, router])

  const handleLogout = () => {
    dispatch(logout())
    router.push('/login')
  }

  return <AdminLayout handleLogout={handleLogout}>{children}</AdminLayout>
}

export default PrivateLayoutWrapper
