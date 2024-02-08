import { ItemPreview, ItemDetail, IItemRequests } from "./models/item";
import { IRequests } from "./models/request";

class ItemRequests implements IItemRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async Get(): Promise<ItemPreview[] | null> {
        const response: Response = await this.Requests.Get('/api/item')
        const data: ItemPreview[] = await response.json()
        return data
    }
    async GetKeyword(keywords: string[]): Promise<ItemPreview[] | null> {
        const response: Response = await this.Requests.Get('/api/item', { "keyword": keywords.join('+') })
        const data: ItemPreview[] = await response.json()
        return data
    }
    async GetDetail(item_id: string): Promise<ItemDetail> {
        const response: Response = await this.Requests.Get('/api/item/' + item_id)
        const data: ItemDetail = await response.json()
        return data
    }
}

export { ItemRequests }
