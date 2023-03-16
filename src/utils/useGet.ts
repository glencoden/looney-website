import { writable } from 'svelte/store'
import type { TJson } from '../types/TJson'

export default function (url: string) {
    const data = writable<TJson | null>(null)
    const error = writable<TJson | null>(null)
    const isLoading = writable<boolean>(false)

    async function get() {
        error.set(null)
        isLoading.set(true)

        try {
            const response = await fetch(url)
            data.set(await response.json())
        } catch (err) {
            error.set(typeof err === 'object' ? err : { err })
        }

        isLoading.set(false)
    }

    get()

    return { data, error, isLoading, refetch: get }
}