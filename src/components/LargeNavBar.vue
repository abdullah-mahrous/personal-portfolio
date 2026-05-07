<template>
    <nav class="py-5 sticky top-0 z-50">
        <ul class="flex justify-between items-center list-none">
            <li>
                <Logo />
            </li>

            <li class="muted text-offWhite flex items-center justify-center text-[18px]">
                <span class="mx-4"><router-link to="/" active-class="active-tab">Home</router-link></span>
                <span class="mx-4 hover:text-white transition-colors duration-400"><router-link to="/projects"
                        active-class="active-tab">Projects</router-link></span>
                <span class="mx-4 hover:text-white transition-colors duration-400"><router-link to="/about"
                        active-class="active-tab">About</router-link></span>
                <span class="mx-4 hover:text-white transition-colors duration-400"><router-link to="/contact"
                        active-class="active-tab">Contact</router-link></span>
                <span class="mx-4 hover:text-white transition-colors duration-400"><router-link to="/blog"
                        active-class="active-tab">Blog</router-link></span>
            </li>

            <li class="flex">
                <ThemeToggelerBtn class="mx-8" />

                <router-link to="/contact">
                    <BaseBtn>
                        Let's Talk
                        <MoveRight class="ml-3" />
                    </BaseBtn>
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
    color: #8315E7;
    border-bottom: #8315E7 2px solid;
    padding-bottom: 8px;
}
</style>