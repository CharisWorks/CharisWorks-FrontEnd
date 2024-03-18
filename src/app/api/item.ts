import { ItemPreview, IItemRequests, itemPreviewList, Overview } from "./models/item";
import { IRequests } from "./models/request";

class ItemRequests implements IItemRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async Get(): Promise<itemPreviewList | null> {
        const response: Response = await this.Requests.Get('/api/item')
        const data: itemPreviewList = await response.json()
        return data
    }
    async GetKeyword(page: number, keywords: string[]): Promise<itemPreviewList | null> {
        const response: Response = await this.Requests.Get('/api/item', { "keyword": keywords.join('+'), "page": page.toString() })
        const data: itemPreviewList = await response.json()
        return data
    }
    async GetDetail(item_id: string): Promise<Overview> {
        const response: Response = await this.Requests.Get('/api/item/' + item_id)
        const data: Overview = await response.json()
        return data
    }
}

export { ItemRequests }
