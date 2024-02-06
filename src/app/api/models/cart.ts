type CartItem = {
    itemId: string
    quantity: number
}

type Cart = {
    items: CartItem[] | null
}

interface ICartRequests {
    Get(): Promise<Cart>
    Post(CartItem: CartItem): Promise<Cart>
    Update(CartItem: CartItem): Promise<Cart>
    Delete(itemId: string): Promise<Cart>
}
export type { Cart, CartItem, ICartRequests }