import { ReactNode } from 'react'
import PublicLayout from '../layouts/PublicLayout'

type PublicLayoutProps = {
  children: ReactNode
}

const PublicLayoutWrapper = ({ children }: PublicLayoutProps) => {
  return <PublicLayout>{children}</PublicLayout>
}

export default PublicLayoutWrapper
