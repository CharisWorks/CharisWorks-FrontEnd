
interface IRequests {
    Get(path: string, params?: { [key: string]: string }): Promise<Response>
    Post(path: string, body: any): Promise<Response>
    Patch(path: string, body: any): Promise<Response>
    Delete(path: string, params?: { [key: string]: string }): Promise<Response>
}
interface IAuthRequests extends IRequests {
    jwt: string
}
export type { IAuthRequests, IRequests }
