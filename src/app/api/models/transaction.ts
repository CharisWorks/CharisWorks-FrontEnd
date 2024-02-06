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
        real_name: string
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