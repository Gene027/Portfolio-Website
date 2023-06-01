'use client'      //specify that this is client side provider

import { SessionProvider } from 'next-auth/react'   //client-side auth
import { ThemeProvider } from 'next-themes'      //for light and dark mode
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
