<template>
  <!-- integrate back-end if applicable -->
  <!-- add functionality -->
  <!-- add comments -->
  <!-- validate ts -->
  <!-- delete unused files eg. ctaBanner, imgs -->
  <!-- link the website to google search console -->
  <large-nav-bar class="hidden sm:block" />
  <small-nav-bar />
  <router-view />
  <go-up-btn />
  <base-footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BaseFooter from './components/BaseFooter.vue';
import GoUpBtn from './components/GoUpBtn.vue';
import LargeNavBar from './components/LargeNavBar.vue';
import SmallNavBar from './components/SmallNavBar.vue';
import { useNotesStore } from './stores/notes';

const notesStore = useNotesStore();

onMounted(() => {
  // Initialize notes from storage on app startup
  notesStore.fetchNotes();
});
</script>
