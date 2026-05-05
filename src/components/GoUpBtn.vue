<template>
    <button type="button" class="rounded-full bg-primary-500 text-white p-2 w-10 h-10 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-300 fixed bottom-4 right-4 z-20" @click="goUp">
        <MoveUp/>
    </button>
</template>

<script setup lang="ts">
import { MoveUp } from '@lucide/vue';

const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>