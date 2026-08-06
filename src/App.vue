<template>
    <Transition name="app-loading">
        <loading-screen v-if="loading" />
    </Transition>

    <!-- NavBars -->
    <large-nav-bar class="hidden sm:block" />
    <small-nav-bar />

    <router-view />
    <go-up-btn />

    <base-footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useNotesStore } from './stores/notes';
import { heroAnimation } from './composables/heroAnimation';

import BaseFooter from './components/BaseFooter.vue';
import GoUpBtn from './components/GoUpBtn.vue';
import LargeNavBar from './components/navbar/LargeNavBar.vue';
import SmallNavBar from './components/navbar/SmallNavBar.vue';
import LoadingScreen from './components/loadingScreen.vue';

let loading = ref<boolean>(true);

const notesStore = useNotesStore();

const { play } = heroAnimation();

const loadingInterval = setInterval(() => {
    if (!notesStore.loading) {
        loading.value = false;
        play();
        clearInterval(loadingInterval);
    }
}, 1500);
</script>

<style scoped>
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
    .app-loading-leave-active {
        transition-duration: 1ms;
        filter: none;
        transform: none;
    }
}
</style>
