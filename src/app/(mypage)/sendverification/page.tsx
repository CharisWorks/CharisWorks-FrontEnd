'use client'
import { sendEmailVerification } from 'firebase/auth'
import { useAuthContext } from '../../contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@chakra-ui/react'
const SendVerification = () => {
  const user = useAuthContext().user
  const router = useRouter()
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  })
  useEffect(() => {
    if (user) {
      if (user?.emailVerified) {
        router.replace('/mypage')
      }
    }
  }, [user])
  return (
    <div>
      <h3>Eメール認証ページ</h3>
      <p>{user?.email}に認証メールを送信します。</p>
      <button
        onClick={() => {
          if (user) {
            toast.promise(sendEmailVerification(user), {
              loading: { title: '送信中' },
              success: { title: '認証メールを送信しました' },
              error: { title: '送信に失敗しました' },
            })
            router.push('/')
          }
        }}
      >
        送る
      </button>
    </div>
  )
}
export default SendVerification
