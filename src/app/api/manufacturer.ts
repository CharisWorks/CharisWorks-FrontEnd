import { ItemProperties, ItemDetail } from "./models/item";
import { IManufacturerRequests, ProductUpdatePayload } from "./models/manufacturer";
import { IRequests } from "./models/request";

class ManufacturerRequests implements IManufacturerRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    async PostProducts(Item: ItemProperties): Promise<ItemDetail> {
        const response: Response = await this.Requests.Post('/api/products/', Item)
        const data: ItemDetail = await response.json()
        return data
    }

    async UpdateProducts(ProductUpdatePayload: ProductUpdatePayload): Promise<ItemDetail> {
        const response: Response = await this.Requests.Post('/api/products/', ProductUpdatePayload)
        const data: ItemDetail = await response.json()
        return data
    }
    async DeleteProducts(Item_id: string): Promise<{ message: string; }> {
        const response: Response = await this.Requests.Delete('/api/products' + Item_id)
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
