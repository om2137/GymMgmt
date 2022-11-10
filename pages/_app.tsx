import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { usePreserveScroll } from '../components/usePreserveScroll'

function MyApp({ Component, pageProps }: AppProps) {
  const preserveScroll = usePreserveScroll();
  return(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} preservescroll={preserveScroll} />
    </SessionProvider>
  ) 
  
}

export default MyApp
