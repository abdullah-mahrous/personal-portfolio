<template>
    <div v-if="props.isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-card max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold">
                    {{ props.mode === 'create' ? 'Create New Note' : 'Edit Note' }}
                </h2>
                <button @click="closeModal" :disabled="props.isSaving" aria-label="Close Note Form"
                    class="cursor-pointer text-xl hover:text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-60">
                    x
                </button>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Title -->
                <div>
                    <label class="block text-sm font-medium mb-2">Title *</label>
                    <base-input v-model="formData.title" type="text" placeHolder="Enter note title" />
                    <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
                </div>

                <!-- Content -->
                <div>
                    <label class="block text-sm font-medium mb-2">Content * (Supports Markdown)</label>
                    <textarea v-model="formData.content" placeholder="Enter note content (markdown supported)"
                        class="base-input base-border w-full min-w-0 h-48 sm:h-64 md:h-80 bg-white dark:bg-[#111217] rounded-lg p-4 text-lightText dark:text-white placeholder:text-slate-400 dark:placeholder:text-muted outline-none focus:border-primary resize-vertical"></textarea>
                    <p v-if="errors.content" class="text-red-500 text-sm mt-1">{{ errors.content }}</p>
                </div>

                <!-- Image File Upload -->
                <div>
                    <label class="block text-sm font-medium mb-2">{{ imageLabel }}</label>
                    <input ref="imageInput" type="file" accept="image/*" :disabled="props.isSaving"
                        @change="handleImageUpload" class="base-input base-border w-full cursor-pointer" />
                    <p class="text-slate-600 dark:text-offWhite text-xs mt-1">
                        Select an image file (PNG, JPG, GIF, etc.)
                    </p>
                    <p v-if="errors.img" class="text-red-500 text-sm mt-1">{{ errors.img }}</p>
                    <div v-if="imagePreview" class="mt-3 flex items-center gap-3">
                        <img :src="imagePreview" alt="Preview" class="h-16 w-16 object-cover rounded">
                        <span class="text-sm text-slate-600 dark:text-offWhite">
                            {{ selectedImage ? 'New image selected' : 'Current image' }}
                        </span>
                    </div>
                </div>

                <!-- Reading Time -->
                <div>
                    <label class="block text-sm font-medium mb-2">Reading Time (minutes) *</label>
                    <base-input v-model.number="formData.readTime" type="number" placeHolder="e.g., 5" />
                    <p v-if="errors.readTime" class="text-red-500 text-sm mt-1">{{ errors.readTime }}</p>
                </div>

                <!-- Error Message -->
                <div v-if="displayError"
                    class="bg-red-500/10 border border-red-500 rounded-md p-3 text-red-500 text-sm">
                    {{ displayError }}
                </div>

                <!-- Buttons -->
                <div class="flex gap-3 pt-4">
                    <base-btn @click="closeModal" :disabled="props.isSaving"
                        class="flex-1 p-2 !bg-transparent !border-primary !text-primary hover:!bg-primary/10">
                        Cancel
                    </base-btn>
                    <base-btn type="submit" :disabled="props.isSaving" class="flex-1 p-2">
                        {{ submitLabel }}
                    </base-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseBtn from './BaseBtn.vue';
import type { Note } from '../services/notesService';

interface Props {
    isOpen: boolean;
    note?: Note | null;
    mode: 'create' | 'edit';
    isSaving?: boolean;
    error?: string | null;
}

interface Emits {
    (e: 'close'): void;
    (e: 'save', data: any): void;
}

const props = withDefaults(defineProps<Props>(), {
    note: null,
    isSaving: false,
    error: null,
});

const emit = defineEmits<Emits>();

const formData = ref({
    title: '',
    content: '',
    readTime: 1,
});

const errors = ref({
    title: '',
    content: '',
    img: '',
    readTime: '',
});

const selectedImage = ref<File | null>(null);
const imagePreview = ref('');
const imageInput = ref<HTMLInputElement | null>(null);
const previewObjectUrl = ref('');
const submitError = ref('');

const displayError = computed(() => submitError.value || props.error || '');
const imageLabel = computed(() => props.mode === 'create' ? 'Image *' : 'Image');
const submitLabel = computed(() => {
    if (props.isSaving)
        return props.mode === 'create' ? 'Creating...' : 'Updating...';

    return props.mode === 'create' ? 'Create' : 'Update';
});

watch(
    () => [props.isOpen, props.mode, props.note] as const,
    ([isOpen]) => {
        if (!isOpen)
            return;

        if (props.mode === 'create') {
            resetForm();
            return;
        }

        if (props.note)
            populateForm(props.note);
    },
    { immediate: true }
);

onUnmounted(() => {
    clearPreviewObjectUrl();
});

function populateForm(note: Note) {
    formData.value = {
        title: note.title,
        content: note.content,
        readTime: note.readTime,
    };

    selectedImage.value = null;
    setImagePreview(note.imgURL);
    resetFileInput();
    clearErrors();
}

function resetForm() {
    formData.value = {
        title: '',
        content: '',
        readTime: 1,
    };

    selectedImage.value = null;
    setImagePreview('');
    resetFileInput();
    clearErrors();
}

function clearErrors() {
    errors.value = {
        title: '',
        content: '',
        img: '',
        readTime: '',
    };
    submitError.value = '';
}

function resetFileInput() {
    if (imageInput.value) {
        imageInput.value.value = '';
    }
}

function clearPreviewObjectUrl() {
    if (previewObjectUrl.value) {
        URL.revokeObjectURL(previewObjectUrl.value);
        previewObjectUrl.value = '';
    }
}

function setImagePreview(url: string) {
    clearPreviewObjectUrl();
    imagePreview.value = url;
}

function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
        return;
    }

    selectedImage.value = file;
    clearPreviewObjectUrl();
    previewObjectUrl.value = URL.createObjectURL(file);
    imagePreview.value = previewObjectUrl.value;
    errors.value.img = '';
    submitError.value = '';
}

function validateForm() {
    clearErrors();

    if (!formData.value.title || formData.value.title.trim() === '') {
        errors.value.title = 'Title is required';
    }

    if (!formData.value.content || formData.value.content.trim() === '') {
        errors.value.content = 'Content is required';
    }

    if (props.mode === 'create' && !selectedImage.value) {
        errors.value.img = 'Image is required';
    }

    if (!formData.value.readTime || formData.value.readTime < 1) {
        errors.value.readTime = 'Reading time must be at least 1 minute';
    }

    return !Object.values(errors.value).some(err => err);
}

function handleSubmit() {
    if (!validateForm()) {
        return;
    }

    const title = formData.value.title.trim();
    const content = formData.value.content;
    const readTime = formData.value.readTime;

    if (props.mode === 'create') {
        if (!selectedImage.value) {
            errors.value.img = 'Image is required';
            return;
        }

        emit('save', {
            title,
            content,
            readTime,
            img: selectedImage.value,
        });
        return;
    }

    if (!props.note) {
        submitError.value = 'No note selected for editing';
        return;
    }

    const updates: any = {};

    if (title !== props.note.title) {
        updates.title = title;
    }

    if (content !== props.note.content) {
        updates.content = content;
    }

    if (readTime !== props.note.readTime) {
        updates.readTime = readTime;
    }

    if (selectedImage.value) {
        updates.img = selectedImage.value;
    }

    if (Object.keys(updates).length === 0) {
        submitError.value = 'No changes to save';
        return;
    }

    emit('save', updates);
}

function closeModal() {
    if (props.isSaving) {
        return;
    }

    emit('close');
}
</script>
