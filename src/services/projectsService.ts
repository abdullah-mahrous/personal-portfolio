import IEEEImg from '@/assets/ieee.jpg';
import RecipeHubImg from '@/assets/recipehub.jpg';
import DoQLImg from '@/assets/doql.jpg';
import SalemClinicImg from '@/assets/salem-clinic.jpg';
import ClinicManagerImg from '@/assets/clinic-manager.png';
import TeamsMakerImg from '@/assets/teams-maker.jpg';
import BlogImg from '@/assets/blog.jpg'

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
        id: 111435,
        imgSrc: IEEEImg,
        name: 'IEEE Kafr El Sheikh Branch Website',
        description: 'A responsive and user-friendly website developed for the IEEE Kafr El Sheikh Branch to showcase activities, events, and organizational updates.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        link: 'https://github.com/abdullah-mahrous/IEEE-KSB-Front',
        category: 'frontend',
        creationDate: '2022-06-04',
    },
    {
        id: 245345345,
        imgSrc: RecipeHubImg,
        name: 'RecipeHub',
        description: 'RecipeHub is a web application designed to help users discover, create, and interact with recipes in a social and engaging environment.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        link: 'https://github.com/abdullah-mahrous/Recipehub-project',
        category: 'frontend',
        creationDate: '2022-05-18',
    },
    {
        id: 355464545645645,
        imgSrc: DoQLImg,
        name: 'DoQL',
        description: 'An open-source windows forms application that helps developers to easily design ERD with the ability to export it into SQL commands.',
        technologies: ['Windows Forms', 'C#', 'JSON', 'SQLite', 'MySQL'],
        link: 'https://github.com/abdullah-mahrous/DoQL',
        creationDate: '2023-01-28',
    },
    {
        id: 4554645456456524,
        imgSrc: SalemClinicImg,
        name: 'Salem Center',
        description: 'A website developed for Salem Center, a clinic specializing in physical therapy and nutrition services, providing patients with easy access to clinic information, available services, educational content, and an integrated reservation system for booking appointments.',
        technologies: ['Google Maps API', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        link: 'https://github.com/abdullah-mahrous/salem_clinic_website',
        category: 'frontend',
        creationDate: '2023-07-18',
    },
    {
        id: 555464545645633,
        imgSrc: ClinicManagerImg,
        name: 'Clinic Manager',
        description: 'A scalable SPA designed to streamline clinic operations and centralize the management of patients, sessions, doctors, and staff, used by Salem Center for physical therapy and nutrition services',
        technologies: ['Vue.js', 'Vue Router', 'Vite', 'Web Socket'],
        link: 'https://github.com/abdullah-mahrous/Clinic-Manager-Frontend',
        category: 'frontend',
        creationDate: '2023-10-12',
    },
    {
        id: 655464545645644,
        imgSrc: TeamsMakerImg,
        name: 'Teams Maker',
        description: 'Teams Maker is a platform designed to facilitate teams formation and collaboration for graduation projects, by enabing students to create and join teams, showcase their skills, and manage project workflows from idea submission to final delivery.',
        technologies: ['Vue.js', 'Vue Router', 'Vite', 'Vuetify'],
        link: 'https://github.com/abdullah-mahrous/TeamsMaker-Front-End',
        category: 'frontend',
        creationDate: '2024-06-22',
    },
    {
        id: 655464545645632,
        imgSrc: BlogImg,
        name: 'Blogging Platform API',
        description: 'A secure blogging platform RESTful API with JWT authentication, protected CRUD operations, ownership-based authorization, and MongoDB persistence. Applied modern backend practices including TypeScript, Zod validation, Swagger/OpenAPI documentation, and security middleware (Helmet, CORS, Mongo Sanitize).',
        technologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Zod', 'Swagger', 'Helmet', 'Mongo Sanitize'],
        link: 'https://github.com/abdullah-mahrous/metasoftware-task',
        category: 'backend',
        creationDate: '2026-06-15',
    }
]
