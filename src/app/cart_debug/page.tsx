'use client'
import { useAuthContext } from '../contexts/AuthContext'
import {
  FirebaseRequestImpl,
  CartRequestImpl,
  ManufacturerRequestImpl,
} from '../api/lib/firebase'
import { auth } from '../api/firebase'

const Cart = () => {
  const user = useAuthContext()

  const GetCart = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const CartRequest = CartRequestImpl(idToken)
      const ManufacturerRequest = ManufacturerRequestImpl(idToken)
      console.log(idToken)
      console.log(CartRequest.Get())
      console.log(ManufacturerRequest.CreateAccountRequest())
    }
  }
  const mypage = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const ManufacturerRequest = ManufacturerRequestImpl(idToken)
      console.log(idToken)

      console.log(ManufacturerRequest.GetStripeMypageURL())
    }
  }
  const LogInHoge = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'hoge@example.com', 'example')
  }
  const LogInFuga = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'fuga@example.com', 'example')
  }
  return (
    <>
      <p>カートのページ</p>
      <div>
        <button
          onClick={() => {
            GetCart()
          }}
        >
          <p>GetCart</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInHoge()
          }}
        >
          <p>LogInHoge</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInFuga()
          }}
        >
          <p>LogInFuga</p>
        </button>
        <button
          onClick={() => {
            mypage()
          }}
        >
          <p>mypage</p>
        </button>
      </div>
    </>
  )
}
export default Cart
