import { ReactNode } from 'react'

type PublicLayoutProps = {
  children: ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="bg-white" style={{ height: '100vh' }}>
      <main>{children}</main>
    </div>
  )
}

export default PublicLayout
