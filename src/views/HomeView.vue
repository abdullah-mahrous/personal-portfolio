<template>
    <main class="mb-4 sm:mb-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <section class="pt-6 sm:pt-10">
            <div class="flex flex-col-reverse gap-4 xs:gap-6 sm:flex-row sm:items-center md:gap-8 lg:gap-10">

                <div class="w-full sm:w-[60%] lg:w-1/2">
                    <span class="text-primary text-lg sm:text-xl md:text-2xl">
                        Hi, I'm
                    </span>

                    <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mt-4 mb-4">
                        Abdullah<span class="text-primary"> Mahrous</span>
                    </h1>
                    <p class="text-primary text-base sm:text-lg lg:text-xl mb-4">
                        Full-Stack Developer | Vue.js | Node.js | TypeScript | Scalable Applications
                    </p>
                    <p class="text-slate-600 dark:text-offWhite text-base sm:text-lg mb-8 max-w-none lg:max-w-[75%]">
                        I build scalable web applications, focusing on performance, architecture, and user
                        experience — not just making things work, but making them last.
                    </p>

                    <div class="flex flex-col xs:flex-row gap-4 mb-10">
                        <router-link to="/projects" class="w-full sm:w-fit">
                            <base-btn class="w-full sm:min-w-48 lg:min-w-0 lg:w-auto px-5 sm:px-6 py-3.5 sm:py-4">
                                View My Work
                                <MoveRight class="ml-3" />
                            </base-btn>
                        </router-link>

                        <button
                            class="w-full sm:w-fit sm:min-w-48 lg:min-w-0 lg:w-auto cursor-pointer border-2 border-gray-300 dark:border-[#2A2A35] bg-transparent text-lightText dark:text-white text-[14px] font-medium rounded-md dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-gray-400 dark:hover:border-[#3A3B47] transition-colors duration-300 flex justify-center items-center px-5 sm:px-6 py-3.5 sm:py-4"
                            @click="downloadCV">
                            Download CV
                            <Download class="ml-3" />
                        </button>
                    </div>

                    <div class="flex flex-wrap justify-between xs:justify-start gap-4 xs:gap-8 sm:gap-6 mt-6">
                        <github-link class="hero-socials base-border p-4" :icon-size="24" />
                        <linkedin-link class="hero-socials base-border p-4" :icon-size="24" />
                        <facebook-link class="hero-socials base-border p-4" :icon-size="24" />
                        <mail-link class="hero-socials base-border p-4" :icon-size="24" />
                    </div>

                </div>

                <div class="flex justify-center w-full sm:w-[40%] lg:w-1/2 relative mt-2 sm:mt-0">
                    <div
                        class="hero-glow-circles bg-[radial-gradient(circle_at_top_right,rgba(131,21,231,0.18),transparent_45%)]">
                    </div>

                    <div
                        class="hero-glow-circles bg-[radial-gradient(circle_at_bottom_left,rgba(131,21,231,0.18),transparent_45%)]">
                    </div>

                    <div
                        class="relative isolate overflow-visible xs:aspect-3/4 aspect-4/4 w-full max-w-52 sm:max-w-60 md:max-w-[18rem] lg:max-w-sm">
                        <div class="hero-particles -top-5 -left-20 bg-[radial-gradient(#8315e766_1px,transparent_1px)]">
                        </div>

                        <div
                            class="hero-particles -bottom-10 -right-20 bg-[radial-gradient(#8315e766_1px,transparent_1px)]">
                        </div>

                        <img src="@/assets/abdo-photo.jpeg" alt="Profile Picture" loading="lazy"
                            class="object-cover animate-[floatImage_6s_linear_infinite] relative z-10 w-full h-full transform rotate-2 sm:rotate-4 shadow-[0_0_30px_rgba(131,21,231,0.28),0_0_60px_rgba(131,21,231,0.18)] rounded-full xs:rounded-3xl" />
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-15">

                <stats-card title="1.5+" description="Years Of Professional Experience" :large-title="true"
                    class="personal-stats">
                    <span class="icon-glow">
                        <User2 class="text-primary" :size="30" />
                    </span>
                </stats-card>

                <stats-card title="6+" description="Projects Completed" :large-title="true" class="personal-stats">
                    <span class="icon-glow">
                        <FolderGit2 class="text-primary" :size="30" />
                    </span>
                </stats-card>

                <stats-card title="100%" description="Clean & Responsive UI" :large-title="true" class="personal-stats">
                    <span class="icon-glow">
                        <ShieldCheck class="text-primary" :size="30" />
                    </span>
                </stats-card>

                <stats-card title="Strong" description="Problem Solving Skills" :large-title="true"
                    class="personal-stats">
                    <span class="icon-glow">
                        <Lightbulb class="text-primary" :size="30" />
                    </span>
                </stats-card>

            </div>

        </section>

        <home-sections class="mt-16 sm:mt-20" title="My Tech Stack">
            <div
                class="w-full grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 grid-flow-row gap-4 sm:gap-6">
                <tech-card tech-name="Vue.js">
                    <img src="@/assets/logos--vue.svg" alt="vue logo" class="size-12.5">
                </tech-card>

                <tech-card tech-name="Pinia">
                    <img src="@/assets/logos--pinia.svg" alt="pinia logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="JavaScript">
                    <img src="@/assets/logos--javascript.svg" alt="javascript logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="TypeScript">
                    <img src="@/assets/logos--typescript-icon.svg" alt="typescript logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="Node.js">
                    <img src="@/assets/node-logo.svg" alt="node.js logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="Express.js">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-12.5 text-lightText dark:text-current"
                        viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor"
                            d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z" />
                    </svg>

                </tech-card>

                <tech-card tech-name="MongoDB">
                    <img src="@/assets/mongoDB-logo.svg" alt="mongoDB logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="Tailwind CSS">
                    <img src="@/assets/tailwind-logo.svg" alt="tailwind logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="Bootstrap">
                    <img src="@/assets/bootstrap-logo.svg" alt="bootstrap logo" class="size-12.5" />
                </tech-card>

                <tech-card tech-name="Git">
                    <img src="@/assets/git-logo.svg" alt="git logo" class="size-12.5" />
                </tech-card>
            </div>

        </home-sections>

        <home-sections class="mt-16 sm:mt-20" title="Why Work With Me?">
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
            link-text="Projects">
            <div v-if="featuredProjects" class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <project-card v-for="project in featuredProjects" :key="project.id" class="h-full"
                    :img-src="project.imgSrc" :project-name="project.name" :project-summary="project.description"
                    :tags="project.technologies" :project-link="project.link" />
            </div>
        </home-sections>

        <home-sections class="mt-16 sm:mt-20" title="Latest Dev Notes" :has-link="true" route-name="journal"
            link-text="Dev Notes">
            <div v-if="featuredNotes.length > 0"
                class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">

                <router-link v-for="note in featuredNotes" :key="note.id"
                    :to="{ name: 'note', params: { id: note.id } }" class="no-underline cursor-pointer">
                    <note-card class="h-full w-full" :img-src="note.imgURL" :title="note.title" :content="note.content"
                        :creation-date="note.creationDate" :read-time="note.readTime" />
                </router-link>

            </div>
        </home-sections>

        <!-- contact form -->
        <contact-form />
    </main>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { Download, FolderGit2, MoveRight, ShieldCheck, User2, Lightbulb, Zap, Box } from '@lucide/vue';
