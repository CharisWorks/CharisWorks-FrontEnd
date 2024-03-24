import { getCart, getUser } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const CartLoading = () => {
  return <p>カートを取得中...</p>
}
const Cart = () => {
  const router = useRouter()
  const user = useAuthContext()
  const [idToken, setIdToken] = useState<string | undefined>('')
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  const { data, isLoading, error } = getCart(idToken)
  if (isLoading) {
    return <CartLoading />
  }
  if (error) {
    return <p>エラーが発生しました</p>
  }
  if (data === undefined) {
    return <p>データがありません</p>
  }
  return (
    <>
      <p>カートのページ</p>
    </>
  )
}

export default Cart
