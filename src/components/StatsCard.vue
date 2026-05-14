<template>
    <div class="base-card flex justify-center">
        <slot></slot>

        <div>
            <h5 class="font-bold mb-2" :class="largeTitle ? 'text-2xl' : 'text-lg'">
                {{ title }}
            </h5>
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