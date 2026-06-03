import { buildApiUrl } from "./apiConfig";

export type NoteComment = {
    commentId: string;
    noteId: string;
    name: string;
    content: string;
    creationDate: Date;
};

/**
 * Get all comments for a note
 */
export async function getComments(noteId: string): Promise<NoteComment[]> {
    try {
        const response = await fetch(buildApiUrl(`/notes/${noteId}/comments`));

        if (!response.ok) throw new Error('Failed to fetch comments');

        const data = await response.json();

        const comments = data.data.map((comment: any) => ({
            commentId: comment.commentId,
            noteId: comment.noteId,
            name: comment.name,
            content: comment.content,
            creationDate: comment.creationDate,
        }));

        return comments;
    } catch (error) {
        console.error(`Failed to fetch comments for note ${noteId}:`, error);
        return [];
    }
}

/**
 * Create a new comment on a note
 */
export async function createComment(
    noteId: string,
    commentData: Omit<NoteComment, 'commentId' | 'noteId' | 'creationDate'>
): Promise<NoteComment | null> {
    try {
        const response = await fetch(buildApiUrl(`/notes/${noteId}/comments`), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData),
        });

        if (!response.ok) throw new Error('Failed to create comment');

        const data = await response.json();

        const comment = {
            commentId: data.data.commentId,
            noteId: data.data.noteId,
            name: data.data.name,
            content: data.data.content,
            creationDate: data.data.creationDate,
        };

        return comment;
    } catch (error) {
        console.error(`Failed to create comment for note ${noteId}:`, error);
        return null;
    }
}

/**
 * Delete a comment
 */
export async function deleteComment(noteId: string, commentId: string): Promise<boolean> {
    try {
        const response = await fetch(
            buildApiUrl(`/notes/${noteId}/comments/${commentId}`),
            { method: 'DELETE' }
        );

        return response.ok;
    } catch (error) {
        console.error(`Failed to delete comment ${commentId}:`, error);
        return false;
    }
}
