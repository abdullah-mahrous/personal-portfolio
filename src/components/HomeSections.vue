<template>
    <section>
        <h3 class="flex flex-wrap items-center gap-x-3 gap-y-2 font-bold text-xl sm:text-2xl mb-4">
            <span class="inline-block size-2 rounded-full bg-primary"></span> {{ title }}
            <router-link v-if="hasLink" :to="{ name: routeName }"
                class="text-primary text-sm no-underline hover:underline self-end cursor-pointer flex items-center ml-auto whitespace-nowrap"><span>
                    View All {{ linkText }}<move-right class="ml-2 inline-block" />
                </span></router-link>
        </h3>

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
