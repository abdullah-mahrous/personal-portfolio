export type Project = {
    id: number;
    imgSrc: string;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    category?: string; // optional category field
    creationDate: string; // ISO date string
};

// current data container for projects
export const Projects: Project[] = [
    {
        id: 54645,
        imgSrc: '/src/assets/doql-image.png',
        name: 'DoQL - an open-source ERD design app',
        description: 'An open-source desktop app to design ERDs, export SQL for SQLite/MySQL/SQL Server, and securely share password-protected project files.',
        technologies: ['Electron', 'React', 'TypeScript', 'SQLite'],
        link: '',
        category: 'frontend',
        creationDate: '2023-01-01',
    },
    {
        id: 345345345,
        imgSrc: '/src/assets/queue2.png',
        name: 'Clinic Manager - a real-time clinic management SPA',
        description: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
        link: '',
        category: 'frontend',
        creationDate: '2023-02-01',
    },
    {
        id: 455464545645645,
        imgSrc: '/src/assets/queue2.png',
        name: 'Clinic Manager - a real-time clinic management SPA',
        description: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
        link: '',
        category: 'backend',
        creationDate: '2023-02-02',
    },
    {
        id: 4554645456456524,
        imgSrc: '/src/assets/queue2.png',
        name: 'Clinic Manager - a real-time clinic management SPA',
        description: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
        link: '',
        category: 'backend',
        creationDate: '2023-02-03',
    },
    {
        id: 455464545645633,
        imgSrc: '/src/assets/queue2.png',
        name: 'Clinic Manager - a real-time clinic management SPA',
        description: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
        link: '',
        creationDate: '2023-02-04',
    },
    {
        id: 455464545645644,
        imgSrc: '/src/assets/queue2.png',
        name: 'Clinic Manager - a real-time clinic management SPA',
        description: 'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
        link: '',
        category: 'frontend',
        creationDate: '2023-02-05',
    }
]
