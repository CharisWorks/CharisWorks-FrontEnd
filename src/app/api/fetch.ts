import { IRequests, IAuthRequests } from "./models/request";

class FetchRequests implements IRequests {
    private url: URL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://127.0.0.1:8080")
    async Get(path: string, params?: { [key: string]: string }): Promise<Response> {
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
        return response
    }
    async Delete(path: string, params?: { [key: string]: string }): Promise<Response> {
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
        return response
    }

}

class AuthFetchRequests implements IAuthRequests {
    public jwt: string
    constructor(jwt: string) {
        this.jwt = jwt
    }
    private url: URL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://127.0.0.1:8080")
    async Get(path: string, params?: { [key: string]: string }): Promise<Response> {
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
        return response
    }
    async Delete(path: string, params?: { [key: string]: string }): Promise<Response> {
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
        if (response.status !== 200) {
            const data = await response.json()
            throw new Error(data.message)
        }
        return response
    }

}
export { AuthFetchRequests, FetchRequests }
