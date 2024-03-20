'use client'
import { AuthRequiredProvider } from '@/app/contexts/UserContext'
import { useRouter } from 'next/navigation'
import UserData from './_components/userData'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useState } from 'react'

const Mypage = () => {
  const user = useAuthContext()
  const [idToken, setIdToken] = useState<string>('')
  user?.getIdToken().then((idToken) => {
    setIdToken(idToken)
  })

  const router = useRouter()
  return (
    <AuthRequiredProvider>
      {' '}
      <p>マイページ</p>
      <UserData idToken={idToken} />
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
