'use client'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const user = useAuthContext().user

  if (!user) {
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
  if (!user.emailVerified) {
    return (
      <>
        <p>メール認証してください</p>
        <div>
          <button
            onClick={() => {
              router.push('/mypage/sendverification')
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
