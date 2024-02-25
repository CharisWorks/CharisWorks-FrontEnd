'use client'
import { useAuthContext } from '../contexts/AuthContext'
import {
  FirebaseRequestImpl,
  CartRequestImpl,
  ManufacturerRequestImpl,
} from '../api/lib/firebase'
import { auth } from '../api/firebase'
import { useState } from 'react'

const Cart = () => {
  const user = useAuthContext()
  const [response, setResponse] = useState<any>('')
  const GetCart = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const CartRequest = CartRequestImpl(idToken)
      console.log(idToken)
      const res = await CartRequest.Get()
      console.log(res)
      setResponse(res.message)
    }
  }

  const getStripemypage = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const ManufacturerRequest = ManufacturerRequestImpl(idToken)
      console.log(idToken)
      const res = await ManufacturerRequest.GetStripeMypageURL()
      console.log(res)
      setResponse(res.url)
      setResponse(res.message)
    }
  }
  const createStripeAccont = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const ManufacturerRequest = ManufacturerRequestImpl(idToken)
      console.log(idToken)
      const res = await ManufacturerRequest.CreateAccountRequest()
      console.log(res)
      setResponse(res.url)
      setResponse(res.message)
    }
  }
  const register = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const ManufacturerRequest = ManufacturerRequestImpl(idToken)
      console.log(idToken)
      const message = await ManufacturerRequest.PostProducts({
        name: 'test',
        price: 10000,
        details: {
          status: 'Available',
          stock: 1,
          size: 1,
          description: 'test',
          tags: ['test'],
        },
      })
      console.log(message)
      setResponse(message.message)
    }
  }
  const LogInHoge = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'hoge@example.com', 'example')
  }
  const LogInFuga = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'fuga@example.com', 'example')
  }
  const LogInFoo = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'foo@example.com', 'example')
  }
  const LogInBar = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'bar@example.com', 'example')
  }
  const LogInFooBar = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'foobar@example.com', 'example')
  }
  const NotLogInFooBar = () => {
    FirebaseRequestImpl.SignInWithEmail(auth, 'foobar@example.com', 'exampl')
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
            LogInFuga()
          }}
        >
          <p>LogInFuga(valid account)</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInHoge()
          }}
        >
          <p>LogInHoge(no account data)</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInFoo()
          }}
        >
          <p>LogInFoo(no account id)</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInBar()
          }}
        >
          <p>LogInBar(not manufacturer)</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            LogInFooBar()
          }}
        >
          <p>LogInFooBar(account not exists in DB)</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            NotLogInFooBar()
          }}
        >
          <p>login fail</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            getStripemypage()
          }}
        >
          <p>stripemypage</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            createStripeAccont()
          }}
        >
          <p>createStripeAccount</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            register()
          }}
        >
          <p>itemRegister</p>
        </button>
      </div>

      <div>response: {response}</div>
    </>
  )
}
export default Cart
