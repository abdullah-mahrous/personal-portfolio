<template>
    <main class="my-6 sm:my-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <article class="mx-auto max-w-5xl">

            <header class="mx-auto">
                <router-link :to="{ name: 'journal' }"
                    class="inline-flex shrink-0 cursor-pointer items-center text-sm sm:text-base text-primary hover:underline transition-colors duration-300 whitespace-nowrap">

                    <move-left class="mr-2 inline-block size-4" /> Back to Journal

                </router-link>

                <h1 class="mt-6 mb-4 font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-tight break-words">
                    {{ note.title }}
                </h1>

                <div class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base text-muted">
                    <time :datetime="note.creationDate">{{ note.creationDate }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ note.readingTime }}</span>
                </div>
            </header>

            <figure class="mx-auto mt-6">
                <img :src="note.imgSrc" :alt="`${note.title} cover image`" loading="lazy"
                    class="w-full h-56 xs:h-72 sm:h-96 lg:h-128 rounded-lg object-cover" />
            </figure>

            <div class="mx-auto mt-8 whitespace-pre-line text-offWhite text-base/loose sm:text-lg/loose">
                {{ note.content }}
            </div>

            <!-- Comments and share section -->
            <div class="mt-12 flex items-center text-lg ">
                <span class="flex items-center">
                    <message-circle class="inline-block mr-3 cursor-pointer" />
                    {{ note.comments.length }}
                </span>
                <share2-icon class="inline-block ml-4 cursor-pointer" />
            </div>

            <!-- Comment Section -->
            <comment-section class="mt-12" :comments="note.comments" />
        </article>
    </main>
</template>

<script setup lang="ts">
import { MessageCircle, MoveLeft, Share2Icon } from '@lucide/vue';
import CommentSection from '../components/CommentSection.vue';

type Note = {
    id: number,
    imgSrc: string,
    title: string,
    content: string,
    creationDate: string,
    readingTime: string,
    comments: NoteComment[]
}

type NoteComment = {
    id: number,
    name: string,
    comment: string,
    date: string
}

const note: Note = {
    id: 1,
    imgSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Understanding Vue 3 Composition API - A Comprehensive Guide for Developers',
    content: 'An open-source desktop app to design ERDs, export SQL for SQLite/MySQL/SQL Server, and securely share password-protected project files.\n\n This note covers the architectural decisions, tech stack, and development process behind DoQL, highlighting key features and challenges overcome during its creation. Whether you\'re interested in desktop app development, database design, or just want to see how DoQL was built,\n this note provides an in-depth look at the project from start to finish. \n\nKey topics covered include: \n- The motivation behind creating DoQL and the problem it solves \n- The tech stack chosen for the project and why \n- Architectural decisions and how they shaped the app\'s design \n- Challenges faced during development and how they were overcome \n- A walkthrough of the app\'s key features and functionality \nWhether you\'re a developer looking to learn from DoQL\'s development process or just curious about how it works, this note provides a comprehensive overview of the project and its journey from idea to open-source release.\n\n\n lorem ipsum dolor sit amet, consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    creationDate: 'June 15, 2024',
    readingTime: '5 min read',
    comments: [
        {
            id: 1,
            name: 'Alice',
            comment: 'Great note! Really helped me understand the Composition API better.',
            date: 'June 16, 2024'
        },
        {
            id: 2,
            name: 'Bob',
            comment: 'Thanks for sharing your insights on DoQL. Looking forward to trying it out!',
            date: 'June 17, 2024'
        },
        {
            id: 3,
            name: 'Charlie',
            comment: 'I found the section on architectural decisions particularly insightful.',
            date: 'June 18, 2024'
        },
        {
            id: 4,
            name: 'Diana',
            comment: 'Excellent breakdown of the development process. Very informative!',
            date: 'June 19, 2024'
        }
    ]
}
</script>
