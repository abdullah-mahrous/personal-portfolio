<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="handleCancel">
        <div class="modal-card max-w-sm">
            <h2 class="text-xl font-bold mb-4">Delete Note</h2>
            <p class="text-offWhite mb-6">
                Are you sure you want to delete <span class="font-semibold text-primary">{{ noteName }}</span>?
            </p>
            <p class="text-offWhite text-sm mb-6">This action cannot be undone.</p>

            <div class="flex gap-3">
                <base-btn @click="handleCancel" class="flex-1 p-2 bg-transparent! border-primary! text-primary! hover:bg-primary/10!">
                    Cancel
                </base-btn>
                <base-btn @click="handleConfirm" class="flex-1 p-2 bg-red-600! border-red-600! hover:bg-red-700!">
                    Delete
                </base-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseBtn from './BaseBtn.vue';

interface Props {
    isOpen: boolean;
    noteName: string;
}

interface Emits {
    (e: 'confirm'): void;
    (e: 'cancel'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

function handleConfirm() {
    emit('confirm');
}

function handleCancel() {
    emit('cancel');
}
</script>
