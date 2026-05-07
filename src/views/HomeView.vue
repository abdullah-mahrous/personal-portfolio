<template>

    <main class="my-8">
        <section>

            <div class="flex">

                <div class="w-[50%]">
                    <span class="text-primary text-2xl">
                        Hi, I'm
                    </span>

                    <h1 class="text-7xl font-bold leading-[1.1] mt-4 mb-4">
                        Abdullah <br><span class="text-primary">Mahrous</span>
                    </h1>
                    <p class="text-primary text-xl mb-4">
                        Full-Stack Developer | Vue.js | Node.js | TypeScript | Scalable Applications
                    </p>

                    <p class="text-offWhite text-lg mb-8 max-w-[75%]">
                        I build scalable web applications, focusing on performance, architecture, and user
                        experience — not just making things work, but making them last.
                    </p>

                    <div class="flex">
                        <router-link to="/projects">
                            <base-btn>
                                View My Work
                                <MoveRight class="ml-3" />
                            </base-btn>
                        </router-link>

                        <base-btn class="ml-4" @click="downloadCV">Download CV
                            <Download />
                        </base-btn>
                    </div>

                    <div class="flex space-x-4 mt-6">
                        <a href="https://github.com/abdullah-mahrous" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-github">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.57 6.44-7a5.48 5.48 0 0 0-1.46-3.79c-.15-.35-.64-1.77-.28-3.69a4.54 4.54 0 0 0-1.91-.51c-.16-.01-.39-.02-.62-.02s-.46.01-.7.02a4.54 4.54 0 0 0-1.91.51c-.36 1.92-.14 3.34-.07 3.69a5.48 5.48 0 0 0-1.46 3.79c0 5.42 3.31 6.65 6.47 7a2.38 2.38 0 0 0-.68 1.85v2.75" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/abdullah-mahrous-14b9111b9/" target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-4v9h-4v-9h4v-3a2 2 0 0 1 2-2z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100006747105758" target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>

                        <a href="mailto:abdullah.mahrous@example.com" target="_blank" rel="noopener noreferrer">
                            <Mail class="lucide lucide-mail" />
                        </a>
                    </div>
                </div>

                <div class="flex justify-center w-2/4">
                    <img src="../assets/abdo-photo.jpeg" alt="Profile Picture"
                        class="rounded-lg shadow-lg mt-8 w-full max-w-sm mx-auto">
                </div>

            </div>

        </section>

    </main>
</template>

<script setup lang="ts">
import { Download, Mail, MoveRight } from '@lucide/vue';
import BaseBtn from '../components/BaseBtn.vue';

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../assets/Abdullah-FullStack-CV2.pdf';
    link.download = 'Abdullah_Mahrous_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>