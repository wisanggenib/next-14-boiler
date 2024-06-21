'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Wrapper } from '@/app/(private)/dashboard/styles'

const Dashboard = () => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  return (
    <Wrapper>
      <div>{JSON.stringify(userData)}</div>
    </Wrapper>
  )
}

export default Dashboard
