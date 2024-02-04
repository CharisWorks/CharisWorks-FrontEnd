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
export type { Transaction, TransactionDetail, ITransactionRequests, ItemPreview, Profile, Address, BackendUser, IUserRequests, CartItem, Cart, ICartRequests }
