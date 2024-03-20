'use client'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './_component/CheckoutForm'
import { StripeRequestImpl } from '../api/lib/instances'
import { useAuthContext } from '../contexts/AuthContext'
import { IStripeRequests } from '../api/models/stripe'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)

export default function App() {
  const user = useAuthContext()
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      if (idToken) {
        const StripeRequest: IStripeRequests = StripeRequestImpl(idToken)
        console.log(idToken)
        const response = await StripeRequest.Buy()
        setClientSecret(response.clientSecret)
      }
    })()
  }, [user])
  const appearance: {
    theme: 'stripe' | 'night' | 'flat'
  } = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="App">
      {clientSecret ? (
        <>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
