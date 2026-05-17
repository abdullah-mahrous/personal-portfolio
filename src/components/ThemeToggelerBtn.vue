<template>
    <div class="h-9 w-17 px-2 rounded-full flex-row-reverse flex items-center justify-between border-2 border-muted relative"
        @click="toggleTheme">

        <input type="checkbox" name="theme-toggle" hidden :checked="isDark" @change="toggleTheme" />

        <label for="theme-toggle" class="cursor-pointer bg-white rounded-full h-5 w-5" tabindex="0"></label>

        <Sun :color="isDark ? '#6B6B6B' : '#fff'" :size="20" />
        <Moon :color="isDark ? '#fff' : '#000'" :size="20" v-if="!isDark" />
    </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue';
import { ref, onMounted } from 'vue';

const isDark = ref<boolean>(true);

onMounted(() => {
    const savedTheme: string | null = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        isDark.value = true;
        document.body.classList.add('dark');
    }
});

const toggleTheme = () => {
    isDark.value = !isDark.value;

    if (isDark.value) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};
</script>