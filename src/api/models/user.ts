import { ItemPreview } from "./item"

type profileUpdatePayload = {
    display_name: string
    description: string
}


interface UserProfile {
    display_name: string;
    description: string;
    stripe_account_id: string;
    created_at: string;
}

interface UserAddress {
    first_name: string;
    first_name_kana: string;
    last_name: string;
    last_name_kana: string;
    zip_code: string;
    address_1: string;
    address_2: string;
    address_3: string;
    phone_number: string;
}

interface UserData {
    user_id: string;
    profile: UserProfile;
    address: UserAddress;
}
type Message = {
    message: string
}
interface IUserRequests {
    PostProfile(Profile: UserProfile): Promise<UserData>
    UpdateProfile(Profile: profileUpdatePayload): Promise<UserData>
    PostAddress(Address: UserAddress): Promise<UserData>
    UpdateAddress(Address: UserAddress): Promise<UserData>
    Delete(): Promise<Message>
}
export type { profileUpdatePayload, UserProfile, UserAddress, UserData, IUserRequests, Message }
