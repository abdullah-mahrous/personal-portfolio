import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthorized: localStorage.getItem('isAuthorized') === 'true',
    }),
    actions: {
        setAuthorized(value: boolean) {
            this.isAuthorized = value
            localStorage.setItem('isAuthorized', value.toString())
        },
        logout() {
            this.isAuthorized = false
            localStorage.removeItem('isAuthorized')
        },
    },
})
