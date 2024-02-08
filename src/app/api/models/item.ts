import { ManufacturerProperties } from "./manufacturer"
type ItemPreview = {
    item_id: string
    quantity: number
    properties: {
        name: string
        price: number
    }
}
type ItemProperties = {
    name: string
    price: number
    details: {
        status: string
        stock: number
        size: number
        description: string
        tags: string[]
    }
}

type ItemDetail = {
    item_id: string
    properties: ItemProperties
    manufacturer: ManufacturerProperties
}

interface IItemRequests {
    Get(): Promise<ItemPreview[] | null>
    GetKeyword(keywords: string[]): Promise<ItemPreview[] | null>
    GetDetail(item_id: string): Promise<ItemDetail>
}

export type { ItemDetail, ItemPreview, IItemRequests, ItemProperties }
