'use client'
import { getUser } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'

const Address = () => {
  const { data, isLoading } = getUser(useAuthContext().idToken)
  return (
    <div>
      <h1>Address</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>First Name: {data?.address.first_name}</p>
          <p>Last Name: {data?.address.last_name}</p>
          <p>Zip Code: {data?.address.zip_code}</p>
          <p>Address 1: {data?.address.address_1}</p>
          <p>Address 2: {data?.address.address_2}</p>
          <p>Address 3: {data?.address.address_3}</p>
          <p>Phone Number: {data?.address.phone_number}</p>
        </div>
      )}
    </div>
  )
}
export default Address
