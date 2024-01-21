import axios from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS
interface UserForServer {}

interface UserResponseFromServer {
  User: UserForServer | null
  message: string
}

const GetUser = async (): Promise<UserResponseFromServer> => {
  const URL = ADDRESS + '/user'
  const response = await axios.get(URL)
  const data: UserResponseFromServer = await response.data.json()
  return data
}

const PostUser = async (
  UserForServer: UserForServer,
): Promise<UserResponseFromServer> => {
  const URL = ADDRESS + '/user'
  const response = await axios.post(URL, { UserForServer })
  const data: UserResponseFromServer = await response.data.json()
  return data
}

const UpdateUser = async (
  UserForServer: UserForServer,
): Promise<UserResponseFromServer> => {
  const URL = ADDRESS + '/user'
  const response = await axios.patch(URL, { UserForServer })
  const data: UserResponseFromServer = await response.data.json()
  return data
}

const DeleteUser = async (): Promise<UserResponseFromServer> => {
  const URL = ADDRESS + '/user'
  const response = await axios.delete(URL)
  const data: UserResponseFromServer = await response.data.json()
  return data
}
