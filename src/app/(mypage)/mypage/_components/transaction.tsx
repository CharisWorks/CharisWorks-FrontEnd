import { getTransaction } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Transaction = () => {
  const router = useRouter()
  const user = useAuthContext()
  const [idToken, setIdToken] = useState<string | undefined>('')
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  const { data, isLoading, error } = getTransaction(idToken)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div id="transaction">
      <h1>Transaction</h1>
      <ul>
        {data?.map((transaction) => (
          <li key={transaction.transaction_id}>
            {transaction.items.map((item) => (
              <div key={item.item_id}>
                <p>Item: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
