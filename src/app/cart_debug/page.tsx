'use client'
import { useAuthContext } from '../contexts/AuthContext'
import { FirebaseRequest } from '../api/lib/firebase'
import { useEffect, useState } from 'react'
import { auth } from '../api/firebase'
import { CartRequests } from '../api/cart'
import { AuthFetchRequests } from '../api/fetch'
import { ICartRequests } from '../api/models/cart'

const Cart = () => {
  const user = useAuthContext()
  const [idToken, setidToken] = useState('')
  let CartRequest: ICartRequests
  useEffect(() => {
    ;(async () => {
      if (user) FirebaseRequest.SaveIdTokenToLocalStorage(user)
      const idToken = await user?.getIdToken()
      if (idToken != null) setidToken(idToken)
    })()
  }, [user])

  const GetCart = () => {
    if (idToken != '') {
      CartRequest = new CartRequests(new AuthFetchRequests(idToken))
      console.log(CartRequest.Get())
    }
  }
  const LogInHoge = () => {
    FirebaseRequest.SignInWithEmail(auth, 'hoge@example.com', 'example')
  }
  const LogInFuga = () => {
    FirebaseRequest.SignInWithEmail(auth, 'fuga@example.com', 'example')
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
      </div>
      <div>idToken: {idToken}</div>
    </>
  )
}
export default Cart
