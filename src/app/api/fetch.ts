import { IRequests, IAuthRequests, query } from "./models/request";

class Requests implements IRequests {
    private url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "localhost")
    Get = async (path: string, params?: query): Promise<Response> => {
        const url = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response
    }
    Post = async (path: string, body: any): Promise<Response> => {
        const url = this.url
        url.pathname = path
        const response = await fetch(url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(body)
        })
        return response
    }
    Patch = async (path: string, body: any): Promise<Response> => {
        const url = this.url
        url.pathname = path
        const response = await fetch(url.toString(), {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(body)
        })
        return response
    }
    Delete = async (path: string, params?: query): Promise<Response> => {
        const url = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }
        const response = await fetch(url.toString(), {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response
    }

}

class AuthRequests implements IAuthRequests {
    public jwt: string
    constructor(jwt: string) {
        this.jwt = jwt
    }
    private url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "localhost")
    Get = async (path: string, params?: query): Promise<Response> => {
        const url = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }
        });
        return response
    }
    Post = async (path: string, body: any): Promise<Response> => {
        const url = this.url
        url.pathname = path
        const response = await fetch(url.toString(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt

            }, body: JSON.stringify(body)
        })
        return response
    }
    Patch = async (path: string, body: any): Promise<Response> => {
        const url = this.url
        url.pathname = path
        const response = await fetch(url.toString(), {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }, body: JSON.stringify(body)
        })
        return response
    }
    Delete = async (path: string, params?: query): Promise<Response> => {
        const url = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }
        const response = await fetch(url.toString(), {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authentication: this.jwt
            }
        });
        return response
    }

}
export { AuthRequests, Requests }
