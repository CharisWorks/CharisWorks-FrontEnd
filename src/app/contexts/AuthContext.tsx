import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import type { User } from 'firebase/auth'
import { auth } from '../api/firebase_api'

//
//code from https://github.com/Nameless-itf23/SimpleAuth
//

interface Props {
  children: ReactNode
}

type UserType = User | null | undefined

const AuthContext = createContext<UserType>(auth.currentUser)

function useAuthContext() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>(undefined)
  const value: UserType = user

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user: UserType) => {
      setUser(user)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { useAuthContext, AuthProvider }
