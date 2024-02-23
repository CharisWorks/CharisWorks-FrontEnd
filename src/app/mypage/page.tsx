'use client'
import { useRouter } from 'next/navigation'
import { UserRequestImpl } from '../api/lib/firebase'
import { use, useEffect, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { BackendUser, Error } from '../api/models/user'
import { AuthRequiredProvider } from '../contexts/UserContext'

const Mypage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useAuthContext()
  const [response, setResponse] = useState<any>('')
  useEffect(() => {
    ;(async () => {
      SignUp()
    })()
  }, [user])

  const SignUp = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const UserRequest = UserRequestImpl(idToken)
      const res: BackendUser = await UserRequest.Get()
    }
  }
  return (
    <AuthRequiredProvider>
      {' '}
      <p>マイページ</p>
    </AuthRequiredProvider>
  )
}
export default Mypage
