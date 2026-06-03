import { type Project } from '../services/projectsService';
import { type Note } from '../services/notesService';

// get latest three projects (featured projects)
export function getFeaturedItems(items: Project[] | Note[], count: number = 3): Project[] | Note[] {
    return items
        .sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime())
        .slice(0, count);
}