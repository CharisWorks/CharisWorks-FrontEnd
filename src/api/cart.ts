import { Cart, CartRegisterPayload, ICartRequests } from "./models/cart"
import { IAuthRequests } from "./models/request"


class CartRequests implements ICartRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }

    async Post(CartItem: CartRegisterPayload): Promise<Cart> {
        const response: Response = await this.AuthRequests.Post('/api/cart', CartItem)
        const data: Cart = await response.json()
        return data
    }
    async Update(CartItem: CartRegisterPayload): Promise<Cart> {
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
