<template>
    <main class="my-6 sm:my-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <section class="mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl items-center justify-center py-8">
            <div
                class="base-card base-border relative w-full max-w-md overflow-hidden rounded-xl bg-[linear-gradient(135deg,#10111800_0%,#0D0E14_100%)] p-5 sm:p-7">
                <div
                    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(131,21,231,0.20),transparent_35%)]">
                </div>

                <div class="relative z-10">
                    <div class="mb-6 flex items-center gap-4 justify-center">
                        <span
                            class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2742] bg-[linear-gradient(145deg,#171427,#0E0D17)] shadow-[inset_0_0_18px_rgba(131,21,231,0.20),0_0_18px_rgba(131,21,231,0.10)]">
                            <lock-keyhole class="text-primary" :size="24" />
                        </span>
                        <div class="min-w-0">
                            <p class="text-sm font-medium text-primary">Private access</p>
                            <h1 class="text-2xl font-bold leading-tight sm:text-3xl">Admin Login</h1>
                        </div>
                    </div>

                    <form class="flex flex-col gap-4" novalidate @submit.prevent="handleSubmit">
                        <label class="flex flex-col gap-2 text-sm font-medium text-offWhite">
                            Email
                            <div class="relative">
                                <input v-model="email" type="email" inputmode="email" autocomplete="email"
                                    placeholder="abdullah@example.com"
                                    class="base-input base-border w-full min-w-0 pl-11" required/>
                            </div>
                        </label>

                        <label class="flex flex-col gap-2 text-sm font-medium text-offWhite">
                            Password
                            <div class="relative">
                                <input v-model="password" type="password" autocomplete="current-password"
                                    placeholder="Enter password" class="base-input base-border w-full min-w-0 pl-11" required />
                            </div>
                        </label>

                        <p v-if="message" class="rounded-lg border px-4 py-3 text-sm" :class="messageClasses"
                            role="status" aria-live="polite">
                            {{ message }}
                        </p>

                        <button type="submit" :disabled="isSubmitting"
                            class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-3.5 text-[14px] font-medium transition-colors duration-300 hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-65">
                            {{ submitLabel }}
                            <log-in class="ml-3" :size="20" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { KeyRound, LockKeyhole, LogIn, Mail } from '@lucide/vue'
import { useAuthStore } from '../stores/auth'

type AuthResponse = {
    authorized: true
}

const PK = 'blastek'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const wrongAttemptCount = ref(0)
const isGateUnlocked = ref(false)
const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('error')

const submitLabel = computed(() => {
    if (isSubmitting.value) {
        return 'Verifying...'
    }

    return isGateUnlocked.value ? 'Login' : 'Verify Access'
})

const messageClasses = computed(() => {
    if (messageType.value === 'success') {
        return 'border-primary/40 bg-primary/10 text-white'
    }

    return 'border-[#3A2330] bg-[#211219] text-[#FFB7C5]'
})

const redirectTarget = computed(() => {
    return typeof route.query.redirect === 'string' ? route.query.redirect : '/admin-pannel'
})

const isAuthorizedResponse = (value: unknown): value is AuthResponse => {
    return typeof value === 'object' && value !== null && 'authorized' in value
        && (value as { authorized?: unknown }).authorized === true
}

const showGateWarning = () => {
    wrongAttemptCount.value += 1
    messageType.value = 'error'

    if (wrongAttemptCount.value === 1) {
        message.value = 'Are You Really Abdullah?'
        return
    }

    if (wrongAttemptCount.value === 2) {
        message.value = 'WHO ARE YOU?'
        return
    }

    message.value = 'GET OUT OF HERE!!'
}

const unlockGate = () => {
    isGateUnlocked.value = true
    password.value = ''
    messageType.value = 'success'
    message.value = 'Oh my, hello there'
}

const verifyWithApi = async () => {
    if (!email.value.trim() || !password.value) {
        messageType.value = 'error'
        message.value = 'Email and password are required.'
        return
    }

    const verifyUrl = import.meta.env.VITE_AUTH_VERIFY_URL

    // if (!verifyUrl) {
    //     messageType.value = 'error'
    //     message.value = 'Login endpoint is not configured.'
    //     return
    // }

    isSubmitting.value = true
    message.value = ''

    try {
        const response = await fetch(verifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        })

        let data: unknown = null

        try {
            data = await response.json()
        } catch {
            data = null
        }

        // if (!response.ok) {
        //     messageType.value = 'error'
        //     message.value = 'Login request was rejected.'
        //     return
        // }

        // if (!isAuthorizedResponse(data)) {
        //     messageType.value = 'error'
        //     message.value = 'Credentials were not approved.'
        //     return
        // }

        authStore.setAuthorized(true);
        await router.push(redirectTarget.value);

    } catch {
        messageType.value = 'error'
        message.value = 'Could not reach the login endpoint.'
    } finally {
        isSubmitting.value = false
    }
}

const handleSubmit = async () => {
    if (!isGateUnlocked.value) {
        if (password.value === PK) {
            unlockGate()
            return
        }

        showGateWarning()
        return
    }

    await verifyWithApi()
}
</script>
