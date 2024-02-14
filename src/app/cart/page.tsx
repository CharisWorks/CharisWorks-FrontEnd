import { useAuthContext } from '../contexts/AuthContext'

import { FirebaseRequest } from '../api/lib/firebase'
import { useEffect } from 'react'
const Cart = () => {
  const user = useAuthContext()
  useEffect(() => {
    ;(async () => {
      if (user) FirebaseRequest.SaveIdTokenToLocalStorage(user)
    })()
  }, [user])

  return (
    <>
      <p>カートのページ</p>
    </>
  )
}
export default Cart
