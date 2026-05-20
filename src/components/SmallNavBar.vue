<template>
    <nav>
        <div class="py-3 px-4 navbar">

            <ul class="flex justify-between items-center list-none w-full">
                <li>
                    <Logo />
                </li>

                <li class="flex items-center">
                    <button type="button" class="base-border rounded-lg p-1" aria-label="Open menu"
                        @click="openSidebar">
                        <Menu :size="28" />
                    </button>
                </li>
            </ul>

        </div>

        <Transition name="mobile-sidebar"
            enter-active-class="mobile-sidebar-enter-active transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            enter-from-class="mobile-sidebar-enter-from opacity-0" enter-to-class="mobile-sidebar-enter-to opacity-100"
            leave-active-class="mobile-sidebar-leave-active transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            leave-from-class="mobile-sidebar-leave-from opacity-100" leave-to-class="mobile-sidebar-leave-to opacity-0"
            @after-leave="handleSidebarAfterLeave">

            <div v-if="isSidebarOpen" class="bg-[#0b0b0f91] z-60 w-full h-screen fixed inset-0"
                @click.self="closeSidebar">

                <div
                    class="mobile-sidebar-panel translate-x-0 opacity-100 transition-[transform,opacity] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] bg-darkBg p-6 w-3/4 h-full overflow-y-auto flex flex-col">

                    <div class="flex items-center justify-between">
                        <logo />

                        <button type="button" class="border-[#1F2028] rounded-lg p-1 border-2" aria-label="Close menu"
                            @click="closeSidebar">
                            <X />
                        </button>
                    </div>

                    <div class="my-8 space-x-2">
                        <router-link :to="{ name: 'home' }" active-class="mobile-nav-link-active"
                            class="mobile-nav-link flex items-center rounded-lg p-4">
                            <House class="mr-4" />
                            Home
                        </router-link>

                        <router-link :to="{ name: 'projects' }" active-class="mobile-nav-link-active"
                            class="mobile-nav-link flex items-center rounded-lg p-4">
                            <Folder class="mr-4" />
                            Projects
                        </router-link>

                        <router-link :to="{ name: 'blog' }" active-class="mobile-nav-link-active"
                            class="mobile-nav-link flex items-center rounded-lg p-4">
                            <FileCode class="mr-4" />
                            Blog
                        </router-link>
                    </div>

                    <div class="border-t border-[#1F2028] pt-8">
                        <p class="text-offWhite">
                            Let's Connect
                        </p>

                        <div class="flex gap-4 mt-6">
                            <github-link class="hero-socials base-border p-2" :icon-size="20" />
                            <linkedin-link class="hero-socials base-border p-2" :icon-size="20" />
                            <facebook-link class="hero-socials base-border p-2" :icon-size="20" />
                            <mail-link class="hero-socials base-border p-2" :icon-size="20" />
                        </div>

                    </div>

                    <!-- cta banner -->
                    <div
                        class="mt-10 mb-12 rounded-xl base-border bg-[linear-gradient(135deg,#101118_0%,#0D0E14_100%)] px-4 py-4 flex flex-col gap-4 shadow-[0_0_24px_rgba(131,21,231,0.08)]">

                        <div class="flex items-start gap-3">
                            <div
                                class="p-2 rounded-lg border border-primary bg-[#8315e71f] flex items-center justify-center shrink-0">
                                <MessagesSquare class="text-primary" :size="24" />
                            </div>

                            <div class="relative z-10 min-w-0 flex-1">
                                <h3 class="text-primary text-xl xs:text-2xl leading-tight">Let's Talk</h3>
                                <p class="text-offWhite mt-2 text-sm xs:text-base leading-relaxed">
                                    Have a project in mind?<br>I'd love to hear about it.
                                </p>
                            </div>
                        </div>

                        <base-btn class="w-full py-3 border-0 shadow-[0_0_20px_rgba(131,21,231,0.35)]"
                            @click="scrollToContactForm">
                            Contact Me
                            <MoveRight :size="18" class="ml-2" />
                        </base-btn>
                    </div>

                    <!-- theme toggle btn -->
                    <div class="mt-auto pt-6 border-t border-[#1F2028] flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3 text-offWhite">
                            <Moon :size="18" class="text-white" />
                            <span>Dark Mode</span>
                        </div>

                        <theme-toggeler-btn />
                    </div>

                </div>
            </div>

        </Transition>
    </nav>

</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ThemeToggelerBtn from './ThemeToggelerBtn.vue';
import Logo from './Logo.vue';
import BaseBtn from '../components/BaseBtn.vue';
import GithubLink from '../components/GithubLink.vue';
import LinkedinLink from '../components/LinkedinLink.vue';
import FacebookLink from '../components/FacebookLink.vue';
import MailLink from '../components/MailLink.vue';
import { FileCode, Folder, House, Menu, MessagesSquare, X, MoveRight, Moon } from '@lucide/vue';

const route = useRoute();
const router = useRouter();
const isSidebarOpen = ref(false);

let previousBodyOverflow = '';
let previousHtmlOverflow = '';
let isPageScrollLocked = false;
let sidebarLeaveResolvers: (() => void)[] = [];

const lockPageScroll = () => {
    if (isPageScrollLocked) {
        return;
    }

    previousBodyOverflow = document.body.style.overflow;
    previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    isPageScrollLocked = true;
};

const unlockPageScroll = () => {
    if (!isPageScrollLocked) {
        return;
    }

    document.body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;
    isPageScrollLocked = false;
};

const openSidebar = () => {
    isSidebarOpen.value = true;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};

const waitForSidebarLeave = () => new Promise<void>((resolve) => {
    if (!isSidebarOpen.value) {
        resolve();
        return;
    }

    sidebarLeaveResolvers.push(resolve);
});

const handleSidebarAfterLeave = () => {
    unlockPageScroll();
    sidebarLeaveResolvers.forEach((resolve) => resolve());
    sidebarLeaveResolvers = [];
};

const scrollContactIntoView = () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const scrollToContactForm = async () => {
    const waitForCloseAnimation = waitForSidebarLeave();
    closeSidebar();
    await waitForCloseAnimation;

    if (route.name !== 'home') {
        await router.push({ name: 'home' });
        await nextTick();
    }

    window.requestAnimationFrame(scrollContactIntoView);
};

watch(isSidebarOpen, (isOpen) => {
    if (isOpen) {
        lockPageScroll();
    }
});

onBeforeUnmount(() => {
    if (isPageScrollLocked) {
        unlockPageScroll();
    }
});
</script>
