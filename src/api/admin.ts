import { IAdminUserRequests, IAdminTransactionRequests, IAdminItemRequests } from './models/admin';
import { itemPreviewList } from './models/item';
import { IAuthRequests } from './models/request';
import { Transaction, TransactionDetail } from './models/transaction';
import { internalUser } from './models/user';

export class adminUserRequests implements IAdminUserRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }
    async getAllUser(): Promise<internalUser[] | null> {
        const response: Response = await this.AuthRequests.Get('/api/admin/user/all')
        const data: internalUser[] | null = await response.json()
        return data
    }
    async removeUser(id: string): Promise<{ msg: string }> {
        const response: Response = await this.AuthRequests.Delete('/api/admin/user', { id })
        const data: { msg: string } = await response.json()
        return data
    }
    async privilegeUser(id: string): Promise<{ msg: string; }> {
        const response: Response = await this.AuthRequests.Post('/api/admin/user/privilege', { id })
        const data: { msg: string } = await response.json()
        return data
    }
    async getTransaction(id: string): Promise<Transaction[]> {
        const response: Response = await this.AuthRequests.Get('/api/admin/user/transaction', { id })
        const data: Transaction[] = await response.json()
        return data
    }
}

export class adminTransactionRequests implements IAdminTransactionRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }
    async getTransaction(id: string): Promise<TransactionDetail | null> {
        const response: Response = await this.AuthRequests.Get('/api/admin/transaction', { id })
        const data: TransactionDetail | null = await response.json()
        return data
    }
    async getAllTransaction(): Promise<Transaction[] | null> {
        const response: Response = await this.AuthRequests.Get('/api/admin/transaction/all')
        const data: Transaction[] | null = await response.json()
        return data
    }
    async registerTrackingId(id: string, trackingId: string): Promise<{ msg: string }> {
        const response: Response = await this.AuthRequests.Post('/api/admin/transaction/tracking', { id, trackingId })
        const data: { msg: string } = await response.json()
        return data
    }
    async registerStatus(id: string, status: string): Promise<{ msg: string }> {
        const response: Response = await this.AuthRequests.Post('/api/admin/transaction/status', { id, status })
        const data: { msg: string } = await response.json()
        return data
    }
}

export class adminItemRequests implements IAdminItemRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }
    async removeItem(id: string): Promise<{ msg: string }> {
        const response: Response = await this.AuthRequests.Delete('/api/admin/item', { id })
        const data: { msg: string } = await response.json()
        return data
    }
    async allItem(): Promise<itemPreviewList | null> {
        const response: Response = await this.AuthRequests.Get('/api/admin/item/all')
        const data: itemPreviewList | null = await response.json()
        return data
    }
}