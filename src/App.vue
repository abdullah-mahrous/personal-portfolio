<template>
  <large-nav-bar class="hidden md:block" />
  <small-nav-bar class="block md:hidden" />
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
