import { Cart, CartItem, ICartRequests } from "./models/cart"
import { IAuthRequests } from "./models/request"


class CartRequests implements ICartRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequest: IAuthRequests) {
        this.AuthRequests = AuthRequest
    }

    Get = async (): Promise<Cart> => {
        const response: Response = await this.AuthRequests.Get('/api/cart')
        const data: Cart = await response.json()
        return data
    }
    Post = async (CartItem: CartItem): Promise<Cart> => {
        const response: Response = await this.AuthRequests.Post('/api/cart', CartItem)
        const data: Cart = await response.json()
        return data
    }
    Update = async (CartItem: CartItem): Promise<Cart> => {
        const response: Response = await this.AuthRequests.Patch('/api/cart', CartItem)
        const data: Cart = await response.json()
        return data
    }
    Delete = async (itemId: string): Promise<Cart> => {
        const response: Response = await this.AuthRequests.Delete('/api/cart', { "itemId": itemId })
        const data: Cart = await response.json()
        return data
    }
}

export { CartRequests }
