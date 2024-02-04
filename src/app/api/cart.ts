import axios, { AxiosResponse } from 'axios'
import { ICartRequests, Cart, CartItem } from './interfaces'
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS


class CartRequests implements ICartRequests {
    Get = async (): Promise<Cart> => {
        const URL = ADDRESS + '/user'
        const response = await axios.get(URL)
        const data: Cart = await response.data.json()
        return data
    }
    Post = async (CartItem: CartItem): Promise<Cart> => {
        const URL = ADDRESS + '/user/cart'
        const response = await axios.post(URL, { CartItem })
        const data: Cart = await response.data.json()
        return data
    }
    Update = async (CartItem: CartItem): Promise<Cart> => {
        const URL = ADDRESS + '/user/cart'
        const response = await axios.patch(URL, { CartItem })
        const data: Cart = await response.data.json()
        return data
    }
    Delete = async (itemId: string): Promise<Cart> => {
        const URL = ADDRESS + '/user/cart' + '?itemId=' + itemId
        const response = await axios.delete(URL)
        const data: Cart = await response.data.json()
        return data
    }
}

export { CartRequests }