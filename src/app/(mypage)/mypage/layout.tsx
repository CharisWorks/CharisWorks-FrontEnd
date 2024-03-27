'use client'
import { getUser } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
    duration: 5000,
  })
  const router = useRouter()
  const user = useAuthContext().user
  const { data, isLoading, error } = getUser(useAuthContext().idToken)
  if ((!user && !isLoading) || user === null) {
    return (
      <>
        <p>ログインしてください</p>
        <button
          onClick={() => {
            router.push('/')
          }}
        >
          トップページへ
        </button>
      </>
    )
  }
  if (!user?.emailVerified && user && user.email) {
    return (
      <>
        <p>メール認証してください</p>
        <div>
          <button
            onClick={() => {
              router.push('/sendverification')
            }}
          >
            Eメール認証ページへ
          </button>
        </div>
      </>
    )
  }
  return <section>{children}</section>
}
