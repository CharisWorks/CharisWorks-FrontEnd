'use client'
import { useAuthContext } from '../contexts/AuthContext'
import { CartRequestImpl } from '../api/lib/instances'

const Cart = () => {
  const user = useAuthContext()

  const GetCart = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const CartRequest = CartRequestImpl(idToken)
    }
  }
  return (
    <>
      <p>カートのページ</p>
    </>
  )
}
export default Cart
