import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fonts } from '../fonts'
const inter = Inter({ subsets: ['latin'] })
import 'ress/ress.css'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import { Providers } from './provider'
import Header from './header'
import Footer from './footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
