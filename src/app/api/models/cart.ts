type CartRegisterPayload = {
    item_id: string
    quantity: number
}
type CartItems = {
    item_id: string
    quantity: number
    properties: {
        name: string
        price: number
        details: {
            status: string
        }
    }
}
type Cart = {
    items: CartItems[] | null
}

interface ICartRequests {
    Post(CartItem: CartRegisterPayload): Promise<Cart>
    Update(CartItem: CartRegisterPayload): Promise<Cart>
    Delete(itemId: string): Promise<Cart>
}
export type { Cart, CartRegisterPayload, ICartRequests }
