'use client'

import { ReactNode } from 'react'
import HeaderUser from '../components/headerUser'

type PrivateLayoutProps = {
  children: ReactNode
  handleLogout: () => void
}

const PrivateLayout = ({ children, handleLogout }: PrivateLayoutProps) => {
  return (
    <div style={{ height: '100vh' }}>
      <HeaderUser handleLogout={handleLogout} />
      {/* <header>
        Private Header
        <button onClick={handleLogout}>Logout</button>
      </header> */}
      <main
        style={{ height: '90vh', overflow: 'hidden' }}
        className="no-scrollbar"
      >
        <div
          className="no-scrollbar"
          style={{ height: '90vh', overflow: 'scroll' }}
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default PrivateLayout
