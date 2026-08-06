<template>
    <main class="mb-4 sm:mb-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">

        <hero-section />

        <home-sections class="mt-16 sm:mt-20" title="My Tech Stack">
            <div data-stagger
                class="w-full grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 grid-flow-row gap-4 sm:gap-6">

                <tech-card v-for="tech in techStack" :key="tech.name" :tech-name="tech.name">
                    <img :src="tech.imgSrc" :alt="`${tech.name} logo`" class="size-12.5">
                </tech-card>

            </div>
        </home-sections>

        <home-sections class="mt-16 sm:mt-20" title="Why Work With Me?" data-reveal data-animation="right">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

                <stats-card title="Real-time Expertise" :large-title="false"
                    description="Experienced in building real-time applications using Socket.IO and MQTT."
                    class="py-6 px-5 sm:py-8 sm:px-8">

                    <div class="flex items-start">
                        <span class="icon-glow">
                            <Zap :size="30" class="text-primary" />
                        </span>
                    </div>

                </stats-card>

                <stats-card title="Performance Focused" :large-title="false"
                    description="I optimize applications for maximum performance and best user experience."
                    class="py-6 px-5 sm:py-8 sm:px-8">

                    <div class="flex items-start">
                        <span class="icon-glow">
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-7.5 text-primary" viewBox="0 0 24 24">
                                <defs>
                                    <mask id="SVG5ueHvd5w">
                                        <path fill="none" stroke="#fff" stroke-dasharray="56" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s"
                                                values="56;0" />
                                        </path>
                                        <path d="M12 14c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0Z"
                                            transform="rotate(-100 12 14)">
                                            <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s"
                                                to="M16 14c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 4 -14 4 -14c0 0 4 11.79 4 14Z" />
                                            <animateTransform fill="freeze" attributeName="transform" begin="1s"
                                                dur="0.5s" type="rotate" values="-100 12 14;45 12 14" />
                                        </path>
                                    </mask>
                                </defs>
                                <g fill="currentColor">
                                    <path d="M0 0h24v24H0z" mask="url(#SVG5ueHvd5w)" />
                                    <path
                                        d="M14 14c0 1.1 -0.9 2 -2 2c-1.1 0 -2 -0.9 -2 -2c0 -1.1 2 -10 2 -10c0 0 2 8.9 2 10Z"
                                        opacity="0" transform="rotate(-100 12 14)">
                                        <set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
                                        <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.4s"
                                            values="M12 14c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 14c0 1.1 -0.9 2 -2 2c-1.1 0 -2 -0.9 -2 -2c0 -1.1 2 -10 2 -10c0 0 2 8.9 2 10Z" />
                                        <animateTransform fill="freeze" attributeName="transform" begin="1s" dur="0.5s"
                                            type="rotate" values="-100 12 14;45 12 14" />
                                    </path>
                                </g>
                            </svg>
                        </span>
                    </div>

                </stats-card>

                <stats-card title="Clean Architecture" :large-title="false"
                    description="I write clean, scalable and maintainable code following best practices."
                    class="py-6 px-5 sm:py-8 sm:px-8">

                    <div class="flex items-start">
                        <span class="icon-glow">
                            <Box :size="30" class="text-primary" />
                        </span>
                    </div>

                </stats-card>
            </div>

        </home-sections>

        <home-sections class="mt-16 sm:mt-20" title="Featured Projects" :has-link="true" route-name="projects"
            link-text="Projects" data-reveal data-animation="left">

            <div v-if="featuredProjects" class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                <project-card v-for="project in featuredProjects" :key="project.id" class="h-full"
                    :img-src="project.imgSrc" :project-name="project.name" :project-summary="project.description"
                    :tags="project.technologies" :project-link="project.link" />

            </div>

        </home-sections>

        <home-sections class="mt-16 sm:mt-20" title="Latest Dev Notes" :has-link="true" route-name="journal"
            link-text="Dev Notes" data-reveal data-animation="right">

            <div v-if="featuredNotes.length > 0"
                class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">

                <router-link v-for="note in featuredNotes" :key="note.id"
                    :to="{ name: 'note', params: { id: note.id } }" class="no-underline cursor-pointer">

                    <note-card class="h-full w-full" :img-src="note.imgURL" :title="note.title" :content="note.content"
                        :creation-date="formatDate(note.creationDate)" :read-time="note.readTime" />

                </router-link>

            </div>

        </home-sections>

        <!-- contact form -->
        <contact-form data-reveal data-animation="left" />
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useProjectsStore } from '../stores/projects';
import { useNotesStore } from '../stores/notes';
import { formatDate } from '../composables/dateFormater';
import { scrollReveal } from '../composables/scrollAnimation';

