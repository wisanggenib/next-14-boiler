'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store'
import './globals.css'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div style={{ height: '100vh' }}>{children}</div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
