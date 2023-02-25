import '@/styles/tailwind.css'
import 'focus-visible'

import { ThemeProvider } from 'next-themes'

import { Header } from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
