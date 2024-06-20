'use client'

import { ReactNode } from 'react'

type PrivateLayoutProps = {
  children: ReactNode
  handleLogout: () => void
}

const PrivateLayout = ({ children, handleLogout }: PrivateLayoutProps) => {
  return (
    <div>
      <header>
        Private Header
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>{children}</main>
      <footer>Private Footer</footer>
    </div>
  )
}

export default PrivateLayout
