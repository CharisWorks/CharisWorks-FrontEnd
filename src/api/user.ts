import { IRequests } from "./models/request";
import { IUserRequests, internalUser, Profile, Address, Message, profileUpdatePayload } from "./models/user";
class UserRequests implements IUserRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }

    async PostProfile(Profile: Profile): Promise<internalUser> {
        const response: Response = await this.Requests.Post('/api/profile', Profile)
        const data: internalUser = await response.json()
        return data
    }
    async UpdateProfile(Profile: profileUpdatePayload): Promise<internalUser> {
        const response: Response = await this.Requests.Patch('/api/profile', Profile)
        const data: internalUser = await response.json()
        return data
    }
    async PostAddress(Address: Address): Promise<internalUser> {
        const response: Response = await this.Requests.Post('/api/address', Address)
        const data: internalUser = await response.json()
        return data
    }
    async UpdateAddress(Address: Address): Promise<internalUser> {
        const response: Response = await this.Requests.Patch('/api/address', Address)
        const data: internalUser = await response.json()
        return data
    }
    async Delete(): Promise<Message> {
        const response: Response = await this.Requests.Delete('/api/user')
        const data: Message = await response.json()
        return data
    }
}
export { UserRequests }
