<template>
    <div class="mx-2 p-1 rounded-full bg-gray-200 dark:bg-gray-700 relative">
        <input type="checkbox" hidden :checked="isDark" @change="toggleTheme" />

        <label for="theme-toggle" class="theme-toggle-label">
            <span class="toggle-indicator bg-white rounded-full h-4 w-4 z-10 relative"></span>
            <Sun class="sun-icon" :color="isDark ? '#6B6B6B' : '#fff'"/>
            <Moon class="moon-icon" :color="isDark ? '#fff' : '#000'" />
        </label>
        
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
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>