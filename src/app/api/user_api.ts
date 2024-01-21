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

interface CartItem {
  itemId: string
  quantity: number
}
interface Cart {
  Cart: CartItem[]
}
interface CartResponseFromServer {
  Cart: Cart | null
  message: string
}

const GetCart = async (): Promise<CartResponseFromServer> => {
  const URL = ADDRESS + '/user'
  const response = await axios.get(URL)
  const data: CartResponseFromServer = await response.data.json()
  return data
}

const PostCart = async (
  CartItem: CartItem,
): Promise<CartResponseFromServer> => {
  const URL = ADDRESS + '/user/cart'
  const response = await axios.post(URL, { CartItem })
  const data: CartResponseFromServer = await response.data.json()
  return data
}

const UpdateCart = async (
  CartItem: CartItem,
): Promise<CartResponseFromServer> => {
  const URL = ADDRESS + '/user/cart'
  const response = await axios.patch(URL, { CartItem })
  const data: CartResponseFromServer = await response.data.json()
  return data
}

const DeleteCart = async (
  CartItem: CartItem,
): Promise<CartResponseFromServer> => {
  const URL = ADDRESS + '/user/cart' + '?itemId=' + CartItem.itemId
  const response = await axios.delete(URL)
  const data: CartResponseFromServer = await response.data.json()
  return data
}

interface PaymentIntent {
  URL: string | null
  message: string
}

const Buy = async () => {
  const URL = ADDRESS + '/user/buy'
  const response = await axios.get(URL)
  const data: PaymentIntent = await response.data.json()
  return data
}

interface Transaction {}
interface TransactionDetails {}
interface TransactionResponse {
  TransactionList: Transaction[]
  message: string
}
interface TransactionResponse {
  TransactionDetails: TransactionDetails
  message: string
}
const GetTransaction = async () => {
  const URL = ADDRESS + '/user/transaction'
  const response = await axios.get(URL)
  const data: TransactionResponse = await response.data.json()
  return data
}

const GetTransactionDetails = async (transactionId: string) => {
  const URL =
    ADDRESS + '/user/transaction/details?transactionId=' + transactionId
  const response = await axios.get(URL)
  const data: TransactionDetails = await response.data.json()
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
