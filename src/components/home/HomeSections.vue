<template>
    <section>
        <div class="mb-4 flex gap-2 items-center justify-between">

            <h3 class="flex min-w-0 items-center gap-3 font-bold text-lg xs:text-xl sm:text-2xl">
                <span class="inline-block size-2 shrink-0 rounded-full bg-primary"></span>
                <span class="min-w-0 break-words">{{ title }}</span>
            </h3>

            <router-link v-if="hasLink" :to="{ name: routeName }"
                class="inline-flex shrink-0 cursor-pointer items-center text-sm text-primary no-underline hover:underline whitespace-nowrap">

                View All {{ linkText }} <move-right class="ml-2 inline-block size-4" />

            </router-link>
        </div>

        <div class="flex flex-wrap justify-between items-stretch gap-4 sm:gap-6">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
import { MoveRight } from '@lucide/vue';

defineProps<{
    title: string,
    hasLink?: boolean,
    routeName?: string,
    linkText?: string
}>()
</script>
