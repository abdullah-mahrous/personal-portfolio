<template>
    <section id="contact-form"
        class="flex my-10 sm:my-12 rounded-xl base-border bg-[linear-gradient(135deg,#10111800_0%,#0D0E14_100%)] px-4 py-5 sm:px-6 md:px-8 md:py-6 flex-col lg:flex-row gap-8 lg:items-center lg:justify-between relative overflow-hidden">

        <!-- top right corner glow effect cause -->
        <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_45%,rgba(131,21,231,0.20),transparent_30%)]">
        </div>

        <div class="w-full lg:w-[40%] flex items-center gap-3 xs:gap-4 sm:gap-6 relative z-10">
            <div
                class="p-1.5 sm:p-2 rounded-xl border border-[#2A2742] bg-[linear-gradient(145deg,#171427,#0E0D17)] shadow-[inset_0_0_20px_rgba(131,21,231,0.23),0_0_22px_rgba(131,21,231,0.12)] flex items-center justify-center shrink-0">

                <svg viewBox="0 0 24 24" fill="none" class="size-12 xs:size-14 sm:size-20">
                    <path d="M12 3L19 7V17L12 21L5 17V7L12 3Z" stroke="#9D4DFF" stroke-width="1.2"
                        stroke-linejoin="round" />
                    <path d="M12 3V21" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round" />
                    <path d="M5 7L12 11L19 7" stroke="#B177FF" stroke-width="1.2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <p class="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-left">
                Let's build somthing <span class="text-primary">amazing</span> together
            </p>
        </div>

        <div class="flex flex-col w-full lg:w-[60%] relative z-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <base-input type="text" place-holder="Name" class="w-full" />
                <base-input type="email" place-holder="Email" class="w-full" />
            </div>

            <textarea placeholder="Message" class="base-border base-input my-4 w-full min-w-0 resize-y"
                rows="3"></textarea>

            <base-btn class="w-full py-3">
                Send Message
                <Send class="ml-4" :size="20" />
            </base-btn>
        </div>

    </section>
</template>

<script setup lang="ts">
import { Send } from '@lucide/vue';
import BaseBtn from './BaseBtn.vue';
import BaseInput from './BaseInput.vue';
</script>
