import axios, { AxiosResponse } from 'axios'
import { ICartRequests, Cart, CartItem } from './interfaces'


class CartRequests implements ICartRequests {
    private url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "localhost")
    private jwt
    constructor(jwt: string) {
        this.jwt = jwt
    }
    Get = async (): Promise<Cart> => {
        this.url.pathname = '/api/cart'
        const response = await fetch(this.url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }
        });
        const data: Cart = await response.json()
        return data
    }
    Post = async (CartItem: CartItem): Promise<Cart> => {
        this.url.pathname = '/api/cart'
        const response = await fetch(this.url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }, body: JSON.stringify(CartItem)
        });
        const data: Cart = await response.json()
        return data
    }
    Update = async (CartItem: CartItem): Promise<Cart> => {
        this.url.pathname = '/api/cart'
        const response = await fetch(this.url.toString(), {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }, body: JSON.stringify(CartItem)
        });
        const data: Cart = await response.json()
        return data
    }
    Delete = async (itemId: string): Promise<Cart> => {
        this.url.pathname = '/api/cart'
        this.url.searchParams.set("itemId", itemId)
        const response = await fetch(this.url.toString(), {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }
        });
        const data: Cart = await response.json()
        return data
    }
}

export { CartRequests }