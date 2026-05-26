<template>
    <button type="button"
        class="relative h-9 w-17 overflow-hidden rounded-full border-2 border-gray-300 bg-white p-1 transition-colors duration-300 cursor-pointer dark:border-muted dark:bg-[#111217]"
        :aria-pressed="isDark" aria-label="Toggle dark mode" @click="handleToggle">

        <span
            class="pointer-events-none absolute top-1/2 z-10 size-6 -translate-y-1/2 rounded-full bg-darkBg transition-[left,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-white"
            :class="isDark ? 'left-9' : 'left-1'"></span>

        <span class="relative grid h-full grid-cols-2 items-center">
            <span class="flex items-center justify-center">
                <Sun :size="17" :class="isDark ? 'text-offWhite' : 'text-white'" />
            </span>

            <span class="flex items-center justify-center">
                <Moon :size="17" :class="isDark ? 'text-darkBg' : 'text-offWhite'" />
            </span>
        </span>
    </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue';
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { toggleTheme, isDarkMode, subscribeTheme } from '../services/themeService';

const isDark = ref(false);
let unsubscribeTheme: (() => void) | undefined;

const handleToggle = () => {
    toggleTheme();
};

onMounted(() => {
    isDark.value = isDarkMode();
    unsubscribeTheme = subscribeTheme((isDarkTheme) => {
        isDark.value = isDarkTheme;
    });
});

onBeforeUnmount(() => {
    unsubscribeTheme?.();
});
</script>
