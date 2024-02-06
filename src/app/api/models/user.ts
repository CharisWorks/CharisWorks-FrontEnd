import { ItemPreview } from "./item"
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
export type { Profile, Address, BackendUser, IUserRequests }