<template>
    <div class="p-6 base-card flex flex-col h-full">
        <img :src="imgSrc" :alt="`${projectName} cover image`" class="rounded-lg mb-8 w-full object-cover h-70"
            loading="lazy">

        <h5 class="text-xl font-bold mb-4">{{ projectName }}</h5>
        <p class="card-summary card-text mb-4 line-clamp-3 relative h-[calc(theme(lineHeight.6)*3)]">
            {{ projectSummary }}
        </p>

        <div class="flex space-x-3 mb-6 flex-wrap gap-y-2 content-start min-h-[72px]">
            <span v-for="tag in tags" :key="tag" class="p-2 rounded-lg border text-sm mb-1" :style="{
                backgroundColor: getTagColor(tag).bg,
                borderColor: getTagColor(tag).border,
                color: getTagColor(tag).text
            }">
                {{ tag }}
            </span>
        </div>

        <a :href="projectLink" target="_blank" rel="noopener noreferrer"
            class="no-underline font-medium cursor-pointer flex items-center mt-auto w-fit">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 inline-block ml-2" viewBox="0 0 24 24">
                <path fill="#fff"
                    d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    imgSrc: string,
    projectName: string,
    projectSummary: string,
    tags: string[],
    projectLink: string
}>()

const getTagColor = (tag: string) => {
    const colors = [
        { bg: '#8315e71f', text: '#C084FC', border: '#8315e740' },
        { bg: '#1e40af1f', text: '#60A5FA', border: '#1e40af40' },
        { bg: '#16a34a1f', text: '#4ade80', border: '#16a34a40' },
        { bg: '#ea58341f', text: '#fb923c', border: '#ea583440' },
        { bg: '#dc26351f', text: '#f87171', border: '#dc263540' },
        { bg: '#0891b21f', text: '#06b6d4', border: '#0891b240' },
    ];

    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = ((hash << 5) - hash) + tag.charCodeAt(i);
        hash = hash & hash;
    }

    return colors[Math.abs(hash) % colors.length];
}
</script>
