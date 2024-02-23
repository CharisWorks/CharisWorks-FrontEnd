import { IRequests } from "./models/request";
import { IUserRequests, BackendUser, Profile, Address, Error } from "./models/user";
import { useRouter } from "next/router";
class UserRequests implements IUserRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async Get(): Promise<BackendUser> {
        const response: Response = await this.Requests.Get('/api/user')
        const data: BackendUser = await response.json()
        return data
    }
    async PostProfile(Profile: Profile): Promise<BackendUser> {
        const response: Response = await this.Requests.Post('/api/profile', Profile)
        const data: BackendUser = await response.json()
        return data
    }
    async UpdateProfile(Profile: Profile): Promise<BackendUser> {
        const response: Response = await this.Requests.Patch('/api/profile', Profile)
        const data: BackendUser = await response.json()
        return data
    }
    async PostAddress(Address: Address): Promise<BackendUser> {
        const response: Response = await this.Requests.Post('/api/profile', Address)
        const data: BackendUser = await response.json()
        return data
    }
    async UpdateAddress(Address: Address): Promise<BackendUser> {
        const response: Response = await this.Requests.Patch('/api/profile', Address)
        const data: BackendUser = await response.json()
        return data
    }
}
export { UserRequests }
