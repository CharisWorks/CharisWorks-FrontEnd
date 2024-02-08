import { ItemDetail, ItemProperties } from "./item";
type ManufacturerProperties = {
    name: string
    description: string
}
type ProductUpdatePayload = {
    item_id: string
    properties: {
        name: string | null
        price: number | null
        details: {
            status: string | null
            stock: number
            size: number | null
            description: string | null
            tags: string[] | null
        }
    }
}
interface IManufacturerRequests {
    PostProducts(Item: ItemProperties): Promise<ItemDetail>
    UpdateProducts(ProductUpdatePayload: ProductUpdatePayload): Promise<ItemDetail>
    DeleteProducts(Item_id: string): Promise<{ message: string }>
    CreateAccountRequest(): Promise<{ url: string }>
    GetStripeMypageURL(): Promise<{ url: string }>
}
export type { ManufacturerProperties, IManufacturerRequests, ProductUpdatePayload }