import { getCart } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
const CartLoading = () => {
  return <p>カートを取得中...</p>
}
const Cart = () => {
  const { data, isLoading, error } = getCart(useAuthContext().idToken)
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
