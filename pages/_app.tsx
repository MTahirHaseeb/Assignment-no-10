import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap");
  }, [])
  return <Component {...pageProps} />;
}
