<template>
    <main class="min-h-[calc(100vh-12rem)] px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
        <section
            class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 py-14 sm:py-20 lg:flex-row lg:justify-between lg:gap-16">
            <div class="w-full max-w-2xl text-center lg:text-left">
                <p class="mb-4 text-4xl font-semibold text-primary sm:text-6xl">
                    404
                </p>

                <h1 class="text-4xl font-bold leading-tight text-lightText dark:text-white sm:text-5xl lg:text-6xl">
                    This <span class="text-primary">route</span> drifted off the map.
                </h1>

                <p class="mt-5 text-base leading-relaxed text-slate-600 dark:text-offWhite sm:text-lg">
                    The page you requested does not exist or may have moved. You can head home, browse projects, or go
                    back to the previous page.
                </p>

                <p
                    class="mt-4 break-all rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-slate-500 dark:border-[#1F2028] dark:bg-[#111217] dark:text-muted">
                    {{ route.fullPath }}
                </p>

                <div class="mt-8 flex flex-col gap-3 xs:flex-row xs:justify-center lg:justify-start">
                    <router-link :to="{ name: 'home' }" class="w-full xs:w-auto">
                        <base-btn class="w-full px-6 py-3 xs:w-auto">
                            <Home class="mr-2" :size="18" />
                            Go Home
                        </base-btn>
                    </router-link>

                    <router-link :to="{ name: 'projects' }" class="w-full xs:w-auto">
                        <button
                            class="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 bg-transparent px-6 py-3 text-[14px] font-medium text-lightText transition-colors duration-300 hover:border-gray-400 dark:border-[#2A2A35] dark:text-white dark:hover:border-[#3A3B47] dark:hover:bg-[rgba(255,255,255,0.03)] xs:w-auto">
                            <FolderGit2 class="mr-2" :size="18" />
                            View Projects
                        </button>
                    </router-link>

                    <button
                        class="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-transparent px-6 py-3 text-[14px] font-medium text-slate-600 transition-colors duration-300 hover:text-primary dark:text-offWhite dark:hover:text-primary xs:w-auto"
                        @click="router.back()">
                        <MoveLeft class="mr-2" :size="18" />
                        Go Back
                    </button>
                </div>
            </div>

            <div class="relative flex w-full max-w-sm justify-center sm:max-w-md lg:max-w-lg">
                <div
                    class="hero-glow-circles bg-[radial-gradient(circle_at_center,rgba(131,21,231,0.24),transparent_55%)]">
                </div>

                <div
                    class="relative flex aspect-square w-full items-center justify-center rounded-3xl border border-gray-200 bg-white/80 p-10 shadow-[0_0_48px_rgba(131,21,231,0.14)] dark:border-[#1F2028] dark:bg-[#111217]/80">
                    <span
                        class="absolute right-8 top-8 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        Missing page
                    </span>

                    <img class="w-3/5 max-w-56 drop-shadow-[0_0_34px_rgba(131,21,231,0.38)]"
                        src="https://api.iconify.design/solar:file-bold-duotone.svg?color=%238315E7"
                        alt="Duotone file icon representing a missing page" width="224" height="224" />

                    <div
                        class="absolute bottom-8 left-8 right-8 rounded-xl border border-gray-200 bg-lightBg px-4 py-3 text-left dark:border-[#2A2A35] dark:bg-darkBg">
                        <p class="text-xs font-semibold uppercase text-primary">
                            Status
                        </p>
                        <p class="mt-1 text-sm text-slate-600 dark:text-offWhite">
                            Page not found
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { FolderGit2, Home, MoveLeft } from '@lucide/vue';
import { useRoute, useRouter } from 'vue-router';
import BaseBtn from '../components/BaseBtn.vue';

const route = useRoute();
const router = useRouter();
</script>
