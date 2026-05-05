<template>
    <nav class="py-4">
        <ul class="flex items-center">

            <li class="justify-self-left">
                <Logo />
            </li>

            <li class="muted mx-2"><router-link to="/" active-class="active-tab">Home</router-link></li>
            <li class="muted mx-2"><router-link to="/projects" active-class="active-tab">Projects</router-link></li>
            <li class="muted mx-2"><router-link to="/about" active-class="active-tab">About</router-link></li>
            <li class="muted mx-2"><router-link to="/contact" active-class="active-tab">Contact</router-link></li>
            <li class="muted mx-2"><router-link to="/blog" active-class="active-tab">Blog</router-link></li>

            <li class="justify-self-right">
                <ThemeToggelerBtn />
                
                <router-link to="/contact">
                    <BaseBtn>Let's Talk <MoveRight /></BaseBtn>
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
.active-tab{
    color: #8315E7;
    border-bottom: #8315E7 1.5px solid;
    padding-bottom: 4px;
}
</style>