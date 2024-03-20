import { getUser } from '@/api/fetcher'
type props = {
  idToken: string | undefined
}
const UserData = async (idToken: props) => {
  console.log(idToken)
  const { data, isLoading, isError } = getUser(idToken.idToken)
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

export default UserData
