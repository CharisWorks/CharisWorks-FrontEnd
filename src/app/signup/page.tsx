'use client'
import { useState } from 'react'
import { FirebaseRequestImpl } from '../api/lib/instances'
import { useAuthContext } from '../contexts/AuthContext'
import { auth } from '../api/firebase'
import { useRouter } from 'next/navigation'
const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useAuthContext()
  const [response, setResponse] = useState<any>('')
  const SignUp = async () => {
    await FirebaseRequestImpl.SignUpWithEmail(auth, email, password)
    router.push('/mypage')
  }
  return (
    <div>
      <h1>Sign Up</h1>
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
          SignUp()
        }}
      >
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
