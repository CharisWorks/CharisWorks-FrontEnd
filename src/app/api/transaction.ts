import { IRequests } from "./models/request";
import { ITransactionRequests, Transaction, TransactionDetail } from "./models/transaction";

class TransactionRequests implements ITransactionRequests {
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
    Buy = async (): Promise<{ url: string }> => {
        const response: Response = await this.Requests.Get('/api/buy')
        const data: { url: string } = await response.json()
        return data
    }

}
export { TransactionRequests }
