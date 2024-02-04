import axios, { AxiosResponse } from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

type CartItem = {
    itemId: string
    quantity: number
}
type Cart = {
    Cart: CartItem[] | null
}

const GetCart = async (): Promise<Cart> => {
    const URL = ADDRESS + '/user'
    const response = await axios.get(URL)
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: Cart = await response.data.json()
    return data
}

const PostCart = async (CartItem: CartItem): Promise<Cart> => {
    const URL = ADDRESS + '/user/cart'
    const response = await axios.post(URL, { CartItem })
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: Cart = await response.data.json()
    return data
}

const UpdateCart = async (CartItem: CartItem): Promise<Cart> => {
    const URL = ADDRESS + '/user/cart'
    const response = await axios.patch(URL, { CartItem })
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: Cart = await response.data.json()
    return data
}

const DeleteCart = async (CartItem: CartItem): Promise<Cart> => {
    const URL = ADDRESS + '/user/cart' + '?itemId=' + CartItem.itemId
    const response = await axios.delete(URL)
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: Cart = await response.data.json()
    return data
}
