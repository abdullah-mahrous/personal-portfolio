<template>
  <large-nav-bar/>
  <small-nav-bar v-if="smallScreen"/>
  <router-view/>
  <go-up-btn/>
  <base-footer/>
</template>

<script setup lang="ts">
import BaseFooter from './components/BaseFooter.vue';
import GoUpBtn from './components/GoUpBtn.vue';
import LargeNavBar from './components/LargeNavBar.vue';
import SmallNavBar from './components/SmallNavBar.vue';

const smallScreen = window.innerWidth < 768;
</script>