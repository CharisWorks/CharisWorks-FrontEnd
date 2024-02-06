interface IRequest {
    Get(url: URL): Promise<Response>
    Post(url: URL, body: any): Promise<Response>
    Patch(url: URL, body: any): Promise<Response>
    Delete(url: URL): Promise<Response>
}
interface IAuthRequest extends IRequest {
    jwt: string
}