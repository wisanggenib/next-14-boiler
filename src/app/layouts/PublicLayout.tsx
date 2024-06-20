import { ReactNode } from 'react'

type PublicLayoutProps = {
  children: ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <header>Public Header</header>
      <main>{children}</main>
      <footer>Public Footer</footer>
    </div>
  )
}

export default PublicLayout
