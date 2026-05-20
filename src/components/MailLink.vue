<template>
    <a href="mailto:abdullah.mohammed.mahrous@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail class="lucide lucide-mail" :size="iconSize" />
    </a>
</template>

<script setup lang="ts">
import { Mail } from '@lucide/vue';

defineProps<{
    iconSize: number
}>()
</script>