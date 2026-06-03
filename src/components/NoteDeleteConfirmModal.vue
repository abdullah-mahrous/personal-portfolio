<template>
    <div v-if="props.isOpen" class="modal-overlay" @click.self="handleCancel">
        <div class="modal-card max-w-sm">
            <h2 class="text-xl font-bold mb-4">Delete Note</h2>
            <p class="text-slate-600 dark:text-offWhite mb-6">
                Are you sure you want to delete <span class="font-semibold text-primary">{{ props.noteName }}</span>?
            </p>
            <p class="text-slate-600 dark:text-offWhite text-sm mb-6">This action cannot be undone.</p>

            <div class="flex gap-3">
                <base-btn @click="handleCancel" :disabled="props.loading"
                    class="flex-1 p-2 bg-transparent! border-primary! text-primary! hover:bg-primary/10!">
                    Cancel
                </base-btn>
                <base-btn @click="handleConfirm" :disabled="props.loading"
                    class="flex-1 p-2 bg-red-600! border-red-600! hover:bg-red-700!">
                    {{ props.loading ? 'Deleting...' : 'Delete' }}
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
    loading?: boolean;
}

interface Emits {
    (e: 'confirm'): void;
    (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
    loading: false,
});
const emit = defineEmits<Emits>();

function handleConfirm() {
    if (props.loading) {
        return;
    }

    emit('confirm');
}

function handleCancel() {
    if (props.loading) {
        return;
    }

    emit('cancel');
}
</script>
