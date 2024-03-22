'use client'
import { AuthRequiredProvider } from '@/app/contexts/UserContext'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { use, useEffect, useState } from 'react'
import useSWR from 'swr'
import { UserData } from '@/api/models/user'
import { getCart, getUser } from '@/api/fetcher'
const Mypage = () => {
  const user = useAuthContext()
  const router = useRouter()
  const [idToken, setIdToken] = useState<string | undefined>('')
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = getUser(idToken)
  const { data, isLoading, isError } = getCart(idToken)
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  return (
    <AuthRequiredProvider>
      {' '}
      <p>マイページ</p>
      {data && <div>{userData?.profile.display_name}</div>}
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
