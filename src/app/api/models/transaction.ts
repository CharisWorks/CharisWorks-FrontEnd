import { ItemPreview } from "./item"
type Transaction = {
    transaction_id: string
    tracking_id: string
    items: ItemPreview[]
}

type TransactionDetail = {
    transaction_id: string
    tracking_id: string
    address: {
        first_name: string
        first_name_kana: string
        last_name: string
        last_name_kana: string
        zip_code: string
        address: string
        phone_number: string
    }
    items: ItemPreview[]
}

interface ITransactionRequests {
    Get(): Promise<Transaction[]>
    GetDetail(transactionId: string): Promise<TransactionDetail>
}
export type { Transaction, TransactionDetail, ITransactionRequests }
