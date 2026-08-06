<template>
    <div class="base-card base-border flex h-full min-w-0 items-start justify-start">
        <slot></slot>

        <div class="min-w-0">
            <p class="font-bold mb-2 break-words" :class="largeTitle ? 'text-xl sm:text-2xl' : 'text-lg'">
                {{ title }}
            </p>
            <p class="card-text leading-relaxed">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    description: string,
    largeTitle: boolean
}>()
</script>
