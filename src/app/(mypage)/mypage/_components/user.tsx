'use client'
import { getUser } from '@/api/fetcher'
type props = {
  idToken: string | undefined
}
const User = (props: props) => {
  console.log(props)
  const { data, isLoading, isError } = getUser(props.idToken)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }
  if (data) {
    return <div>{data.profile.display_name}</div>
  }
}

export default User
