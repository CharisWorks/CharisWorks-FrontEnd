import { IRequests, IAuthRequests, query } from "./models/request";

class FetchRequests implements IRequests {
    private url: URL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://localhost:8080")
    async Get(path: string, params?: query): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }

        const response: Response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response
    }
    async Post(path: string, body: any): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        const response: Response = await fetch(url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(body)
        })
        return response
    }
    async Patch(path: string, body: any): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        const response: Response = await fetch(url.toString(), {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(body)
        })
        return response
    }
    async Delete(path: string, params?: query): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }
        const response: Response = await fetch(url.toString(), {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response
    }

}

class AuthFetchRequests implements IAuthRequests {
    public jwt: string
    constructor(jwt: string) {
        this.jwt = jwt
    }
    private url: URL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://localhost:8080")
    async Get(path: string, params?: query): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }

        const response: Response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.jwt
            }
        });
        return response
    }
    async Post(path: string, body: any): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        const response: Response = await fetch(url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.jwt

            }, body: JSON.stringify(body)
        })
        return response
    }
    async Patch(path: string, body: any): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        const response: Response = await fetch(url.toString(), {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.jwt
            }, body: JSON.stringify(body)
        })
        return response
    }
    async Delete(path: string, params?: query): Promise<Response> {
        const url: URL = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }
        const response: Response = await fetch(url.toString(), {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.jwt
            }
        });
        return response
    }

}
export { AuthFetchRequests, FetchRequests }
