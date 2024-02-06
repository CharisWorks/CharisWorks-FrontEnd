import { ItemPreview, ItemDetail, IItemRequests } from "./models/item";
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

class ItemRequests implements IItemRequests {
    private url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://localhost")
    Get = async (): Promise<ItemPreview[] | null> => {
        this.url.pathname = '/api/cart'
        const response = await fetch(this.url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: ItemPreview[] = await response.json()
        return data
    }
    GetKeyword = async (keyword: string): Promise<ItemPreview[] | null> => {
        this.url.pathname = '/item/search'
        this.url.searchParams.set("itemId", keyword)
        const response = await fetch(this.url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: ItemPreview[] = await response.json()
        return data
    }
    GetDetail = async (item_id: string): Promise<ItemDetail> => {
        this.url.pathname = '/item/' + item_id
        const response = await fetch(this.url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: ItemDetail = await response.json()
        return data
    }
}

export { ItemRequests }