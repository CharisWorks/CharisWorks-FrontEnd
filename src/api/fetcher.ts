"use client"
import useSWR from 'swr'
import { Cart } from './models/cart'
import { UserData } from './models/user';
import { Transaction, TransactionDetail } from './models/transaction';
import { Overview, itemPreviewList } from './models/item';

const authfetcher = async (url: URL, jwt: string) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` }),
    })
    const data = await res.json()
    return data
}

const fetcher = async (url: URL) => {
    const res = await fetch(url, {
        method: 'GET',
    })
    const data = await res.json()
    return data
}
export const getUser = (jwt: string | undefined) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/user'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, ([url, jwt]) => authfetcher(url, jwt))
    console.log('data:', data)
    return {
        data: data as UserData | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getCart = (jwt: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/cart'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as Cart | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransaction = (jwt: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/transaction'
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as Transaction[] | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransactionDetail = (jwt: string, id: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/transaction/' + id
    const { data, error } = useSWR(jwt ? [url, jwt] : null, () => authfetcher)
    return {
        data: data as TransactionDetail | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItem = (page?: number, keywords?: string[]) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/item'
    if (page) {
        url.searchParams.set('page', page.toString())
    }
    if (keywords) {
        url.searchParams.set('keyword', keywords.join('+'))
    }
    const { data, error } = useSWR(url, fetcher)
    console.log('data:', data)
    return {
        data: data as itemPreviewList | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItemDetails = (id: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/api/item/' + id
    const { data, error } = useSWR(url, fetcher)
    return {
        data: data as Overview | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItemSource = (id: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    url.pathname = '/images/' + id
    const { data, error } = useSWR(url, fetcher)
    return {
        data: data as string[] | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}
