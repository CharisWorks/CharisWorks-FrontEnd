import { ItemPreview } from "./item"
type Profile = {
    first_name: string
    first_name_kana: string
    last_name: string
    last_name_kana: string
    description: string
    created_at: string
}

type Address = {
    zip_code: string
    address_1: string
    address_2: string
    address_3: string
    phone_number: string
    first_name: string
    last_name: string
    first_name_kana: string
    last_name_kana: string
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
type Message = {
    message: string
}
interface IUserRequests {
    Get(): Promise<BackendUser>
    PostProfile(Profile: Profile): Promise<BackendUser>
    UpdateProfile(Profile: Profile): Promise<BackendUser>
    PostAddress(Address: Address): Promise<BackendUser>
    UpdateAddress(Address: Address): Promise<BackendUser>
    Delete(): Promise<Message>
}
export type { Profile, Address, BackendUser, IUserRequests, Message }
