'use client'
import { useAuthContext } from '../contexts/AuthContext'
import { LogInUsers } from './_components/loginhoge'
import {
  FirebaseRequestImpl,
  CartRequestImpl,
  ManufacturerRequestImpl,
} from '../api/lib/instances'
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
      <LogInUsers />
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
