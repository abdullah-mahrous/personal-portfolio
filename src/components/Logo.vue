<template>
    <span class="font-bold text-black dark:text-white text-4xl cursor-pointer no-underline hover:no-underline"
        @click.prevent="handleHomeScroll(scrollUp)">
        <span class="text-primary">A</span>M
    </span>
</template>

<script setup lang="ts">
import { handleHomeScroll, scrollUp } from '../services/scrollService';
</script>
