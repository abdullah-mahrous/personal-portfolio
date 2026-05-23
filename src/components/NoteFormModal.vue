<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-card max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold">
                    {{ mode === 'create' ? 'Create New Note' : 'Edit Note' }}
                </h2>
                <button @click="closeModal" class="cursor-pointer text-xl hover:text-primary transition-colors">✕</button>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Title -->
                <div>
                    <label class="block text-sm font-medium mb-2">Title *</label>
                    <base-input
                        v-model="formData.title"
                        type="text"
                        placeHolder="Enter note title"
                    />
                    <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
                </div>

                <!-- Content -->
                <div>
                    <label class="block text-sm font-medium mb-2">Content * (Supports Markdown)</label>
                    <textarea
                        v-model="formData.content"
                        placeholder="Enter note content (markdown supported)"
                        class="base-input base-border w-full min-w-0 h-48 sm:h-64 md:h-80 bg-[#111217] rounded-lg p-4 text-white placeholder:text-muted outline-none focus:border-primary resize-vertical"
                    ></textarea>
                    <p v-if="errors.content" class="text-red-500 text-sm mt-1">{{ errors.content }}</p>
                </div>

                <!-- Image File Upload -->
                <div>
                    <label class="block text-sm font-medium mb-2">Image *</label>
                    <input
                        type="file"
                        accept="image/*"
                        @change="handleImageUpload"
                        class="base-input base-border w-full cursor-pointer"
                    />
                    <p class="text-offWhite text-xs mt-1">Select an image file (PNG, JPG, GIF, etc.)</p>
                    <p v-if="errors.imgSrc" class="text-red-500 text-sm mt-1">{{ errors.imgSrc }}</p>
                    <div v-if="imagePreview" class="mt-3 flex items-center gap-3">
                        <img :src="imagePreview" alt="Preview" class="h-16 w-16 object-cover rounded">
                        <span class="text-sm text-offWhite">Image selected</span>
                    </div>
                </div>

                <!-- Reading Time -->
                <div>
                    <label class="block text-sm font-medium mb-2">Reading Time (minutes) *</label>
                    <base-input
                        v-model.number="formData.readingTime"
                        type="number"
                        placeHolder="e.g., 5"
                    />
                    <p v-if="errors.readingTime" class="text-red-500 text-sm mt-1">{{ errors.readingTime }}</p>
                </div>

                <!-- Error Message -->
                <div v-if="submitError" class="bg-red-500/10 border border-red-500 rounded-md p-3 text-red-500 text-sm">
                    {{ submitError }}
                </div>

                <!-- Buttons -->
                <div class="flex gap-3 pt-4">
                    <base-btn @click="closeModal" class="flex-1 p-2 !bg-transparent !border-primary !text-primary hover:!bg-primary/10">
                        Cancel
                    </base-btn>
                    <base-btn type="submit" class="flex-1 p-2">
                        {{ mode === 'create' ? 'Create' : 'Update' }}
                    </base-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseBtn from './BaseBtn.vue';
import type { Note } from '../services/notesService';

interface Props {
    isOpen: boolean;
    note?: Note | null;
    mode: 'create' | 'edit';
}

interface Emits {
    (e: 'close'): void;
    (e: 'save', data: Omit<Note, 'id'>): void;
}

const props = withDefaults(defineProps<Props>(), {
    note: null,
});

const emit = defineEmits<Emits>();

const formData = ref({
    title: '',
    content: '',
    imgSrc: '',
    readingTime: 5,
});

const imagePreview = ref('');

const errors = ref({
    title: '',
    content: '',
    imgSrc: '',
    readingTime: '',
});

const submitError = ref('');

// Watch for modal open/close to handle form population
watch(
    () => props.isOpen,
    (isOpen) => {
        if (isOpen) {
            if (props.mode === 'create') {
                resetForm();
            } else if (props.mode === 'edit' && props.note) {
                // Populate form with existing note data
                formData.value = {
                    title: props.note.title,
                    content: props.note.content,
                    imgSrc: props.note.imgSrc,
                    readingTime: props.note.readingTime,
                };
                imagePreview.value = props.note.imgSrc;
                errors.value = {
                    title: '',
                    content: '',
                    imgSrc: '',
                    readingTime: '',
                };
                submitError.value = '';
            }
        }
    },
    { immediate: true }
);

function resetForm() {
    formData.value = {
        title: '',
        content: '',
        imgSrc: '',
        readingTime: 5,
    };
    imagePreview.value = '';
    errors.value = {
        title: '',
        content: '',
        imgSrc: '',
        readingTime: '',
    };
    submitError.value = '';
}

function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target?.result as string;
        formData.value.imgSrc = base64;
        imagePreview.value = base64;
        errors.value.imgSrc = '';
    };
    reader.onerror = () => {
        errors.value.imgSrc = 'Failed to read image file';
    };
    reader.readAsDataURL(file);
}

function validateForm() {
    errors.value = {
        title: '',
        content: '',
        imgSrc: '',
        readingTime: '',
    };

    if (!formData.value.title || formData.value.title.trim() === '') {
        errors.value.title = 'Title is required';
    }

    if (!formData.value.content || formData.value.content.trim() === '') {
        errors.value.content = 'Content is required';
    }

    if (!formData.value.imgSrc) {
        errors.value.imgSrc = 'Image is required';
    }

    if (!formData.value.readingTime || formData.value.readingTime < 1) {
        errors.value.readingTime = 'Reading time must be at least 1 minute';
    }

    return !Object.values(errors.value).some(err => err);
}

function handleSubmit() {
    if (!validateForm()) {
        return;
    }

    try {
        const creationDate = props.mode === 'create' 
            ? new Date().toISOString().split('T')[0]
            : (props.note?.creationDate || new Date().toISOString().split('T')[0]);

        emit('save', {
            title: formData.value.title,
            content: formData.value.content,
            imgSrc: formData.value.imgSrc,
            creationDate: creationDate,
            readingTime: formData.value.readingTime,
        });
        closeModal();
    } catch (err) {
        submitError.value = err instanceof Error ? err.message : 'Failed to save note';
    }
}

function closeModal() {
    emit('close');
}
</script>
