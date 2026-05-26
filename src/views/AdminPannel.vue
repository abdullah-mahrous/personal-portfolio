<template>
    <main class="my-6 sm:my-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-4xl sm:text-5xl font-bold">
                Manage <span class="text-primary">Notes</span>
            </h1>
            <base-btn @click="openCreateModal" class="p-2 text-sm font-medium">
                Create Note
            </base-btn>
        </div>

        <!-- Loading State -->
        <div v-if="notesStore.loading" class="text-center py-12">
            <p class="text-slate-600 dark:text-offWhite">Loading notes...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="notesStore.error" class="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
            <p class="text-red-500">{{ notesStore.error }}</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="notesStore.notes.length === 0" class="text-center py-12">
            <p class="text-slate-600 dark:text-offWhite text-lg mb-4">No notes yet. Create your first one!</p>
        </div>

        <!-- Notes Table -->
        <div v-else class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="border-b border-primary/20">
                        <th class="text-left py-4 px-4 font-semibold">Title</th>
                        <th class="text-left py-4 px-4 font-semibold hidden sm:table-cell">Created</th>
                        <th class="text-left py-4 px-4 font-semibold hidden sm:table-cell">Reading Time</th>
                        <th class="text-right py-4 px-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="note in notesStore.notes" :key="note.id"
                        class="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                        <td class="py-4 px-4">
                            <div class="truncate">
                                <p class="font-medium truncate">{{ note.title }}</p>
                                <p class="text-slate-600 dark:text-offWhite text-sm truncate sm:hidden">
                                    {{ formatDate(note.creationDate) }}
                                </p>
                            </div>
                        </td>
                        <td class="py-4 px-4 text-slate-500 dark:text-offWhite hidden sm:table-cell">
                            {{ formatDate(note.creationDate) }}
                        </td>
                        <td class="py-4 px-4 text-slate-500 dark:text-offWhite hidden sm:table-cell">
                            {{ note.readingTime }} min
                        </td>
                        <td class="py-4 px-4 text-right">
                            <div class="flex justify-end gap-2">
                                <button @click="openEditModal(note)"
                                    class="px-3 py-1 text-sm font-medium text-primary border border-primary rounded hover:bg-primary/10 transition-colors cursor-pointer">
                                    Edit
                                </button>
                                <button @click="openDeleteModal(note)"
                                    class="px-3 py-1 text-sm font-medium text-red-500 border border-red-500 rounded hover:bg-red-500/10 transition-colors cursor-pointer">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

    <!-- Modals -->
    <note-form-modal :isOpen="activeModal === 'form'" :note="selectedNote" :mode="formMode" @close="closeModal"
        @save="handleSaveNote" />

    <note-delete-confirm-modal :isOpen="activeModal === 'delete'" :noteName="selectedNote?.title || ''"
        @confirm="handleDeleteNote" @cancel="closeModal" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNotesStore } from '../stores/notes';
import BaseBtn from '../components/BaseBtn.vue';
import NoteFormModal from '../components/NoteFormModal.vue';
import NoteDeleteConfirmModal from '../components/NoteDeleteConfirmModal.vue';
import type { Note } from '../services/notesService';

const notesStore = useNotesStore();

type ModalType = null | 'form' | 'delete';
type FormMode = 'create' | 'edit';

const activeModal = ref<ModalType>(null);
const formMode = ref<FormMode>('create');
const selectedNote = ref<Note | null>(null);

onMounted(() => {
    // Fetch notes when component mounts
    notesStore.fetchNotes();
});

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

function openCreateModal() {
    formMode.value = 'create';
    selectedNote.value = null;
    activeModal.value = 'form';
}

function openEditModal(note: Note) {
    formMode.value = 'edit';
    selectedNote.value = note;
    activeModal.value = 'form';
}

function openDeleteModal(note: Note) {
    selectedNote.value = note;
    activeModal.value = 'delete';
}

function closeModal() {
    activeModal.value = null;
    selectedNote.value = null;
}

function handleSaveNote(noteData: Omit<Note, 'id'>) {
    try {
        if (formMode.value === 'create') {
            notesStore.addNote(noteData);
        } else if (selectedNote.value) {
            notesStore.editNote(selectedNote.value.id, noteData);
        }
        closeModal();
    } catch (err) {
        console.error('Failed to save note:', err);
    }
}

function handleDeleteNote() {
    if (selectedNote.value) {
        try {
            notesStore.removeNote(selectedNote.value.id);
            closeModal();
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    }
}
</script>
