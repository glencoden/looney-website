import { writable } from 'svelte/store'
import type { TJson } from '../types/TJson'

export default function (url: string) {
    const error = writable<TJson | null>(null)
    const isLoading = writable<boolean>(false)

    async function post(payload: TJson) {
        error.set(null)
        isLoading.set(true)

        try {
            const body = JSON.stringify(payload)
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body,
            })
            const result = await response.json()
            console.log('POST result', result)
        } catch (err) {
            error.set(typeof err === 'object' ? err : { err })
        }

        isLoading.set(false)
    }

    return { error, isLoading, post }
}