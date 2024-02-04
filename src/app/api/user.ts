import axios, { AxiosResponse } from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS
type Profile = {
  real_name: string
  description: string
  created_at: string
}
type Address = {
  zip_code: string
  address_1: string
  address_2: string
  address_3: string
  phone_number: string
}

type ServerUser = {
  profile: Profile
  address: Address | null

}
type UserResponse = {
  User: ServerUser | null
}

const GetUser = async (): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new Error(response.data.json().message)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const PostUser = async (ServerUser: ServerUser): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.post(URL, { ServerUser })
  if (response.status != 200) {
    throw new Error(response.data.json().message)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const UpdateUser = async (ServerUser: ServerUser): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.patch(URL, { ServerUser })
  if (response.status != 200) {
    throw new Error(response.data.json().message)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const DeleteUser = async (): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.delete(URL)
  if (response.status != 200) {
    throw new Error(response.data.json().message)
  }
  const data: UserResponse = await response.data.json()
  return data
}

type PaymentURL = {
  URL: string | null
}

const Buy = async (): Promise<PaymentURL> => {
  const URL = ADDRESS + '/user/buy'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new Error(response.data.json().message)
  }
  const data: PaymentURL = await response.data.json()
  return data
}


export {
  GetUser,
  PostUser,
  UpdateUser,
  DeleteUser,
  Buy,
}
