<template>
    <section>
        <h3 class="flex items-center font-bold text-2xl mb-4">
            <span class="inline-block size-2 rounded-full bg-primary mr-2"></span> {{ title }}
            <router-link v-if="hasLink" :to="{ name: routeName }"
                class="text-primary text-sm no-underline hover:underline self-end cursor-pointer flex items-center ml-auto"><span>
                    View All {{ linkText }}<move-right class="ml-2 inline-block" />
                </span></router-link>
        </h3>

        <div class="flex justify-between items-start">
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