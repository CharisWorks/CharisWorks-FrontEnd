import { UserData } from "./user";
import { Transaction, TransactionDetail } from "./transaction";
import { itemPreviewList } from "./item";

interface IAdminUserRequests {
    getAllUser(): Promise<UserData[] | null>
    removeUser(id: string): Promise<{ msg: string }>
    privilegeUser(id: string): Promise<{ msg: string }>
    getTransaction(Id: string): Promise<Transaction[]>
}

interface IAdminTransactionRequests {
    getTransaction(id: string): Promise<TransactionDetail | null>
    getAllTransaction(): Promise<Transaction[] | null>
    registerTrackingId(id: string, trackingId: string): Promise<{ msg: string }>
    registerStatus(id: string, status: string): Promise<{ msg: string }>
}

interface IAdminItemRequests {
    removeItem(id: string): Promise<{ msg: string }>
    allItem(): Promise<itemPreviewList | null>
}

export type { IAdminUserRequests, IAdminTransactionRequests, IAdminItemRequests }
