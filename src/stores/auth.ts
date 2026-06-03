import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(getCookie('authToken') || null)
    const isAuthorized = computed(() => !!token.value)

    /**
     * Get cookie by name
     */
    function getCookie(name: string): string | null {
        const nameEQ = name + '='
        const cookies = document.cookie.split(';')

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim()
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length)
            }
        }

        return null
    }

    /**
     * Set cookie with expiration (30 days by default)
     */
    function setCookie(name: string, value: string, days: number = 30) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = 'expires=' + date.toUTCString()
        document.cookie = `${name}=${value};${expires};path=/`
    }

    /**
     * Remove cookie
     */
    function removeCookie(name: string) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
    }

    /**
     * Set authorization token
     */
    const setToken = (authToken: string) => {
        token.value = authToken
        setCookie('authToken', authToken, 30)
    }

    /**
     * Clear authorization token
     */
    const clearToken = () => {
        token.value = null
        removeCookie('authToken')
    }

    /**
     * Logout
     */
    const logout = () => {
        clearToken()
    }

    /**
     * Get authorization header for API requests
     */
    const getAuthHeader = (): Record<string, string> => {
        if (!token.value) {
            return {}
        }

        return {
            'Authorization': `Bearer ${token.value}`,
        }
    }

    return {
        token,
        isAuthorized,
        setToken,
        clearToken,
        logout,
        getAuthHeader,
    }
})
