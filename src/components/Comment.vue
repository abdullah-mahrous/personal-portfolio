<template>
    <div class="flex gap-4 py-4">
        <!-- User Icon -->
        <div class="shrink-0">
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <User class="w-5 h-5 text-primary" />
            </div>
        </div>

        <!-- Comment Content -->
        <div class="flex-1 min-w-0">
            <!-- Header: Name and Date -->
            <div class="flex items-center gap-2 mb-2">
                <h3 class="font-semibold text-white">{{ userName }}</h3>
                <span class="text-offWhite text-sm">{{ date }}</span>
            </div>

            <!-- Comment Text -->
            <p class="text-offWhite break-words">{{ commentText }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User } from '@lucide/vue';
import type { NoteComment } from '../services/notesService';

const props = defineProps<{
    comment: NoteComment;
}>();

const { name: userName, date, comment: commentText } = props.comment;
</script>
