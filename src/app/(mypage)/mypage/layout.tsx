'use client'
import { getUser } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const user = useAuthContext().user
  const { data, isLoading, error } = getUser(useAuthContext().idToken)
  if (!user && !isLoading) {
    return (
      <>
        <p>ログインしてください</p>
        <div>
          signin: <button onClick={() => router.push('/signin')}>signin</button>
          signup: <button onClick={() => router.push('/signup')}>signup</button>
        </div>
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
