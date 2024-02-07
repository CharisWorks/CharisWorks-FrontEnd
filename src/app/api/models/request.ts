type query = { [key: string]: string }
interface IRequests {
    Get(path: string, params?: query): Promise<Response>
    Post(path: string, body: any): Promise<Response>
    Patch(path: string, body: any): Promise<Response>
    Delete(path: string, params?: query): Promise<Response>
}
interface IAuthRequests extends IRequests {
    jwt: string
}
export type { IAuthRequests, IRequests, query }
