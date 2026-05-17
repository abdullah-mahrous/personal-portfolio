<template>
    <nav class="py-3 px-4 sticky top-0 z-50 bg-darkBg w-full">
        <ul class="flex justify-between items-center list-none w-full">
            <li>
                <Logo />
            </li>

            <li class="flex items-center">
                <button type="button" class="base-border rounded-lg p-1">
                    <Menu :size="28" />
                </button>
            </li>
        </ul>
    </nav>

    <div>
        <div>

            <div>
                <logo />

                <button type="button">
                    <X :size="30" />
                </button>
            </div>

            <div>
                <router-link :to="{ name: 'home' }">
                    <div>
                        <House />
                        Home
                    </div>
                </router-link>

                <router-link :to="{ name: 'home' }">
                    <div>
                        <Folder />
                        Projects
                    </div>
                </router-link>

                <router-link :to="{ name: 'home' }">
                    <div>
                        <FileCode />
                        Blog
                    </div>
                </router-link>
            </div>

            <div>
                <p>
                    Let's Connect
                </p>

                <div class="flex flex-wrap justify-between xs:justify-start gap-4 xs:gap-8 sm:gap-6 mt-6">
                    <github-link class="hero-socials base-border" />
                    <linkedin-link class="hero-socials base-border" />
                    <facebook-link class="hero-socials base-border" />
                    <mail-link class="hero-socials base-border" />
                </div>

            </div>

            <!-- cta banner -->
            <div
                class="mt-10 mb-12 rounded-xl base-border bg-[linear-gradient(135deg,#10111800_0%,#0D0E14_100%)] px-5 py-4 md:px-7 md:py-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between relative overflow-hidden">
                <div
                    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_45%,rgba(131,21,231,0.20),transparent_30%)]">
                </div>

                <div class="flex items-center sm:items-center gap-4 relative z-10">
                    <div
                        class="p-2 rounded-xl border border-[#2A2742] bg-[linear-gradient(145deg,#171427,#0E0D17)] shadow-[inset_0_0_20px_rgba(131,21,231,0.23),0_0_22px_rgba(131,21,231,0.12)] flex items-center justify-center">

                        <svg viewBox="0 0 24 24" fill="none" class="w-14 h-14">
                            <path d="M12 3L19 7V17L12 21L5 17V7L12 3Z" stroke="#9D4DFF" stroke-width="1.2"
                                stroke-linejoin="round" />
                            <path d="M12 3V21" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round" />
                            <path d="M5 7L12 11L19 7" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </div>

                    <div>
                        <h3 class="text-white text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">Have an idea in
                            mind?</h3>
                        <p class="text-offWhite mt-1 xs:text-lg">Let's turn it into a real product.</p>
                    </div>
                </div>

                <base-btn
                    class="relative z-10 w-full sm:w-auto px-7 py-3 border-0! shadow-[0_0_20px_rgba(131,21,231,0.35)]">
                    Contact Me
                    <MoveRight class="ml-2" :size="18" />
                </base-btn>
            </div>

            <!-- theme toggle btn -->
            <div>
                <theme-toggeler-btn />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import ThemeToggelerBtn from './ThemeToggelerBtn.vue';
import Logo from './Logo.vue';
import { FileCode, Folder, House, Menu, Moon, X } from '@lucide/vue';

</script>

<style>
.active-tab {
    color: var(--color-primary);
    border-bottom: var(--color-primary) 2px solid;
    padding-bottom: 8px;
}
</style>