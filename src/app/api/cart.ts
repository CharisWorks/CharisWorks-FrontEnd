import { Cart, CartItem, ICartRequests } from "./models/cart"
import { IAuthRequests } from "./models/request"


class CartRequests implements ICartRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }

    async Get(): Promise<Cart> {
        const response: Response = await this.AuthRequests.Get('/api/cart')
        const data: Cart = await response.json()
        return data
    }
    async Post(CartItem: CartItem): Promise<Cart> {
        const response: Response = await this.AuthRequests.Post('/api/cart', CartItem)
        const data: Cart = await response.json()
        return data
    }
    async Update(CartItem: CartItem): Promise<Cart> {
        const response: Response = await this.AuthRequests.Patch('/api/cart', CartItem)
        const data: Cart = await response.json()
        return data
    }
    async Delete(itemId: string): Promise<Cart> {
        const response: Response = await this.AuthRequests.Delete('/api/cart', { "itemId": itemId })
        const data: Cart = await response.json()
        return data
    }
}

export { CartRequests }
