<template>
    <nav class="py-5 px-4 md:px-8 lg:px-16 sticky top-0 z-50 bg-darkBg backdrop-blur-sm">
        <ul class="flex justify-between items-center list-none">
            <li>
                <Logo />
            </li>

            <li class="muted text-offWhite flex items-center justify-center text-[18px]">
                <span class="mx-4"><router-link to="/" active-class="active-tab">Home</router-link></span>
                <span class="nav-link"><router-link to="/projects"
                        active-class="active-tab">Projects</router-link></span>
                <span class="nav-link"><router-link to="/blog" active-class="active-tab">Blog</router-link></span>
            </li>

            <li class="flex">
                <theme-toggeler-btn class="mx-8" />

                <router-link to="/contact">
                    <base-btn class="px-4 py-2">
                        Let's Talk
                        <MoveRight class="ml-3" />
                    </base-btn>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { MoveRight } from '@lucide/vue';
import ThemeToggelerBtn from './ThemeToggelerBtn.vue';
import BaseBtn from './BaseBtn.vue';
import Logo from './Logo.vue';

</script>

<style>
.active-tab {
    color: var(--color-primary);
    border-bottom: var(--color-primary) 2px solid;
    padding-bottom: 8px;
}
</style>