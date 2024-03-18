import { Overview, ItemProperties } from "./item";
type ManufacturerProperties = {
    name: string
    description: string
}
type ProductUpdatePayload = {
    name?: string
    price?: number
    status?: string
    stock?: number
    size?: number
    description?: string
    tags?: string[]
}
interface IManufacturerRequests {
    PostProducts(Item: ItemProperties): Promise<Overview>
    UpdateProducts(item_id: string, ProductUpdatePayload: ProductUpdatePayload): Promise<Overview>
    DeleteProducts(Item_id: string): Promise<{ message: string }>
    CreateAccountRequest(): Promise<{ url: string }>
    GetStripeMypageURL(): Promise<{ url: string }>
}
export type { ManufacturerProperties, IManufacturerRequests, ProductUpdatePayload }