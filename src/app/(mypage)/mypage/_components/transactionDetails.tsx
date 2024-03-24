import { getTransactionDetail } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'

const TransactionDetails = (props: { transactionId: string }) => {
  const { data, isLoading, error } = getTransactionDetail(
    useAuthContext().idToken,
    props.transactionId,
  )
  return (
    <div>
      <h1>Transaction Details</h1>
      <div>
        {data?.items.map((item) => (
          <div key={item.item_id}>
            <p>{item.item_id}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionDetails
