<template>
    <div class="flex flex-col items-center">
        <div class="bg-[#111217] border border-[#1F2028] p-2 flex justify-center items-center rounded-lg">
            <slot></slot>
        </div>
        <span class="text-sm text-offWhite mt-2"> {{ props.techName }} </span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    techName: String
})
</script>