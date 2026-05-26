<template>
    <main class="my-6 sm:my-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <h1 class="mb-5 font-bold text-4xl sm:text-5xl">
            Projects
        </h1>
        <p class="text-slate-600 dark:text-offWhite mb-8 text-base sm:text-lg">
            Things I've built so far
        </p>

        <!-- filter projects btns -->
        <div class="flex flex-wrap items-center gap-3">
            <button v-for="option in filterOptions" :key="option.value" type="button" class="base-tabs base-border"
                :class="activeFilter === option.value ? 'filter-btn-active' : ''"
                :aria-pressed="activeFilter === option.value" @click="setFilter(option.value)">
                {{ option.label }}
            </button>
        </div>

        <!-- project-cards -->
        <TransitionGroup name="projects" tag="div"
            class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div v-for="(project, index) in filteredProjects" :key="project.id" class="origin-[center_top] h-full"
                :style="getDelayStyle(index)">
                <project-card class="h-full" :img-src="project.imgSrc" :project-name="project.projectName"
                    :project-summary="project.projectSummary" :tags="project.tags"
                    :project-link="project.projectLink" />
            </div>
        </TransitionGroup>

        <!-- cta banner -->
        <section
            class="mt-10 mb-12 rounded-xl base-border bg-white dark:bg-[linear-gradient(135deg,#10111800_0%,#0D0E14_100%)] dark:bg-darkCard px-5 py-4 md:px-7 md:py-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between relative overflow-hidden">
            <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_45%,rgba(131,21,231,0.20),transparent_30%)]">
            </div>

            <div class="flex items-center sm:items-center gap-4 relative z-10">
                <div
                    class="p-2 rounded-xl border border-gray-200 dark:border-[#2A2742] bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-[linear-gradient(145deg,#171427,#0E0D17)] shadow-[inset_0_0_20px_rgba(131,21,231,0.23),0_0_22px_rgba(131,21,231,0.12)] flex items-center justify-center">

                    <svg viewBox="0 0 24 24" fill="none" class="w-14 h-14">
                        <path d="M12 3L19 7V17L12 21L5 17V7L12 3Z" stroke="#9D4DFF" stroke-width="1.2"
                            stroke-linejoin="round" />
                        <path d="M12 3V21" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round" />
                        <path d="M5 7L12 11L19 7" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </div>

                <div>
                    <h3 class="text-lightText dark:text-white text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                        Have an idea in
                        mind?</h3>
                    <p class="text-slate-600 dark:text-offWhite mt-1 xs:text-lg">Let's turn it into a real product.</p>
                </div>
            </div>

            <base-btn class="relative z-10 w-full sm:w-auto px-7 py-3 border-0! shadow-[0_0_20px_rgba(131,21,231,0.35)]"
                @click="handleHomeScroll(scrollToContact)">
                Contact Me
                <MoveRight class="ml-2" :size="18" />
            </base-btn>
        </section>

    </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { MoveRight } from '@lucide/vue';
import { scrollToContact, handleHomeScroll } from '../services/scrollService';
import BaseBtn from '../components/BaseBtn.vue';
import ProjectCard from '../components/ProjectCard.vue';

type ProjectCategory = 'frontend' | 'backend';
type ProjectFilter = 'all' | ProjectCategory;

type ProjectItem = {
    id: number;
    imgSrc: string;
    projectName: string;
    projectSummary: string;
    tags: string[];
    projectLink: string;
    category: ProjectCategory;
};

const filterOptions: { label: string; value: ProjectFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Front-End', value: 'frontend' },
    { label: 'Back-End', value: 'backend' },
];

const projects: ProjectItem[] = [
    {
        id: 1,
        imgSrc: '/src/assets/doql-image.png',
        projectName: 'DoQL',
        projectSummary:
            'An open-source desktop app to design ERDs, export SQL for SQLite/MySQL/SQL Server, and securely share password-protected project files.',
        tags: ['Windows Forms', 'C#', 'SQLite', 'MySQL', 'SQL Server'],
        projectLink: 'https://github.com/abdullah-mahrous/DoQL',
        category: 'backend',
    },
    {
        id: 2,
        imgSrc: '/src/assets/queue2.png',
        projectName: 'Clinic Manager',
        projectSummary:
            'A real-time SPA that centralizes clinic workflows for managing patients, sessions, doctors, and staff with responsive interfaces.',
        tags: ['Vue.js', 'Socket.IO', 'Vite'],
        projectLink: 'https://github.com/abdullah-mahrous/Clinic-Manager-Frontend',
        category: 'frontend',
    },
    {
        id: 3,
        imgSrc: '/src/assets/teamsmaker-img.png',
        projectName: 'Teams Maker',
        projectSummary:
            'A collaboration platform that helps students create balanced graduation-project teams and coordinate assignments in one place.',
        tags: ['Vue3', 'Vuetify', 'Vite'],
        projectLink: 'https://github.com/abdullah-mahrous/TeamsMaker-Front-End',
        category: 'frontend',
    },
    {
        id: 4,
        imgSrc: '/src/assets/original-portfolio.png',
        projectName: 'Portfolio Website',
        projectSummary:
            'A personal portfolio focused on clean UX, responsive layouts, and showcasing case studies with reusable component architecture.',
        tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
        projectLink: 'https://github.com/abdullah-mahrous',
        category: 'frontend',
    },
    {
        id: 5,
        imgSrc: '/src/assets/doql-image.png',
        projectName: 'Auth & Roles API',
        projectSummary:
            'A role-based authentication API with JWT, account security flows, and scalable module structure for production-ready apps.',
        tags: ['Node.js', 'Express.js', 'MongoDB'],
        projectLink: 'https://github.com/abdullah-mahrous',
        category: 'backend',
    },
    {
        id: 6,
        imgSrc: '/src/assets/queue2.png',
        projectName: 'Realtime Notifications Service',
        projectSummary:
            'A backend service for pub/sub notifications and event delivery with resilient queue handling and modular transport adapters.',
        tags: ['Node.js', 'Socket.IO', 'TypeScript'],
        projectLink: 'https://github.com/abdullah-mahrous',
        category: 'backend',
    },
];

const activeFilter = ref<ProjectFilter>('all');

const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
        return projects;
    }

    return projects.filter((project) => project.category === activeFilter.value);
});

const setFilter = (filter: ProjectFilter) => {
    activeFilter.value = filter;
};

const getDelayStyle = (index: number): Record<string, string> => ({
    '--stagger-delay': `${index * 55}ms`,
});
</script>

<style>
.filter-btn-active,
.filter-btn-active:hover {
    background-color: var(--color-primary);
    border: none !important;
    color: #fff;
}

.projects-enter-active,
.projects-leave-active {
    transition:
        opacity 280ms ease,
        transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--stagger-delay, 0ms);
    will-change: opacity, transform;
}

.projects-enter-from,
.projects-leave-to {
    opacity: 0;
    transform: translateY(14px) scale(0.96);
}

.projects-enter-to,
.projects-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.projects-move {
    transition: transform 340ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (prefers-reduced-motion: reduce) {

    .projects-enter-active,
    .projects-leave-active,
    .projects-move {
        transition-duration: 1ms;
        transition-delay: 0ms;
    }
}
</style>
