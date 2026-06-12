<template>
    <button type="button" aria-label="Scroll To Page Start"
        class="rounded-full bg-primary w-12 h-12 hover:bg-primary/85 focus:outline-none focus:ring-2 focus:ring-primary fixed right-4 bottom-4 transition-colors ease-in-out duration-400 z-20 cursor-pointer flex justify-center items-center text-white"
        @click="scrollUp">
        <MoveUp :size="26" />
    </button>
</template>

<script setup lang="ts">
import { MoveUp } from '@lucide/vue';
import { scrollUp } from '../services/scrollService';

</script>
