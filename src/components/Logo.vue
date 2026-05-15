<template>
    <router-link to="/" class="font-bold text-4xl cursor-pointer no-underline hover:no-underline" @click="handleLogoClick">
        <span class="text-primary">A</span>M
    </router-link>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleLogoClick = async (event: MouseEvent) => {
    event.preventDefault();

    if (route.name === 'home' || route.path === '/') {
        smoothScrollToTop();
        return;
    }

    await router.push({ name: 'home' });
    window.requestAnimationFrame(() => {
        smoothScrollToTop();
    });
};
</script>
