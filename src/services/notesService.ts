export type Note = {
    id: number;
    imgSrc: string;
    title: string;
    content: string;
    creationDate: string;
    readingTime: number;
    comments: NoteComment[];
};

export type NoteComment = {
    id: number;
    name: string;
    comment: string;
    date: string;
};

const NOTES_STORAGE_KEY = 'notes';

// Seed data for initial notes
const seedNotes: Note[] = [
    {
        id: 1,
        imgSrc: '/src/assets/doql-image.png',
        title: 'an in-depth look at DoQL: the open-source ERD design app',
        content: 'An open-source desktop app to design ERDs, export SQL for SQLite/MySQL/SQL Server, and securely share password-protected project files. This note covers the architectural decisions, tech stack, and development process behind DoQL, highlighting key features and challenges overcome during its creation. Whether you\'re interested in desktop app development, database design, or just want to see how DoQL was built, this note provides an in-depth look at the project from start to finish. <br><br>Key topics covered include: <br>- The motivation behind creating DoQL and the problem it solves <br>- The tech stack chosen for the project and why <br>- Architectural decisions and how they shaped the app\'s design <br>- Challenges faced during development and how they were overcome <br>- A walkthrough of the app\'s key features and functionality <br><br>Whether you\'re a developer looking to learn from DoQL\'s development process or just curious about how it works, this note provides a comprehensive overview of the project and its journey from idea to open-source release.',
        creationDate: '2023-01-01',
        readingTime: 5,
        comments: [],
    },
    {
        id: 2,
        imgSrc: '/src/assets/queue2.png',
        title: 'a look at Clinic Manager - the real-time clinic management SPA',
        content: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        creationDate: '2023-02-01',
        readingTime: 7,
        comments: [],
    },
    {
        id: 3,
        imgSrc: '/src/assets/teamsmaker-img.png',
        title: 'Teams Maker - a collaboration platform for balanced graduation-project teams',
        content: 'A collaboration platform that helps students create balanced graduation-project teams and coordinate assignments in one place.',
        creationDate: '2023-03-01',
        readingTime: 6,
        comments: [],
    },
    {
        id: 4,
        imgSrc: '/src/assets/original-portfolio.png',
        title: 'Portfolio Website - a personal portfolio focused on clean UX and responsive layouts',
        content: 'A personal portfolio focused on clean UX, responsive layouts, and showcasing case studies with reusable component architecture.',
        creationDate: '2023-04-01',
        readingTime: 8,
        comments: [],
    },
    {
        id: 5,
        imgSrc: '/src/assets/doql-image.png',
        title: 'Auth & Roles API',
        content: 'A role-based authentication API with JWT, account security flows, and scalable module structure for production-ready apps.',
        creationDate: '2023-05-01',
        readingTime: 9,
        comments: [],
    },
    {
        id: 6,
        imgSrc: '/src/assets/queue2.png',
        title: 'Realtime Notifications Service',
        content: 'A backend service for pub/sub notifications and event delivery with resilient queue handling and modular transport adapters.',
        creationDate: '2023-06-01',
        readingTime: 10,
        comments: [],
    },
];

/**
 * Initialize localStorage with seed notes if empty
 */
function initializeStorage() {
    const stored = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(seedNotes));
    }
}

/**
 * Get all notes from storage
 */
export function getNotes(): Note[] {
    initializeStorage();
    const stored = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch {
        console.error('Failed to parse notes from localStorage');
        return [];
    }
}

/**
 * Get a single note by ID
 */
export function getNoteById(id: number): Note | null {
    const notes = getNotes();
    return notes.find(note => note.id === id) || null;
}

/**
 * Create a new note
 */
export function createNote(note: Omit<Note, 'id'>): Note {
    const notes = getNotes();
    const newNote: Note = {
        ...note,
        id: Math.max(...notes.map(n => n.id), 0) + 1,
    };
    notes.push(newNote);
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    return newNote;
}

/**
 * Update an existing note
 */
export function updateNote(id: number, updates: Partial<Omit<Note, 'id'>>): Note | null {
    const notes = getNotes();
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) return null;
    
    notes[index] = { ...notes[index], ...updates };
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    return notes[index];
}

/**
 * Delete a note by ID
 */
export function deleteNote(id: number): boolean {
    const notes = getNotes();
    const filtered = notes.filter(note => note.id !== id);
    if (filtered.length === notes.length) return false; // Not found
    
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(filtered));
    return true;
}
