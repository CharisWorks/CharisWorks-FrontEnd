'use client'
import { useState } from 'react'
import { FirebaseRequestImpl } from '@/api/lib/instances'
import { auth } from '@/api/firebase'
import { useRouter } from 'next/navigation'
import { useToast } from '@chakra-ui/react'

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
    router.push('/mypage')
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
          toast.promise(SignIn(), {
            loading: { title: 'サインイン中' },
            success: {
              title: 'サインインしました',
            },
            error: { title: 'エラーが発生しました' },
          })
        }}
      >
        Sign In
      </button>
    </div>
  )
}

export default Signin
