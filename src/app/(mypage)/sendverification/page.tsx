'use client'
import { sendEmailVerification } from 'firebase/auth'
import { useAuthContext } from '../../contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const SendVerification = () => {
  const user = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    if (user) {
      if (user.emailVerified) {
        router.push('/mypage')
      }
    }
  }, [user])
  return (
    <div>
      <h3>Eメール認証ページ</h3>
      <button
        onClick={() => {
          if (user) {
            sendEmailVerification(user)
          }
        }}
      >
        送る
      </button>
    </div>
  )
}
export default SendVerification
