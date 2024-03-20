import { ItemPreview } from "./item"
import { IRequests } from "./request"
type Transaction = {
    transaction_id: string
    tracking_id: string
    items: ItemPreview[]
}

type TransactionDetail = {
    transaction_id: string
    tracking_id: string
    address: {
        real_name: string
        zip_code: string
        address: string
        phone_number: string
    }
    items: ItemPreview[]
    status: string
}

export type { Transaction, TransactionDetail }
