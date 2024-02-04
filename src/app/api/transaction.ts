import axios, { AxiosResponse } from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

type Transaction = {}
type TransactionList = {
    Transaction: Transaction[]
}
type TransactionDetail = {}

const GetTransaction = async (): Promise<TransactionList> => {
    const URL = ADDRESS + '/user/transaction'
    const response = await axios.get(URL)
    if (response.status != 200) {
        throw new Error(response.data.json().message)
    }
    const data: TransactionList = await response.data.json()
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
