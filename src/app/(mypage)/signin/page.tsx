'use client'
import { useEffect, useState } from 'react'
import { FirebaseRequestImpl } from '@/api/lib/instances'
import { auth } from '@/api/firebase'
import { useRouter } from 'next/navigation'
import { Button, useToast } from '@chakra-ui/react'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import * as firebaseAuth from 'firebase/auth'
import { useAuthContext } from '@/app/contexts/AuthContext'
const Signin = () => {
  const router = useRouter()
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const SignIn = async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, email, password)

    const user = auth.currentUser
    if (!user?.emailVerified) {
      toast({
        title: 'メール認証を完了してください',
      })
      router.push('/sendverification')
      return
    }
    toast({
      title: 'ログインしました',
    })
    router.push('/')
  }
  return (
    <div>
      <h1>Sign In</h1>
      <label>Email</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          SignIn()
        }}
      >
        Sign In
      </button>
      <Button
        onClick={async () => {
          const provider = new GoogleAuthProvider()
          try {
            router.push('/')
            await firebaseAuth.signInWithRedirect(
              firebaseAuth.getAuth(),
              provider,
            )
          } catch (e) {
            console.log(e)
          }
        }}
      >
        Sign In with goole
      </Button>
    </div>
  )
}

export default Signin
