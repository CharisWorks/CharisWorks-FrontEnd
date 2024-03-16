'use client'
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
  use,
} from 'react'
import type { User } from 'firebase/auth'
import { auth } from '../api/firebase'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthContext } from './AuthContext'
//
//code from https://github.com/Nameless-itf23/SimpleAuth
//

interface Props {
  children: ReactNode
}

type UserType = User | null | undefined

const AuthRequiredContext = createContext<UserType>(auth.currentUser)

const AuthRequiredProvider = ({ children }: Props) => {
  const pathname = usePathname()
  const user = useAuthContext()
  const router = useRouter()

  const value: UserType = user
  useEffect(() => {
    if (pathname === '/mypage') {
      if (user) {
        if ('emailVerified' in user) {
          if (!user?.emailVerified) {
            router.push('/sendverification')
          }
        }
      }
    }
  }, [user])
  return (
    <AuthRequiredContext.Provider value={value}>
      {children}
    </AuthRequiredContext.Provider>
  )
}

export { AuthRequiredProvider }
