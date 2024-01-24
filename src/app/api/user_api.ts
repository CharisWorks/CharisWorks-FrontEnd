import axios, { AxiosResponse } from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

class ServerResponseError extends Error {
  constructor(response: AxiosResponse<any, any>) {
    super(`error occured: ${response.data.json().message}`)
  }
}

interface ServerUser {}
interface UserResponse {
  User: ServerUser | null
}

const GetUser = async (): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const PostUser = async (ServerUser: ServerUser): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.post(URL, { ServerUser })
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const UpdateUser = async (ServerUser: ServerUser): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.patch(URL, { ServerUser })
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: UserResponse = await response.data.json()
  return data
}

const DeleteUser = async (): Promise<UserResponse> => {
  const URL = ADDRESS + '/user'
  const response = await axios.delete(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: UserResponse = await response.data.json()
  return data
}

interface CartItem {
  itemId: string
  quantity: number
}
interface Cart {
  Cart: CartItem[] | null
}

const GetCart = async (): Promise<Cart> => {
  const URL = ADDRESS + '/user'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: Cart = await response.data.json()
  return data
}

const PostCart = async (CartItem: CartItem): Promise<Cart> => {
  const URL = ADDRESS + '/user/cart'
  const response = await axios.post(URL, { CartItem })
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: Cart = await response.data.json()
  return data
}

const UpdateCart = async (CartItem: CartItem): Promise<Cart> => {
  const URL = ADDRESS + '/user/cart'
  const response = await axios.patch(URL, { CartItem })
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: Cart = await response.data.json()
  return data
}

const DeleteCart = async (CartItem: CartItem): Promise<Cart> => {
  const URL = ADDRESS + '/user/cart' + '?itemId=' + CartItem.itemId
  const response = await axios.delete(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: Cart = await response.data.json()
  return data
}

interface PaymentURL {
  URL: string | null
}

const Buy = async (): Promise<PaymentURL> => {
  const URL = ADDRESS + '/user/buy'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: PaymentURL = await response.data.json()
  return data
}

interface Transaction {}
interface TransactionList {
  Transaction: Transaction[]
}
interface TransactionDetail {}

const GetTransaction = async (): Promise<TransactionList> => {
  const URL = ADDRESS + '/user/transaction'
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: TransactionList = await response.data.json()
  return data
}

const GetTransactionDetails = async (
  transactionId: string,
): Promise<TransactionDetail> => {
  const URL =
    ADDRESS + '/user/transaction/details?transactionId=' + transactionId
  const response = await axios.get(URL)
  if (response.status != 200) {
    throw new ServerResponseError(response)
  }
  const data: TransactionDetail = await response.data.json()
  return data
}

export {
  GetUser,
  PostUser,
  UpdateUser,
  DeleteUser,
  GetCart,
  PostCart,
  UpdateCart,
  DeleteCart,
  GetTransaction,
  GetTransactionDetails,
  Buy,
}
