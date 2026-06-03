import { type NoteComment } from "./commentsService";
import { apiCall } from "./apiConfig";

export type Note = {
    id: string;
    imgURL: string;
    imgId: string;
    title: string;
    content: string;
    creationDate: Date;
    readTime: number;
    comments: NoteComment[];
};

function normalizeNote(note: any): Note {
    return {
        id: note._id,
        imgURL: note.imgURL ?? '',
        imgId: note.imgId,
        title: note.title,
        content: note.content,
        creationDate: note.creationDate,
        readTime: Number(note.readTime),
        comments: note.comments.map((comment: any) => ({
                    commentId: comment.commentId,
                    noteId: note._id,
                    name: comment.name,
                    content: comment.content,
                    creationDate: comment.creationDate,
                })) 
    };
}

function buildNoteFormData(noteData: any): FormData {
    const formData = new FormData();

    if (noteData.title !== undefined) {
        formData.append('title', noteData.title);
    }

    if (noteData.content !== undefined) {
        formData.append('content', noteData.content);
    }

    if (noteData.readTime !== undefined) {
        formData.append('readTime', String(noteData.readTime));
    }

    if (noteData.img) {
        formData.append('image', noteData.img);
    }

    return formData;
}

/**
 * Get all notes from API
 */
export async function getNotes(): Promise<Note[]> {
    try {
        const response = await apiCall('/notes');

        if (!response.ok) throw new Error('Failed to fetch notes');

        const data = await response.json();
        const notes = data.data.map((note: any) => normalizeNote(note));  

        return notes;

    } catch (error) {
        console.error('Failed to fetch notes:', error);
        return [];
    }
}

/**
 * Get a single note by ID
 */
export async function getNoteById(id: string): Promise<Note | null> {
    try {
        const response = await apiCall(`/notes/${id}`);

        if (!response.ok) return null;

        const data = await response.json();
        const note = normalizeNote(data.data);

        return note;
    } catch (error) {
        console.error(`Failed to fetch note ${id}:`, error);
        return null;
    }
}

/**
 * Create a new note
 */
export async function createNote(note: any, token?: string | null): Promise<Note | null> {
    try {
        const response = await apiCall('/notes', {
            method: 'POST',
            body: buildNoteFormData(note),
            token: token || undefined,
        });

        if (!response.ok) throw new Error('Failed to create note');

        const data = await response.json();
        return normalizeNote(data.data);
    } catch (error) {
        console.error('Failed to create note:', error);
        return null;
    }
}

/**
 * Update an existing note
 */
export async function updateNote(id: string, updates: any, token?: string | null): Promise<Note | null> {
    try {
        const response = await apiCall(`/notes/${id}`, {
            method: 'PUT',
            body: buildNoteFormData(updates),
            token: token || undefined,
        });

        if (!response.ok) return null;

        const data = await response.json();
        return normalizeNote(data.data);
    } catch (error) {
        console.error(`Failed to update note ${id}:`, error);
        return null;
    }
}

/**
 * Delete a note by ID
 */
export async function deleteNote(id: string, token?: string | null): Promise<boolean> {
    try {
        const response = await apiCall(`/notes/${id}`, {
            method: 'DELETE',
            token: token || undefined,
        });

        return response.ok;
    } catch (error) {
        console.error(`Failed to delete note ${id}:`, error);
        return false;
    }
}
