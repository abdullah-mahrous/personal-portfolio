<template>
    <div class="mt-16 sm:mt-20 mb-12 py-8 sm:py-12 lg:py-16 px-5 sm:px-8 lg:px-12 rounded-lg base-border flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 relative overflow-hidden bg-slate-50 dark:bg-[#111217]"
        :style="bannerStyle">
        <!-- Top-left glow circle -->
        <div class="hero-glow-circles bg-[radial-gradient(circle_at_top_left,rgba(131,21,231,0.18),transparent_45%)]">
        </div>

        <!-- Bottom-right glow circle -->
        <div
            class="hero-glow-circles bg-[radial-gradient(circle_at_bottom_right,rgba(131,21,231,0.18),transparent_45%)]">
        </div>

        <!-- Top-left particles -->
        <div class="hero-particles top-0 left-10 bg-[radial-gradient(#8315e766_1px,transparent_1px)]"></div>

        <!-- Bottom-right particles -->
        <div class="hero-particles bottom-0 right-10 bg-[radial-gradient(#8315e766_1px,transparent_1px)]"></div>

        <!-- Left: Text Content -->
        <div class="flex-1 relative z-10 w-full">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
                Let's build something amazing together
            </h2>
            <p class="text-slate-600 dark:text-offWhite text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <base-btn class="w-full sm:w-auto px-6 py-2 btn-glow text-base" @click="scrollToFooter">
                Contact Me
                <MoveRight class="ml-2" />
            </base-btn>
        </div>

        <!-- Right: Animated Icon -->
        <div class="flex-1 flex justify-center md:justify-end relative z-10">
            <Send class="size-20 md:size-24 text-primary animate-fly-paper-plane opacity-90" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoveRight, Send } from '@lucide/vue';
import BaseBtn from './BaseBtn.vue';
import { computed } from 'vue';

const bannerStyle = computed(() => ({
    backgroundImage: 'linear-gradient(135deg, rgba(131, 21, 231, 0.18) 0%, rgba(131, 21, 231, 0.05) 100%)',
    boxShadow: '0 0 40px rgba(131, 21, 231, 0.12)',
}));

const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
@keyframes flyPaperPlane {
    0% {
        transform: translate(-200px, 100px) rotate(-45deg);
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0.9;
    }
}

.animate-fly-paper-plane {
    animation: flyPaperPlane 2s ease-out forwards;
}

.btn-glow {
    position: relative;
    transition: all 0.3s ease;
}

.btn-glow::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(131, 21, 231, 0.4), transparent 70%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: -1;
}

.btn-glow:hover::before {
    opacity: 1;
}

.btn-glow {
    box-shadow: 0 0 20px rgba(131, 21, 231, 0.3);
}

.btn-glow:hover {
    box-shadow: 0 0 30px rgba(131, 21, 231, 0.6);
}
</style>
