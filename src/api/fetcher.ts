"use client"
import useSWR from 'swr'
import { Cart } from './models/cart'
import { UserData } from './models/user';
import { Transaction, TransactionDetail } from './models/transaction';
import { Overview, itemPreviewList } from './models/item';

const authfetcher = async (url: string, jwt: string) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` }),
    })
    const data = await res.json()
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

const fetcher = async (url: string) => {
    const res = await fetch(url, {
        method: 'GET',
    })
    const data = await res.json()
    return data
}
export const getUser = (jwt: string | undefined) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/user'
    const url = rawURL.toString()
    const { data, error } = useSWR(jwt ? [url, jwt] : null, ([url, jwt]) => authfetcher(url, jwt))
    return {
        data: data as UserData | undefined,
        isLoading: !data && !error,
        error: error,
    }
}

export const getCart = (jwt: string | undefined) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/cart'
    const url = rawURL.toString()
    const { data, error } = useSWR(jwt ? [url, jwt] : null, ([url, jwt]) => authfetcher(url, jwt))
    return {
        data: data as Cart | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransaction = (jwt: string | undefined) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/transaction'
    const url = rawURL.toString()
    const { data, error } = useSWR(jwt ? [url, jwt] : null, ([url, jwt]) => authfetcher(url, jwt))
    return {
        data: data as Transaction[] | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getTransactionDetail = (jwt: string | undefined, id: string) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/transaction/' + id
    const url = rawURL.toString()
    const { data, error } = useSWR(jwt ? [url, jwt] : null, ([url, jwt]) => authfetcher(url, jwt))
    return {
        data: data as TransactionDetail | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItem = (page?: number, keywords?: string[]) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/item'
    if (page) {
        rawURL.searchParams.set('page', page.toString())
    }
    if (keywords) {
        rawURL.searchParams.set('keyword', keywords.join('+'))
    }
    const url = rawURL.toString()
    const { data, error } = useSWR(url, fetcher)
    console.log('data:', data)
    return {
        data: data as itemPreviewList | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItemDetails = (id: string) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/api/item/' + id
    const url = rawURL.toString()
    const { data, error } = useSWR(url, fetcher)
    return {
        data: data as Overview | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}

export const getItemSource = (id: string) => {
    const rawURL = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ?? "http://localhost:8080")
    rawURL.pathname = '/images/' + id
    const url = rawURL.toString()
    const { data, error } = useSWR(url, fetcher)
    return {
        data: data as string[] | undefined,
        isLoading: !data && !error,
        isError: error,
    }
}
