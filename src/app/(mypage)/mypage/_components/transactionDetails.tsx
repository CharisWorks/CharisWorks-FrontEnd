import { getTransactionDetail } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const TransactionDetails = (transactionId: string) => {
  const router = useRouter()
  const user = useAuthContext()
  const [idToken, setIdToken] = useState<string | undefined>('')
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  const { data, isLoading, error } = getTransactionDetail(
    idToken,
    transactionId,
  )
  return (
    <div>
      <h1>Transaction Details</h1>
    </div>
  )
}
