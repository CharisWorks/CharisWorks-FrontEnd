import { ItemProperties, Overview } from "./models/item";
import { IManufacturerRequests, ProductUpdatePayload } from "./models/manufacturer";
import { IRequests } from "./models/request";

class ManufacturerRequests implements IManufacturerRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async PostProducts(Item: ItemProperties): Promise<Overview> {
        const response: Response = await this.Requests.Post('/api/products/', Item)
        const data: Overview = await response.json()
        return data
    }

    async UpdateProducts(item_id: string, ProductUpdatePayload: ProductUpdatePayload): Promise<Overview> {
        const response: Response = await this.Requests.Patch('/api/products/' + item_id, ProductUpdatePayload)
        const data: Overview = await response.json()
        return data
    }
    async DeleteProducts(Item_id: string): Promise<{ message: string; }> {
        const response: Response = await this.Requests.Delete('/api/products/' + Item_id)
        const data: { message: string } = await response.json()
        return data
    }
    async CreateAccountRequest(): Promise<{ url: string; }> {
        const response: Response = await this.Requests.Get('/api/stripe/create')
        const data: { url: string } = await response.json()
        return data
    }
    async GetStripeMypageURL(): Promise<{ url: string; }> {
        const response: Response = await this.Requests.Get('/api/stripe/mypage')
        const data: { url: string } = await response.json()
        return data
    }
}
export { ManufacturerRequests }
