import { ItemPreview } from "./item"
import { IRequests } from "./request"
type Transaction = {
    transaction_id: string
    tracking_id: string
    items: TransactionItem[]
}
type TransactionItem = {
    item_id: string
    quantity: number
    name: string
    price: number
    transfer_id: string
    status: string
    manufacturer_user_id: string
    manufacturer_name: string
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
    items: {
        item_id: string
        quantity: number
        name: string
        price: number
        transfer_id: string
        status: string
        manufacturer_user_id: string
        manufacturer_name: string
    }[]

    status: string
}
export type { Transaction, TransactionDetail, TransactionItem }
