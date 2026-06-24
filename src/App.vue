<template>
    <Transition name="app-loading">
        <loading-screen v-if="loading" />
    </Transition>

    <div :class="{ 'app-view': loading }">
        <large-nav-bar class="hidden sm:block" />
        <small-nav-bar />
        <router-view />
        <go-up-btn />
        <base-footer />
        <Analytics />
    </div>
    <SpeedInsights />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNotesStore } from './stores/notes';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { Analytics } from '@vercel/analytics/vue';
import BaseFooter from './components/BaseFooter.vue';
import GoUpBtn from './components/GoUpBtn.vue';
import LargeNavBar from './components/LargeNavBar.vue';
import SmallNavBar from './components/SmallNavBar.vue';
import LoadingScreen from './components/loadingScreen.vue';

let loading = ref<boolean>(true);

const notesStore = useNotesStore();

const loadingInterval = setInterval(() => {
    if (!notesStore.loading) {
        loading.value = false;
        clearInterval(loadingInterval);
    }
}, 2000);
</script>

<style scoped>
.app-view {
    min-height: 100vh;
    opacity: 0;
    filter: blur(6px);
    transform: translateY(6px);
    transition:
        opacity 720ms cubic-bezier(0.22, 1, 0.36, 1) 90ms,
        filter 720ms cubic-bezier(0.22, 1, 0.36, 1) 90ms,
        transform 720ms cubic-bezier(0.22, 1, 0.36, 1) 90ms;
    will-change: opacity, filter, transform;
}

.app-loading-leave-active {
    transition:
        opacity 680ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 680ms cubic-bezier(0.22, 1, 0.36, 1),
        transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, filter, transform;
}

.app-loading-leave-to {
    opacity: 0;
    filter: blur(8px);
    transform: scale(1.008);
    pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {

    .app-view,
    .app-loading-leave-active {
        transition-duration: 1ms;
        filter: none;
        transform: none;
    }
}
</style>
