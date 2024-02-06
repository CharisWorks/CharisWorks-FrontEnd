import axios, { AxiosResponse } from 'axios'
import { ICartRequests, Cart, CartItem } from './interfaces'
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS


class CartRequests implements ICartRequests {
    Get = async (jwt: string): Promise<Cart> => {
        const url = new URL(ADDRESS ? ADDRESS : "localhost")
        url.pathname = '/api/cart'
        const response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: jwt
            }
        });
        const data: Cart = await response.json()
        return data
    }
    Post = async (jwt: string, CartItem: CartItem): Promise<Cart> => {
        const url = new URL('/api/cart', ADDRESS)
        const response = await fetch(url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: jwt
            }, body: JSON.stringify(CartItem)
        });
        const data: Cart = await response.json()
        return data
    }
    Update = async (jwt: string, CartItem: CartItem): Promise<Cart> => {
        const url = new URL('/api/cart', ADDRESS)
        const response = await axios.patch(url.toString(), { CartItem })
        const data: Cart = await response.data.json()
        return data
    }
    Delete = async (jwt: string, itemId: string): Promise<Cart> => {
        const url = new URL('/api/cart', ADDRESS)
        const URL = ADDRESS + '/user/cart' + '?itemId=' + itemId
        const response = await axios.delete(URL)
        const data: Cart = await response.data.json()
        return data
    }
}

export { CartRequests }