<template>
    <div class="p-4 base-card base-border flex h-full min-w-0 flex-col gap-4 sm:flex-row sm:gap-0">

        <img :src="imgSrc" :alt="`${title} cover image`"
            class="order-1 rounded-lg w-full h-44 object-cover sm:order-2 sm:ml-4 sm:h-full sm:w-1/2" loading="lazy">

        <div class="order-2 mt-1 flex min-w-0 flex-col sm:order-1 sm:mt-2 sm:flex-1">
            <h5 class="order-1 text-xl sm:text-2xl lg:text-3xl font-bold my-4 wrap-break-word md:order-2">{{ title }}</h5>
            <p class="order-2 text-offWhite text-sm/relaxed sm:text-base/relaxed relative line-clamp-7 lg:line-clamp-9 md:order-3">
                {{ content }}
            </p>

            <div class="order-3 no-underline font-medium cursor-pointer flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 w-full text-muted sm:gap-x-8 sm:mt-auto sm:pt-4 md:order-1 md:mt-0 md:pt-0">
                <span class="text-sm">{{ creationDate }}</span>
                <span class="text-sm">{{ readingTime }} min read</span>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    imgSrc: string,
    title: string,
    content: string,
    creationDate: string,
    readingTime: number,
}>()
</script>
