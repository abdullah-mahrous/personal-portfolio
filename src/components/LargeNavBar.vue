<template>
    <nav class="py-4 px-4 md:px-8 lg:px-16 navbar">
        <ul class="flex justify-between items-center list-none">
            <li>
                <Logo />
            </li>

            <li class="muted text-offWhite flex items-center justify-center text-[18px]">
                <span class="nav-link">
                    <router-link to="/" class="desktop-nav-link" active-class="desktop-nav-link-active">
                        Home
                    </router-link>
                </span>
                <span class="nav-link">
                    <router-link to="/projects" class="desktop-nav-link" active-class="desktop-nav-link-active">
                        Projects
                    </router-link>
                </span>
                <span class="nav-link">
                    <router-link to="/blog" class="desktop-nav-link" active-class="desktop-nav-link-active">
                        Blog
                    </router-link>
                </span>
            </li>

            <li class="flex items-center">
                <theme-toggeler-btn class="mr-8" />

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
