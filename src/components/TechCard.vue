<template>
    <div class="flex flex-col items-center">
        <div class="bg-[#111217] base-border p-2 flex justify-center items-center rounded-lg">
            <slot></slot>
        </div>
        <span class="text-sm text-offWhite mt-2"> {{ techName }} </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    techName: string
}>()
</script>
