import axios, { AxiosResponse } from 'axios'
import { Address, BackendUser, IUserRequests, Profile } from './interfaces'
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS
class UserRequests implements IUserRequests {
  Get = async (): Promise<BackendUser> => {
    const URL = ADDRESS + '/user'
    const response = await axios.get(URL)
    const data: BackendUser = await response.data.json()
    return data
  }
  PostProfile = async (Profile: Profile): Promise<BackendUser> => {
    const URL = ADDRESS + '/user/profile'
    const response = await axios.post(URL, Profile)
    const data: BackendUser = await response.data.json()
    return data
  }
  UpdateProfile = async (Profile: Profile): Promise<BackendUser> => {
    const URL = ADDRESS + '/user/profile'
    const response = await axios.patch(URL, Profile)
    const data: BackendUser = await response.data.json()
    return data
  }
  PostAddress = async (Address: Address): Promise<BackendUser> => {
    const URL = ADDRESS + '/user/profile'
    const response = await axios.post(URL, Address)
    const data: BackendUser = await response.data.json()
    return data
  }
  UpdateAddress = async (Address: Address): Promise<BackendUser> => {
    const URL = ADDRESS + '/user/profile'
    const response = await axios.patch(URL, Address)
    const data: BackendUser = await response.data.json()
    return data
  }
}
export { UserRequests }

