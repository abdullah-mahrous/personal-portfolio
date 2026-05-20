<template>
  <!-- search if there is host for back-end -->
  <!-- integrate back-end if applicable -->
  <!-- integrate blogs, projects adding if back-end is applicable -->
  <!-- finish UI -->
  <!-- add functionality -->
  <!-- add comments -->
  <!-- validate ts -->
  <!-- delete unused files eg. ctaBanner, imgs -->
  <large-nav-bar class="hidden sm:block" />
  <small-nav-bar class="block sm:hidden" />
  <router-view />
  <go-up-btn />
  <base-footer />
</template>

<script setup lang="ts">
import BaseFooter from './components/BaseFooter.vue';
import GoUpBtn from './components/GoUpBtn.vue';
import LargeNavBar from './components/LargeNavBar.vue';
import SmallNavBar from './components/SmallNavBar.vue';
</script>
