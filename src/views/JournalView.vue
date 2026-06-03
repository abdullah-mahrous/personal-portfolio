<template>
    <main class="my-6 sm:my-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
        <h1 class="mb-5 font-bold text-4xl sm:text-5xl max-w-175 leading-snug">
            Thoughts from my <span class="text-primary">development</span> journey
        </h1>
        <p class="text-slate-600 dark:text-offWhite mb-8 text-base sm:text-lg">
            A space where I share development lessons, insights, ideas and experiments.
        </p>

        <!-- project-cards -->
        <div class="mt-8 grid grid-cols-1 gap-4 sm:gap-6">
            <router-link :to="{ name: 'note', params: { id: note.id } }" v-for="note in notesStore.notes"
                :key="note.id">
                <note-card class="h-full w-full" :img-src="note.imgURL" :title="note.title" :content="note.content"
                    :creation-date="formatDate(note.creationDate)" :read-time="note.readTime" />
            </router-link>
        </div>

    </main>
</template>

<script setup lang="ts">
import NoteCard from '../components/NoteCard.vue';
import { useNotesStore } from '../stores/notes';
import { formatDate } from '../composables/dateFormater';

const notesStore = useNotesStore();

const loadJournalNotes = async () => {
    // Fetch notes when component mounts
    if (notesStore.notes.length === 0)
        await notesStore.fetchNotes();
};

loadJournalNotes();
</script>
