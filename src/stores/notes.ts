import { defineStore } from 'pinia';
import { getNotes, createNote, updateNote, deleteNote, type Note } from '../services/notesService';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        notes: [] as Note[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        /**
         * Fetch all notes from the service
         */
        fetchNotes() {
            this.loading = true;
            this.error = null;
            try {
                this.notes = getNotes();
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to fetch notes';
                this.notes = [];
            } finally {
                this.loading = false;
            }
        },

        /**
         * Add a new note
         */
        addNote(noteData: Omit<Note, 'id'>) {
            this.loading = true;
            this.error = null;
            try {
                const newNote = createNote(noteData);
                this.notes.push(newNote);
                return newNote;
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to create note';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update an existing note
         */
        editNote(id: number, updates: Partial<Omit<Note, 'id'>>) {
            this.loading = true;
            this.error = null;
            try {
                const updated = updateNote(id, updates);
                if (updated) {
                    const index = this.notes.findIndex(n => n.id === id);
                    if (index !== -1) {
                        this.notes[index] = updated;
                    }
                    return updated;
                } else {
                    throw new Error('Note not found');
                }
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to update note';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Remove a note
         */
        removeNote(id: number) {
            this.loading = true;
            this.error = null;
            try {
                const success = deleteNote(id);
                if (success) {
                    this.notes = this.notes.filter(n => n.id !== id);
                } else {
                    throw new Error('Note not found');
                }
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to delete note';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Clear error state
         */
        clearError() {
            this.error = null;
        },
    },
});
