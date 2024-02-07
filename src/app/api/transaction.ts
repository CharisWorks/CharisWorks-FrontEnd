import { IRequests } from "./models/request";
import { ITransactionRequests, Transaction, TransactionDetail } from "./models/transaction";

class TransactionRequest implements ITransactionRequests {
    Requests: IRequests
    constructor(Requests: IRequests) {
        this.Requests = Requests
    }
    Get = async (): Promise<Transaction[]> => {
        const response: Response = await this.Requests.Get('/api/transaction')
        const data: Transaction[] = await response.json()
        return data
    }
    GetDetail = async (transaction_Id: string): Promise<TransactionDetail> => {
        const response: Response = await this.Requests.Get('/api/transaction/' + transaction_Id)
        const data: TransactionDetail = await response.json()
        return data
    }

}
export { TransactionRequest }
