<template>
    <input :type="type" :placeholder="placeHolder" :value="modelValue" class="base-input base-border w-full min-w-0"
        @input="handleInput">
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue?: string | number,
    type: string,
    placeHolder: string,
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: string | number): void
}>()

const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;

    if (props.type === 'number') {
        emit('update:modelValue', input.valueAsNumber || 0);
        return;
    }

    emit('update:modelValue', input.value);
};
</script>
