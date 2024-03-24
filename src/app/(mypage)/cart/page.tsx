'use client'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { getCart } from '@/api/fetcher'

const Cart = () => {
  const { data, isLoading, error } = getCart(useAuthContext().idToken)
  return (
    <div>
      <h1>Cart</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        data?.items?.map((item) => {
          return (
            <div key={item.item_id}>
              <p>{item.item_id}</p>
              <p>{item.properties.price}</p>
              <p>{item.quantity}</p>
              <p>{item.properties.name}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
export default Cart
