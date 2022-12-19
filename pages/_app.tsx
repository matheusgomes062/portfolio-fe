import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { Rubik } from '@next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <main className={rubik.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
  )
}
