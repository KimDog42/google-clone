import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
 