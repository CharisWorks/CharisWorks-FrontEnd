// ----------------------------------
//            Item
// ----------------------------------

type ItemPreview = {
    item_id: string
    quantity: number
    properties: {
        name: string
        price: number
    }
}

type ItemDetail = {
    item_id: string
    properties: {
        name: string
        price: number
        details: {
            status: string
            stock: number
            size: number
            description: string
            tags: string[]
        }
    }
    manufacturer: {
        name: string
        description: string
    }
}

interface IItemRequests {
    Get(): Promise<ItemPreview[] | null>
    GetKeyword(keyword: string): Promise<ItemPreview[] | null>
    GetDetail(item_id: string): Promise<ItemDetail>
}

// ----------------------------------
//            Transaction
// ----------------------------------

type Transaction = {
    transaction_id: string
    tracking_id: string
    items: ItemPreview[]
}

type TransactionDetail = {
    transaction_id: string
    tracking_id: string
    address: {
        real_name: string
        zip_code: string
        address: string
        phone_number: string
    }
    items: ItemPreview[]
}

interface ITransactionRequests {
    Get(): Promise<Transaction[]>
    GetDetail(transactionId: string): Promise<TransactionDetail>
}

// ----------------------------------
//            User
// ----------------------------------


type Profile = {
    real_name: string
    description: string
    created_at: string
}

type Address = {
    zip_code: string
    address_1: string
    address_2: string
    address_3: string
    phone_number: string
}

type BackendUser = {
    user_id: string
    profile: Profile
    address: Address | null
    manufacturer: {
        stripe_account_id: string
        items: ItemPreview[]
    } | null
}

interface IUserRequests {
    Get(): Promise<BackendUser>
    PostProfile(Profile: Profile): Promise<BackendUser>
    UpdateProfile(Profile: Profile): Promise<BackendUser>
    PostAddress(Address: Address): Promise<BackendUser>
    UpdateAddress(Address: Address): Promise<BackendUser>
}
// ----------------------------------
//            Cart
// ----------------------------------

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

export type { ItemDetail, IItemRequests, Transaction, TransactionDetail, ITransactionRequests, ItemPreview, Profile, Address, BackendUser, IUserRequests, CartItem, Cart, ICartRequests }
