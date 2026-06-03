import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Project, Projects } from '../services/projectsService';
import { getFeaturedItems } from '../composables/getFeaturedItem';

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref<Project[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    /**
     * Fetch all projects
     */
    const fetchProjects = () => {
        loading.value = true;
        error.value = null;

        try {
            projects.value = Projects;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch projects';
            projects.value = [];
        } finally {
            loading.value = false;
        }
    };
    

    /**
     * Fetch featured projects (for homepage)
     */
    const fetchFeaturedProjects = () => {
        loading.value = true;
        error.value = null;

        try {
            return getFeaturedItems(projects.value);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to fetch featured projects';
            return [];
        } finally {
            loading.value = false;
        }
    };

    return {
        projects,
        loading,
        error,
        fetchProjects,
        fetchFeaturedProjects,
    };
});
