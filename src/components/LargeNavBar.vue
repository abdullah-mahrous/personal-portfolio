<template>
    <nav class="py-4 px-4 md:px-8 lg:px-16 navbar">
        <ul class="flex justify-between items-center list-none">
            <li>
                <Logo />
            </li>

            <li class="muted text-slate-600 dark:text-offWhite flex items-center justify-center text-[18px]">
                <span class="nav-link">
                    <router-link :to="{ name: 'home' }" class="desktop-nav-link" active-class="desktop-nav-link-active">
                        Home
                    </router-link>
                </span>
                <span class="nav-link">
                    <router-link :to="{ name: 'projects' }" class="desktop-nav-link"
                        active-class="desktop-nav-link-active">
                        Projects
                    </router-link>
                </span>
                <span class="nav-link">
                    <router-link :to="{ name: 'journal' }" class="desktop-nav-link"
                        active-class="desktop-nav-link-active">
                        Dev Journal
                    </router-link>
                </span>
            </li>

            <li class="flex items-center">
                <theme-toggeler-btn class="mr-8" />

                <base-btn class="px-4 py-2" @click="handleHomeScroll(scrollToContact)">
                    Let's Talk
                    <MoveRight class="ml-3" />
                </base-btn>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { MoveRight } from '@lucide/vue';
import { scrollToContact, handleHomeScroll } from '../services/scrollService';
import ThemeToggelerBtn from './ThemeToggelerBtn.vue';
import BaseBtn from './BaseBtn.vue';
import Logo from './Logo.vue';

</script>
