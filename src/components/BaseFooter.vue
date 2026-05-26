<template>
    <footer
        class="px-4 md:px-8 lg:px-16 w-full py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left text-sm muted border-t border-gray-200 dark:border-[#1F2028] text-muted">
        <Logo class="order-1 justify-self-left" />
        <span class="order-3 sm:order-2">&copy; 2026 Abdullah Mahrous. All rights reserved.</span>

        <div
            class="order-2 sm:order-3 text-lightText dark:text-muted flex flex-wrap justify-center sm:justify-end gap-6 sm:mr-15 lg:mr-4">
            <github-link :icon-size="24" class="dark:hover:text-offWhite transition:color ease-in-out duration-300" />
            <linkedin-link :icon-size="24" class="dark:hover:text-offWhite transition:color ease-in-out duration-300" />
            <facebook-link :icon-size="24" class="dark:hover:text-offWhite transition:color ease-in-out duration-300" />
            <mail-link :icon-size="24" class="dark:hover:text-offWhite transition:color ease-in-out duration-300" />
        </div>
    </footer>

</template>

<script setup lang="ts">
import Logo from './Logo.vue';
import GithubLink from './GithubLink.vue';
import LinkedinLink from './LinkedinLink.vue';
import MailLink from './MailLink.vue';
import FacebookLink from './FacebookLink.vue';
</script>
