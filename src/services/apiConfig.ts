/**
 * API Configuration and helpers
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

/**
 * Build full API URL from endpoint
 */
export function buildApiUrl(endpoint: string): string {
    return `${API_BASE_URL}${endpoint}`
}

/**
 * Fetch wrapper with auth token support
 */
export async function apiCall(
    endpoint: string,
    options: RequestInit & { token?: string } = {}
): Promise<Response> {
    const { token, ...fetchOptions } = options

    const url = buildApiUrl(endpoint)
    const headers = new Headers(fetchOptions.headers || {})

    if (token) {
        headers.set('Authorization', `Bearer ${token}`)
    }

    const response = await fetch(url, {
        ...fetchOptions,
        headers,
    })

    return response
}
