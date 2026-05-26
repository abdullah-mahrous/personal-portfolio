import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import { router } from './router'
import { createPinia } from 'pinia'
import { detectTheme } from './services/themeService'

const pinia = createPinia();

detectTheme();

createApp(App).use(pinia).use(router).mount('#app')
