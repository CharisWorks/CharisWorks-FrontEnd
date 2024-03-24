import { getTransaction } from '@/api/fetcher'
import { Transaction, TransactionItem } from '@/api/models/transaction'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useState } from 'react'
import TransactionDetails from './transactionDetails'

const Transactions = (props: { transactionItem: TransactionItem }) => {
  return (
    <div>
      <p>{props.transactionItem.item_id}</p>
      <p>{props.transactionItem.price}</p>
      <p>{props.transactionItem.quantity}</p>
      <p>{props.transactionItem.name}</p>
    </div>
  )
}

const TransactionList = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<
    string | undefined
  >(undefined)
  const { data, isLoading, error } = getTransaction(useAuthContext().idToken)
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
            {transaction.items.map((item) => {
              return selectedTransaction === transaction.transaction_id ? (
                <TransactionDetails
                  transactionId={transaction.transaction_id}
                />
              ) : (
                <div
                  onClick={() => {
                    setSelectedTransaction(transaction.transaction_id)
                  }}
                >
                  <Transactions transactionItem={item} />
                </div>
              )
            })}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TransactionList
