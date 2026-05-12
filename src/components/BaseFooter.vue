<template>
    <footer
        class="px-4 md:px-8 lg:px-16 w-full py-4 flex items-center justify-between text-sm muted border-t border-[#1F2028]">
        <Logo class="justify-self-left" />
        <span class="text-muted">&copy; 2026 Abdullah Mahrous. All rights reserved.</span>

        <div class="flex mr-4 space-x-4">
            <github-link />
            <linkedin-link />
            <facebook-link />
            <mail-link />
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