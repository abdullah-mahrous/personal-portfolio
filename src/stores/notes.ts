import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    type Note,
} from '../services/notesService';
import { getFeaturedItems } from '../composables/getFeaturedItem';

export const useNotesStore = defineStore('notes', () => {
    const notes = ref<Note[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    /**
     * Fetch all notes
     */
    const fetchNotes = async () => {
        loading.value = true;
        error.value = null;

        try {
            notes.value = await getNotes();
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch notes';
            notes.value = [];
        } finally {
            loading.value = false;
        }
    };

    /**
     * Fetch note by ID
     */
    const fetchNoteById = async (id: string) => {
        loading.value = true;
        error.value = null;

        try {
            if(notes.value.find(n => n.id === id))
                return notes.value.find(n => n.id === id);
            
            return await getNoteById(id);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch notes';
            notes.value = [];
        } finally {
            loading.value = false;
        }
    };

    /**
     * Fetch featured notes (for homepage)
     */
    const fetchFeaturedNotes = () => {
        loading.value = true;
        error.value = null;

        try {
            return getFeaturedItems(notes.value, 2);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch featured notes';
            return [];
        } finally {
            loading.value = false;
        }
    };

    /**
     * Add a new note
     */
    const addNote = async (noteData: any, token?: string | null) => {
        loading.value = true;
        error.value = null;

        try {
            const newNote = await createNote(noteData, token);

            if (newNote) {
                notes.value.unshift(newNote);
                return newNote;
            }

            throw new Error('Failed to create note');
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to create note';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    /**
     * Update an existing note
     */
    const editNote = async (id: string, updates: any, token?: string | null) => {
        loading.value = true;
        error.value = null;

        try {
            const updated = await updateNote(id, updates, token);

            if (updated) {
                const index = notes.value.findIndex(n => n.id === id);

                if (index !== -1) {
                    notes.value[index] = updated;
                }

                return updated;
            }

            throw new Error('Note not found');
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to update note';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    /**
     * Remove a note
     */
    const removeNote = async (id: string, token?: string | null) => {
        loading.value = true;
        error.value = null;

        try {
            const success = await deleteNote(id, token);

            if (success)
                notes.value = notes.value.filter(n => n.id !== id);
            else
                throw new Error('Note not found');

        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to delete note';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    /**
     * Clear error state
    */
    const clearError = () => error.value = null;

    return {
        notes,
        loading,
        error,
        fetchNotes,
        fetchNoteById,
        addNote,
        editNote,
        removeNote,
        clearError,
        fetchFeaturedNotes,
    };
});
