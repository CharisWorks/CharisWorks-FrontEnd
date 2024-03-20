'use client'
import { useRouter } from 'next/navigation'
import { UserRequestImpl } from '../../api/lib/instances'
import { use, useEffect, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { BackendUser } from '../../api/models/user'
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
      console.log(res)
    }
  }
  return (
    <AuthRequiredProvider>
      {' '}
      <p>マイページ</p>
      <button
        onClick={() => {
          router.push('/debug/image')
        }}
      >
        画像フォームへ
      </button>
    </AuthRequiredProvider>
  )
}
export default Mypage
