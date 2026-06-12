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

                <div
                    class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base text-slate-500 dark:text-muted">
                    <time :datetime="formatDate(note.creationDate)">{{ formatDate(note.creationDate) }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ note.readTime }} min read</span>
                </div>
            </header>

            <figure class="mx-auto mt-6">
                <img :src="note.imgURL" :alt="`${note.title} cover image`" loading="lazy"
                    class="w-full h-56 xs:h-72 sm:h-96 lg:h-128 rounded-lg object-cover" />
            </figure>

            <div v-html="renderedContent"
                class="mx-auto mt-12 text-slate-700 dark:text-white prose sm:prose-lg dark:prose-invert max-w-none">
            </div>

            <!-- Comments and share section -->
            <div class="mt-12 ml-2 flex items-center text-lg">
                <span class="flex items-center">
                    <message-circle class="inline-block mr-3" />
                    {{ note.comments.length }}
                </span>

                <span @click="openShareOptions" aria-label="Share Note"
                    class="inline-block ml-4 cursor-pointer hover:bg-muted/15 p-2 hover:rounded-full transition-all duration-300 ease-in-out"
                    role="button" tabindex="0" @keydown.enter="openShareOptions" @keydown.space="openShareOptions">
                    <share2-icon />
                </span>
            </div>

            <!-- Share Options Modal -->
            <div v-if="showShareOptions" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div class="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-sm w-full mx-4 shadow-lg">
                    <h2 class="text-lg font-semibold mb-4">Share this note</h2>
                    <div class="space-y-3">
                        <button @click="copyToClipboard"
                            class="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                            📋 Copy link
                        </button>
                        <button @click="shareViaEmail"
                            class="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                            ✉️ Share via email
                        </button>
                        <button @click="shareViaTwitter"
                            class="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                            𝕏 Share on Twitter
                        </button>
                        <button @click="shareViaLinkedIn"
                            class="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                            👔 Share on LinkedIn
                        </button>
                    </div>
                    <button @click="showShareOptions = false"
                        class="w-full mt-4 px-4 py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                        Close
                    </button>
                </div>
            </div>

            <!-- Comment Section - Only render when note is loaded -->
            <comment-section v-if="note.id" class="mt-6" :noteId="note.id" />
        </article>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNotesStore } from '../stores/notes';
import { useRoute } from 'vue-router';
import { MessageCircle, MoveLeft, Share2Icon } from '@lucide/vue';
import CommentSection from '../components/CommentSection.vue';
import { formatDate } from '../composables/dateFormater';
import { type Note } from '../services/notesService';
import { type NoteComment } from '../services/commentsService';
import { marked } from 'marked';

const route = useRoute();
const notesStore = useNotesStore();
const showShareOptions = ref(false);

let note = ref<Note>({
    id: '',
    title: '',
    content: '',
    creationDate: new Date(),
    readTime: 0,
    imgURL: '',
    imgId: '',
    comments: [] as NoteComment[],
});
let renderedContent = ref<string>('');

const loadNote = async () => {
    // Fetch note when component mounts
    const fetchedNote = await notesStore.fetchNoteById(route.params.id as string);

    if (fetchedNote)
        note.value = fetchedNote;
};

marked.setOptions({
    breaks: true,
    gfm: true,
});

onMounted(async () => {
    await loadNote();
    renderedContent.value = await marked.parse(note.value.content);

    loadMetadata();
});

const shareUrl = () => {
    return `${window.location.origin}${route.fullPath}`;
};

const openShareOptions = () => {
    // Check if native Share API is available
    if (navigator.share) {
        navigator.share({
            title: note.value.title,
            text: `Check out this note: ${note.value.title}`,
            url: shareUrl(),
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to modal
        showShareOptions.value = true;
    }
};

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(shareUrl());
        showShareOptions.value = false;
        // Optional: Show a toast notification
        console.log('Link copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
    }
};

const shareViaEmail = () => {
    const subject = encodeURIComponent(`Check out: ${note.value.title}`);
    const body = encodeURIComponent(`I found this interesting note: ${shareUrl()}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
    showShareOptions.value = false;
};

const shareViaTwitter = () => {
    const text = encodeURIComponent(`Check out this note: "${note.value.title}"`);
    const url = encodeURIComponent(shareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    showShareOptions.value = false;
};

const shareViaLinkedIn = () => {
    const url = encodeURIComponent(shareUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    showShareOptions.value = false;
};

const loadMetadata = async () => {
    // Update title and description for SEO
    document.title = `Abdullah Mahrous - ${note.value.title}`;

    let metaDescription = document.querySelector(
        'meta[name="description"]'
    )

    if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
    }

    let metaOGTitle = metaDescription.cloneNode(true) as HTMLMetaElement;
    let metaOGDescription = metaDescription.cloneNode(true) as HTMLMetaElement;
    let metaOGImage = metaDescription.cloneNode(true) as HTMLMetaElement;
    let metaOGType = metaDescription.cloneNode(true) as HTMLMetaElement;

    metaOGTitle.setAttribute('name', 'og:title');
    metaOGTitle.setAttribute('content', note.value.title);

    metaOGDescription.setAttribute('name', 'og:description');
    metaOGDescription.setAttribute('content', renderedContent.value.substring(0, 150) + '...');

    metaOGImage.setAttribute('name', 'og:image');
    metaOGImage.setAttribute('content', note.value.imgURL);

    metaOGType.setAttribute('name', 'og:type');
    metaOGType.setAttribute('content', 'article');

    document.head.appendChild(metaOGTitle);
    document.head.appendChild(metaOGDescription);
    document.head.appendChild(metaOGImage);
    document.head.appendChild(metaOGType);
    document.head.appendChild(metaDescription);
};
</script>
