import React, { useEffect, useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
  EpsBankElement,
} from '@stripe/react-stripe-js'

type Props = {
  clientSecret: string
}
export default function CheckoutForm(Props: Props) {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = Props.clientSecret
    if (clientSecret != '') {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent?.status) {
          case 'succeeded':
            setMessage('Payment succeeded!')
            break
          case 'processing':
            setMessage('Your payment is processing.')
            break
          case 'requires_payment_method':
            setMessage('Your payment was not successful, please try again.')
            break
          default:
            setMessage('Something went wrong.')
            break
        }
      })
      const appearance: { theme: 'flat' } = {
        theme: 'flat',
      }

      const elements = stripe.elements({
        clientSecret,
        appearance,
      })
    }
  }, [stripe])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(e)
    console.log(stripe)
    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000',
      },
    })
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message!)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions: {
    layout: 'tabs' | 'accordion'
    paymentMethodOrder: string[]
  } = {
    layout: 'accordion',
    paymentMethodOrder: ['card', 'konbini', 'external_paypay'],
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
