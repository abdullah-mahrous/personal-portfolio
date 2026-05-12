<template>
    <section>
        <h3 class="flex items-center font-bold text-xl mb-4">
            <span class="inline-block size-2 rounded-full bg-primary mr-2"></span> {{ props.title }}
        </h3>

        <div class="flex justify-between items-center">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
})
</script>