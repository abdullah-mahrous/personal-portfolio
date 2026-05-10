<template>

    <main class="my-8">
        <section>
            <div class="flex">

                <div class="w-[50%]">
                    <span class="text-primary text-2xl">
                        Hi, I'm
                    </span>

                    <h1 class="text-7xl font-bold leading-[1.1] mt-4 mb-4">
                        Abdullah<span class="text-primary"> Mahrous</span>
                    </h1>
                    <p class="text-primary text-xl mb-4">
                        Full-Stack Developer | Vue.js | Node.js | TypeScript | Scalable Applications
                    </p>
                    <p class="text-offWhite text-lg mb-8 max-w-[75%]">
                        I build scalable web applications, focusing on performance, architecture, and user
                        experience — not just making things work, but making them last.
                    </p>

                    <div class="flex mb-10">
                        <router-link to="/projects">
                            <base-btn class="px-6 py-4 mr-6">
                                View My Work
                                <MoveRight class="ml-3" />
                            </base-btn>
                        </router-link>

                        <button
                            class="cursor-pointer border-2 border-[#2A2A35] bg-transparent text-[14px] font-medium rounded-md hover:bg-[rgba(255,255,255,0.03)] hover:border-[#3A3B47] transition-colors duration-300 flex justify-center items-center px-6 py-4"
                            @click="downloadCV">
                            Download CV
                            <Download class="ml-3" />
                        </button>
                    </div>

                    <div class="flex space-x-6 mt-6">
                        <github-link class="hero-socials" />
                        <linkedin-link class="hero-socials" />
                        <facebook-link class="hero-socials" />
                        <mail-link class="hero-socials" />
                    </div>

                </div>

                <div class="flex justify-center w-2/4 relative">
                    <div
                        class="hero-glow-circles bg-[radial-gradient(circle_at_top_right,rgba(131,21,231,0.18),transparent_45%)]">
                    </div>
                    <div
                        class="hero-glow-circles bg-[radial-gradient(circle_at_bottom_left,rgba(131,21,231,0.18),transparent_45%)]">
                    </div>
                    <div class="hero-particles top-0 left-10 bg-[radial-gradient(#8315e766_1px,transparent_1px)]">
                    </div>
                    <div class="hero-particles bottom-0 right-10 bg-[radial-gradient(#8315e766_1px,transparent_1px)]">
                    </div>
                    <img src="../assets/abdo-photo.jpeg" alt="Profile Picture"
                        class="animate-[floatImage_6s_linear_infinite] relative rounded-3xl max-w-sm transform rotate-4 shadow-[0_0_30px_rgba(131,21,231,0.28),0_0_60px_rgba(131,21,231,0.18)]" />
                </div>

            </div>

            <div class=" flex justify-between mt-15">

                <stats-card title="1.5+" description="Years Of Professional Experience">
                    <User2 class="text-primary" :size="30" />
                </stats-card>

                <stats-card title="6+" description="Projects Completed">
                    <FolderGit2 class="text-primary" :size="30" />
                </stats-card>

                <stats-card title="100%" description="Clean & Responsive UI">
                    <ShieldCheck class="text-primary" :size="30" />
                </stats-card>

                <stats-card title="Strong" description="Problem Solving Skills">
                    <Lightbulb class="text-primary" :size="30" />
                </stats-card>

            </div>

        </section>

    </main>
</template>

<script setup lang="ts">
import { Download, FolderGit2, MoveRight, ShieldCheck, User2, Lightbulb } from '@lucide/vue';
import BaseBtn from '../components/BaseBtn.vue';
import GithubLink from '../components/GithubLink.vue';
import LinkedinLink from '../components/LinkedinLink.vue';
import FacebookLink from '../components/FacebookLink.vue';
import MailLink from '../components/MailLink.vue';
import StatsCard from '../components/StatsCard.vue';


const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../assets/Abdullah-FullStack-CV2.pdf';
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
