import axios, { AxiosResponse } from 'axios'
import { ItemPreview, ItemDetail, IItemRequests } from "./interfaces";
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

class ItemRequests implements IItemRequests {
    Get = async (): Promise<ItemPreview[] | null> => {
        const url = ADDRESS + '/item'
        const response = await axios.get(url)
        const data: ItemPreview[] = await response.data.json()
        return data
    }
    GetKeyword = async (keyword: string): Promise<ItemPreview[] | null> => {
        const url = ADDRESS + '/item/search?keyword=' + keyword
        const response = await axios.get(url)
        const data: ItemPreview[] = await response.data.json()
        return data
    }
    GetDetail = async (item_id: string): Promise<ItemDetail> => {
        const url = ADDRESS + '/item/' + item_id
        const response = await axios.get(url)
        const data: ItemDetail = await response.data.json()
        return data
    }
}

export { ItemRequests }