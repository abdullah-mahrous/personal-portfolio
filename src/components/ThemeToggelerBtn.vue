<template>
    <div class="px-2 rounded-full flex items-center justify-center border-2 border-muted relative" @click="toggleTheme">

        <input type="checkbox" name="theme-toggle" hidden :checked="isDark" @change="toggleTheme" />

        <label for="theme-toggle" class="cursor-pointer bg-white rounded-full h-6 w-6 z-10 absolute right-1"></label>

        <Sun class="sun-icon mr-4" :color="isDark ? '#6B6B6B' : '#fff'" :size="20" />
        <Moon class="moon-icon" :color="isDark ? '#fff' : '#000'" :size="20" />
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