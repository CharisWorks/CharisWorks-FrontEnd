import useSWR, { Fetcher } from 'swr'
import { Cart, CartRegisterPayload } from './cart'
import { internalUser } from './user';
import { UserType } from '@/app/contexts/AuthContext';
import { Transaction, TransactionDetail } from './transaction';
type methodOfFetchWithBody = 'POST' | 'PUT' | 'PATCH'
type bodyOfFetch = { url: string, method: methodOfFetchWithBody, body: object }



const authfetcher = (url: URL, jwt: string) =>
    fetch(url.toString(), {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` }),
    }).then((res) => res.json());

export const getUser = async (user: UserType) => {
    const jwt: string | undefined = await user?.getIdToken()
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/user'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as internalUser | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getCart = async (user: UserType) => {
    const jwt: string | undefined = await user?.getIdToken()
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/cart'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as Cart | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransaction = async (user: UserType) => {
    const jwt: string | undefined = await user?.getIdToken()
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/transaction'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as Transaction[] | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransactionDetail = async (user: UserType, transactionId: string) => {
    const jwt: string | undefined = await user?.getIdToken()
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/transaction' + transactionId
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as TransactionDetail | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}