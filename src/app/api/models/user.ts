import { ItemPreview } from "./item"
type Profile = {
    display_name: string
    description: string
    created_at: string
}
type profileUpdatePayload = {
    display_name: string
    description: string
}
type Address = {
    zip_code?: string
    address_1?: string
    address_2?: string
    address_3?: string
    phone_number?: string
    first_name?: string
    last_name?: string
    first_name_kana?: string
    last_name_kana?: string
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
    UpdateProfile(Profile: profileUpdatePayload): Promise<BackendUser>
    PostAddress(Address: Address): Promise<BackendUser>
    UpdateAddress(Address: Address): Promise<BackendUser>
    Delete(): Promise<Message>
}
export type { profileUpdatePayload, Profile, Address, BackendUser, IUserRequests, Message }
