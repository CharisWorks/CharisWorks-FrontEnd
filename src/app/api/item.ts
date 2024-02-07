import { ItemPreview, ItemDetail, IItemRequests } from "./models/item";
import { IRequests } from "./models/request";

class ItemRequests implements IItemRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    Get = async (): Promise<ItemPreview[] | null> => {
        const response: Response = await this.Requests.Get('/api/item')
        const data: ItemPreview[] = await response.json()
        return data
    }
    GetKeyword = async (keywords: string[]): Promise<ItemPreview[] | null> => {
        const response: Response = await this.Requests.Get('/api/item', { "keyword": keywords.join('+') })
        const data: ItemPreview[] = await response.json()
        return data
    }
    GetDetail = async (item_id: string): Promise<ItemDetail> => {
        const response: Response = await this.Requests.Get('/api/item/' + item_id)
        const data: ItemDetail = await response.json()
        return data
    }
}

export { ItemRequests }