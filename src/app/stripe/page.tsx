'use client'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './_component/CheckoutForm'
import { StripeRequestImpl } from '../api/lib/firebase'
import { useAuthContext } from '../contexts/AuthContext'
import { IStripeRequests } from '../api/models/stripe'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)

type appearance = {
  theme: 'stripe' | 'night' | 'flat'
}
export default function App() {
  const user = useAuthContext()
  const [clientSecret, setClientSecret] = useState('')
  const getSecret = async () => {
    const idToken = await user?.getIdToken()
    if (idToken) {
      const StripeRequest: IStripeRequests = StripeRequestImpl(idToken)
      console.log(idToken)
      const response = await StripeRequest.Buy()
      setClientSecret(response.clientSecret)
    }
  }

  useEffect(() => {
    getSecret()
  }, [user])
  const appearance: appearance = {
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
