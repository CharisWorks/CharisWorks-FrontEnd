'use client'
import { AuthProvider } from './contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Montserrat, Beau_Rivage, Noto_Serif_JP } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['cyrillic'] })
const beau_rivage = Beau_Rivage({ subsets: ['latin'], weight: '400' })
const noto_japanese = Noto_Serif_JP({ subsets: ['latin'], weight: '400' })
const theme = extendTheme({
  fonts: {
    montserrat: montserrat.style.fontFamily,
    beau_rivage: beau_rivage.style.fontFamily,
    noto_japanese: noto_japanese.style.fontFamily,
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'teal.900',
      },
    },
  },
})
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  )
}