import HomeSections from '../components/home/HomeSections.vue';
import TechCard from '../components/home/TechCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ContactForm from '../components/home/ContactForm.vue';
import NoteCard from '../components/notes/NoteCard.vue';
import HeroSection from '../components/home/HeroSection.vue';
import StatsCard from '../components/home/StatsCard.vue';
import { Zap, Box } from '@lucide/vue';

// technology stack icons
import VueLogo from '@/assets/icons/logos--vue.svg';
import PiniaLogo from '@/assets/icons/logos--pinia.svg';
import ReactLogo from '@/assets/icons/logos--react.svg';
import ReduxLogo from '@/assets/icons/logos--redux.svg';
import JavaScriptLogo from '@/assets/icons/logos--javascript.svg';
import TypeScriptLogo from '@/assets/icons/logos--typescript-icon.svg';
import NodeLogo from '@/assets/icons/node-logo.svg';
import ExpressLogo from '@/assets/icons/express-logo.svg';
import MongoDBLogo from '@/assets/icons/mongoDB-logo.svg';
import PostgreSQLLogo from '@/assets/icons/logos--postgresql.svg';
import MySQLLogo from '@/assets/icons/logos--mysql.svg';
import TailwindLogo from '@/assets/icons/tailwind-logo.svg';
import BootstrapLogo from '@/assets/icons/bootstrap-logo.svg';
import GitLogo from '@/assets/icons/git-logo.svg';
import ViteLogo from '@/assets/icons/vite-logo.svg';
import VitestLogo from '@/assets/icons/vitest-logo.svg';
import JestLogo from '@/assets/icons/jest-logo.svg';

const techStack = [
    { name: 'Vue.js', imgSrc: VueLogo },
    { name: 'Pinia', imgSrc: PiniaLogo },
    { name: 'React.js', imgSrc: ReactLogo },
    { name: 'Redux Toolkit', imgSrc: ReduxLogo },
    { name: 'JavaScript', imgSrc: JavaScriptLogo },
    { name: 'TypeScript', imgSrc: TypeScriptLogo },
    { name: 'Node.js', imgSrc: NodeLogo },
    { name: 'Express.js', imgSrc: ExpressLogo },
    { name: 'MongoDB', imgSrc: MongoDBLogo },
    { name: 'PostgreSQL', imgSrc: PostgreSQLLogo },
    { name: 'MySQL', imgSrc: MySQLLogo },
    { name: 'Tailwind CSS', imgSrc: TailwindLogo },
    { name: 'Bootstrap', imgSrc: BootstrapLogo },
    { name: 'Git', imgSrc: GitLogo },
    { name: 'Vite', imgSrc: ViteLogo },
    { name: 'Vitest', imgSrc: VitestLogo },
    { name: 'Jest', imgSrc: JestLogo }
];

const notesStore = useNotesStore();
const projectsStore = useProjectsStore();

let featuredProjects = ref<any>([]);
let featuredNotes = ref<any>([]);

onMounted(async () => {
    scrollReveal();

    // Fetch notes when component mounts
    if (notesStore.notes.length === 0)
        await notesStore.fetchNotes();

    featuredNotes.value = notesStore.fetchFeaturedNotes();

    projectsStore.fetchProjects();
    featuredProjects.value = projectsStore.fetchFeaturedProjects();
});
</script>

<style>
@keyframes float {
    0% {
        transform: translateY(0px);
        opacity: 1;
    }

    50% {
        transform: translateY(-20px);
        opacity: 0.7;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>
