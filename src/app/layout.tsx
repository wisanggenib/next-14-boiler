'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store'
import './globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/clients'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
              <div style={{ height: '100vh' }}>{children}</div>
            </ApolloProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
