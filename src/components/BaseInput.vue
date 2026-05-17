<template>
    <input :type="type" :placeholder="placeHolder" class="base-input base-border w-full min-w-0">
</template>

<script setup lang="ts">
defineProps<{
    type: string,
    placeHolder: string,
}>()
</script>
