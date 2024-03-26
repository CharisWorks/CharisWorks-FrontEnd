import { ItemPreview, Overview, IItemRequests } from "./models/item";
import { IRequests } from "./models/request";

class ItemRequests implements IItemRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async getItem(page?: number, keywords?: string[]): Promise<ItemPreview[] | null> {
        if (page && !keywords) {
            const response: Response = await this.Requests.Get('/api/item', { page: page.toString() })
            const data: ItemPreview[] = await response.json()
            return data
        }
        if (keywords && !page) {
            const response: Response = await this.Requests.Get('/api/item', { keywords: keywords.join('+') })
            const data: ItemPreview[] = await response.json()
            return data
        }
        if (page && keywords) {
            const response: Response = await this.Requests.Get('/api/item', { page: page.toString(), keywords: keywords.join('+') })
            const data: ItemPreview[] = await response.json()
            return data
        }

        const response: Response = await this.Requests.Get('/api/item',)
        const data: ItemPreview[] = await response.json()
        return data
    }

    async getDetail(item_id: string): Promise<Overview> {
        const response: Response = await this.Requests.Get('/api/item/' + item_id)
        const data: Overview = await response.json()
        return data
    }
    async getItemSource(item_id: string): Promise<string[] | null> {
        const response: Response = await this.Requests.Get('/images/' + item_id)
        const data: string[] = await response.json()
        return data
    }
}

export { ItemRequests }