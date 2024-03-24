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
import { auth } from '../../api/firebase'
import { usePathname, useRouter } from 'next/navigation'

//
//code from https://github.com/Nameless-itf23/SimpleAuth
//

interface Props {
  children: ReactNode
}

export type UserType = User | null | undefined

const AuthContext = createContext<{
  user: UserType
  idToken: string | undefined
}>({
  user: auth.currentUser,
  idToken: undefined,
})

function useAuthContext() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>(undefined)
  const [idToken, setIdToken] = useState<string | undefined>(undefined)
  const value: UserType = user
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user: UserType) => {
      setUser(user)
    })
    return () => {
      unsubscribed()
    }
  }, [])
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  return (
    <AuthContext.Provider value={{ user: value, idToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuthContext, AuthProvider }
