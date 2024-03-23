'use client'
import { getUser } from '@/api/fetcher'
import { UserData } from '@/api/models/user'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const AddressNotSet = () => {
  return (
    <div>
      <h2>名前</h2>
      <p>姓:未設定</p>
      <p>名:未設定</p>
      <h2>住所</h2>
      <p>郵便番号: 〒未設定</p>
      <p>住所1:未設定 </p>
      <p>住所2:未設定</p>
      <p>住所3:未設定 </p>
      <h2>電話番号</h2>
      <p>未設定</p>
    </div>
  )
}
const Address = (props: UserData) => {
  return (
    <div>
      <h2>名前</h2>
      <p>姓:{props.address.first_name}</p>
      <p>名:{props.address.last_name}</p>
      <h2>住所</h2>
      <p>郵便番号: 〒{props.address.zip_code}</p>
      <p>住所1: {props.address.address_1}</p>
      <p>住所2: {props.address.address_2}</p>
      <p>住所3: {props.address.address_3}</p>
      <h2>電話番号</h2>
      <p>{props.address.phone_number}</p>
    </div>
  )
}
const LoadingAddress = () => {
  return (
    <div>
      <h2>名前</h2>
      <p>姓:なうろーでぃんぐ</p>
      <p>名:なうろーでぃんぐ</p>
      <h2>住所</h2>
      <p>郵便番号: 〒なうろーでぃんぐ</p>
      <p>住所1:なうろーでぃんぐ </p>
      <p>住所2:なうろーでぃんぐ</p>
      <p>住所3:なうろーでぃんぐ </p>
      <h2>電話番号</h2>
      <p>なうろーでぃんぐ</p>
    </div>
  )
}
const User = () => {
  const router = useRouter()
  const user = useAuthContext()
  const [idToken, setIdToken] = useState<string | undefined>('')
  useEffect(() => {
    ;(async () => {
      const idToken = await user?.getIdToken()
      setIdToken(idToken)
    })()
  }, [user])
  const { data, isLoading, error } = getUser(idToken)
  if (error == 'Error: email is not verified') {
    return (
      <div>
        メール認証が完了していません
        <button onClick={() => router.push('/sendverification')}>
          認証メールを再送信
        </button>
      </div>
    )
  }

  if (isLoading) {
    return <LoadingAddress />
  }
  if (data) {
    if (data.address.address_1 == '') {
      return <AddressNotSet />
    }
    return <Address {...data} />
  }
}

export default User
