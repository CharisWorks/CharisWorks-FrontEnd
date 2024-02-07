import { IRequests } from "./models/request";
import { IUserRequests, BackendUser, Profile, Address } from "./models/user";

class UserRequests implements IUserRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    Get = async (): Promise<BackendUser> => {
        const response: Response = await this.Requests.Get('/api/user')
        const data: BackendUser = await response.json()
        return data
    }
    PostProfile = async (Profile: Profile): Promise<BackendUser> => {
        const response: Response = await this.Requests.Post('/api/profile', Profile)
        const data: BackendUser = await response.json()
        return data
    }
    UpdateProfile = async (Profile: Profile): Promise<BackendUser> => {
        const response: Response = await this.Requests.Patch('/api/profile', Profile)
        const data: BackendUser = await response.json()
        return data
    }
    PostAddress = async (Address: Address): Promise<BackendUser> => {
        const response: Response = await this.Requests.Post('/api/profile', Address)
        const data: BackendUser = await response.json()
        return data
    }
    UpdateAddress = async (Address: Address): Promise<BackendUser> => {
        const response: Response = await this.Requests.Patch('/api/profile', Address)
        const data: BackendUser = await response.json()
        return data
    }
}
export { UserRequests }
