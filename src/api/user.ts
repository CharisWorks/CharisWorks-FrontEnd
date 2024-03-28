import { IRequests } from "./models/request";
import { IUserRequests, UserData, UserProfile, UserAddress, Message, profileUpdatePayload } from "./models/user";
class UserRequests implements IUserRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }

    async PostProfile(Profile: UserProfile): Promise<UserData> {
        const response: Response = await this.Requests.Post('/api/profile', Profile)
        const data: UserData = await response.json()
        return data
    }
    async UpdateProfile(Profile: profileUpdatePayload): Promise<UserData> {
        const response: Response = await this.Requests.Patch('/api/profile', Profile)
        const data: UserData = await response.json()
        return data
    }
    async PostAddress(Address: UserAddress): Promise<UserData> {
        const response: Response = await this.Requests.Post('/api/address', Address)
        const data: UserData = await response.json()
        return data
    }
    async UpdateAddress(Address: UserAddress): Promise<UserData> {
        const response: Response = await this.Requests.Patch('/api/address', Address)
        const data: UserData = await response.json()
        return data
    }
    async Delete(): Promise<Message> {
        const response: Response = await this.Requests.Delete('/api/user')
        const data: Message = await response.json()
        return data
    }
}
export { UserRequests }