import { useProjectsStore } from '@/stores/projects';
import { useNotesStore } from '../stores/notes';
import { type Project } from '@/services/projectsService';
import { type Note } from '@/services/notesService';
import BaseBtn from '../components/BaseBtn.vue';
import GithubLink from '../components/GithubLink.vue';
import LinkedinLink from '../components/LinkedinLink.vue';
import FacebookLink from '../components/FacebookLink.vue';
import MailLink from '../components/MailLink.vue';
import StatsCard from '../components/StatsCard.vue';
import HomeSections from '../components/HomeSections.vue';
import TechCard from '../components/TechCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ContactForm from '../components/ContactForm.vue';
import NoteCard from '../components/NoteCard.vue';

const notesStore = useNotesStore();
const projectsStore = useProjectsStore();

let featuredProjects = ref<Project[]>([]);
let featuredNotes = ref<Note[]>([]);

onMounted(async () => {
    // Fetch notes when component mounts
    if (notesStore.notes.length === 0)
        await notesStore.fetchNotes();

    featuredNotes.value = notesStore.fetchFeaturedNotes();

    projectsStore.fetchProjects();
    featuredProjects.value = projectsStore.fetchFeaturedProjects();
});

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1zfS5GM5yTWD1go5zrBTKSoyL32Z600OA/view?usp=drive_link';
    link.download = 'Abdullah_Mahrous_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
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

@keyframes floatImage {
    0% {
        transform: translate3d(0, 0px, 0);
    }

    25% {
        transform: translate3d(0, -10px, 0);
    }

    50% {
        transform: translate3d(0, -16px, 0);
    }

    75% {
        transform: translate3d(0, -10px, 0);
    }

    100% {
        transform: translate3d(0, 0px, 0);
    }
}
</style>
