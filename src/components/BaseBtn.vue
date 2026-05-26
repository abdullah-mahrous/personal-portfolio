<template>
    <button :type="type" :disabled="disabled"
        class="cursor-pointer bg-primary border-2 border-primary text-[14px] font-medium rounded-md hover:bg-primary/85 transition-colors duration-300 flex justify-center items-center text-white">
        <slot />
    </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
}>(), {
    type: 'button',
    disabled: false,
});
</script>
