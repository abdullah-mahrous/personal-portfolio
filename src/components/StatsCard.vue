<template>
    <div class="w-1/5 bg-[#111217] border border-[#1F2028] p-4 flex justify-center items-center rounded-lg text-white">

        <span class="rounded-full bg-[#2b1e4480] flex justify-center items-center p-4 mr-4">
            <slot></slot>
        </span>

        <div>
            <h5 class="font-bold text-2xl mb-1">
                {{ props.title }}
            </h5>
            <p class="text-offWhite text-sm">
                {{ props.description }}
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    description: String,
})
</script>