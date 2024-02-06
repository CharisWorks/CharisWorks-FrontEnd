import axios, { AxiosResponse } from 'axios'
import { Transaction, TransactionDetail, ITransactionRequests } from './models/transaction'
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

class TransactionRequests implements ITransactionRequests {
    Get = async (): Promise<Transaction[]> => {
        const URL = ADDRESS + '/user/transaction'
        const response = await axios.get(URL)
        const data: Transaction[] = await response.data.json()
        return data
    }

    GetDetail = async (
        transactionId: string,
    ): Promise<TransactionDetail> => {
        const URL =
            ADDRESS + '/user/transaction/details?transactionId=' + transactionId
        const response = await axios.get(URL)
        const data: TransactionDetail = await response.data.json()
        return data
    }

}
export { TransactionRequests }
