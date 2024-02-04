import axios, { AxiosResponse } from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

type Transaction = {
    transaction_id: string
    tracking_id: string
    items: Items[]
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
    items: Items[]
}

type Items = {
    item_id: string
    quantity: number
    properties: {
        name: string
        price: number
    }
}
const GetTransaction = async (): Promise<Transaction[]> => {
    const URL = ADDRESS + '/user/transaction'
    const response = await axios.get(URL)
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: Transaction[] = await response.data.json()
    return data
}

const GetTransactionDetails = async (
    transactionId: string,
): Promise<TransactionDetail> => {
    const URL =
        ADDRESS + '/user/transaction/details?transactionId=' + transactionId
    const response = await axios.get(URL)
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: TransactionDetail = await response.data.json()
    return data
}
