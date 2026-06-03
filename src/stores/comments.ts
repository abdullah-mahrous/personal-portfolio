import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getComments, createComment, deleteComment, type NoteComment } from '../services/commentsService';

export const useCommentsStore = defineStore('comments', () => {
    const comments = ref<NoteComment[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    /**
     * Fetch all comments for a specific note
     */
    const fetchComments = async (noteId: string) => {
        loading.value = true;
        error.value = null;

        try {
            comments.value = await getComments(noteId);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch comments';
        } finally {
            loading.value = false;
        }
    };

    /**
     * Add a new comment to a note
     */
    const addComment = async (noteId: string, commentData: Omit<NoteComment, 'commentId' | 'noteId' | 'creationDate'>) => {
        loading.value = true;
        error.value = null;

        try {
            const newComment = await createComment(noteId, commentData);

            if (newComment) {
                comments.value.unshift(newComment);
                return newComment;
            }

            throw new Error('Failed to create comment');
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to create comment';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    /**
     * Remove a comment
     */
    const removeComment = async (noteId: string, commentId: string) => {
        loading.value = true;
        error.value = null;

        try {
            const success = await deleteComment(noteId, commentId);

            if (success) {
                comments.value = comments.value.filter(
                    c => c.commentId !== commentId
                );
            } else {
                throw new Error('Comment not found');
            }
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to delete comment';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    /**
     * Clear error state
     */
    const clearError = () => {
        error.value = null;
    };

    return {
        comments,
        loading,
        error,
        fetchComments,
        addComment,
        removeComment,
        clearError,
    };
});
