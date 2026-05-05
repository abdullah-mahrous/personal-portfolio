<template>
    <nav class="navbar">
        <ul>
            <li>
                <Logo/>
            </li>

            <li>
                <div>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </div>
            </li>

            <li>
                <div class="theme-btn">
                    <input type="checkbox" id="theme-toggle" class="theme-toggle" :checked="isDark" @change="toggleTheme" />

                    <label for="theme-toggle" class="theme-toggle-label">
                        <span class="toggle-indicator"></span>
                        <Sun class="sun-icon" />
                        <Moon class="moon-icon" />
                    </label>
                </div>
                
                <MenuSquare />
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sun, Moon, MenuSquare } from '@lucide/vue';
import Logo from './Logo.vue';

const isDark = ref<boolean>(false);

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