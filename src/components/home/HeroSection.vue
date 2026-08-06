<template>
    <section class="pt-6 sm:pt-10">
        <div class="flex flex-col-reverse gap-4 xs:gap-6 sm:flex-row sm:items-center md:gap-8 lg:gap-10">

            <div class="w-full sm:w-[60%] lg:w-1/2">
                <span class="text-primary text-lg sm:text-xl md:text-2xl" data-hero-greeting>
                    Hi, I'm
                </span>

                <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mt-4 mb-4"
                    data-hero-name>
                    Abdullah<span class="text-primary"> Mahrous</span>
                </h1>
                <p class="text-primary text-base sm:text-lg lg:text-xl mb-4" data-hero-stack>
                    Full-Stack Developer | Vue.js | React.js | Express.js | TypeScript
                </p>
                <p class="text-slate-600 dark:text-offWhite text-base sm:text-lg mb-8 max-w-none lg:max-w-[75%]"
                    data-hero-description>
                    I build scalable web applications, focusing on performance, architecture, and user
                    experience — not just making things work, but making them last.
                </p>

                <div class="flex flex-col xs:flex-row gap-4 mb-10" data-hero-buttons>
                    <router-link to="/projects" class="w-full sm:w-fit">
                        <base-btn class="w-full sm:min-w-48 lg:min-w-0 lg:w-auto px-5 sm:px-6 py-3.5 sm:py-4"
                            aria-label="View My Work">
                            View My Work
                            <MoveRight class="ml-3" />
                        </base-btn>
                    </router-link>

                    <button aria-label="Download CV"
                        class="w-full sm:w-fit sm:min-w-48 lg:min-w-0 lg:w-auto cursor-pointer border-2 border-gray-300 dark:border-[#2A2A35] bg-transparent text-lightText dark:text-white text-[14px] font-medium rounded-md dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-gray-400 dark:hover:border-[#3A3B47] transition-colors duration-300 flex justify-center items-center px-5 sm:px-6 py-3.5 sm:py-4"
                        @click="downloadCV">
                        Download CV
                        <Download class="ml-3" />
                    </button>
                </div>

                <div class="flex flex-wrap justify-between xs:justify-start gap-4 xs:gap-8 sm:gap-6 mt-6"
                    data-hero-socials>
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

                    <img src="@/assets/abdo-photo.jpeg" alt="Profile Picture" loading="lazy" data-hero-image
                        class="object-cover relative z-10 w-full h-full shadow-[0_0_30px_rgba(131,21,231,0.28),0_0_60px_rgba(131,21,231,0.18)] rounded-full xs:rounded-3xl" />
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-15" data-reveal
            data-animation="fade-up">

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

            <stats-card title="Strong" description="Problem Solving Skills" :large-title="true" class="personal-stats">
                <span class="icon-glow">
                    <Lightbulb class="text-primary" :size="30" />
                </span>
            </stats-card>

        </div>

    </section>
</template>

<script setup lang="ts">
import BaseBtn from '../../components/BaseBtn.vue';
import GithubLink from '../../components/links/GithubLink.vue';
import LinkedinLink from '../../components/links/LinkedinLink.vue';
import FacebookLink from '../../components/links/FacebookLink.vue';
import MailLink from '../../components/links/MailLink.vue';
import StatsCard from '../../components/home/StatsCard.vue';
import { Download, FolderGit2, MoveRight, ShieldCheck, User2, Lightbulb } from '@lucide/vue';

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1zfS5GM5yTWD1go5zrBTKSoyL32Z600OA/view?usp=drive_link';
    link.download = 'Abdullah_Mahrous_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>>