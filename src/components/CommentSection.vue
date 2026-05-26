<template>
    <section class="bg-lightBg dark:bg-darkCard p-4 sm:p-8 rounded-xl base-border">
        <h2 class="text-2xl font-bold mb-2">Leave a Comment</h2>
        <p class="mb-6 text-slate-600 dark:text-offWhite text-sm sm:text-base">Share your thoughts, I'm always happy to
            hear your feedback.
        </p>

        <!-- Comment Form -->
        <form @submit.prevent="handleSubmitComment" class="mb-8 rounded-lg space-y-4">
            <!-- Name Field -->
            <div>
                <label class="block text-slate-700 dark:text-offWhite font-medium mb-2">Name</label>
                <base-input v-model="formData.name" type="text" placeHolder="Your name" />
            </div>

            <!-- Comment Field -->
            <div>
                <label class="block text-slate-700 dark:text-offWhite font-medium mb-2">Comment</label>
                <textarea v-model="formData.comment" placeholder="Write your comment..."
                    class="base-input base-border w-full p-4 h-32 bg-white dark:bg-[#111217] rounded-lg text-lightText dark:text-white placeholder:text-slate-400 dark:placeholder:text-muted outline-none focus:border-primary resize-vertical"></textarea>
            </div>

            <!-- Submit Button -->
            <div>
                <base-btn class="w-full sm:w-auto px-4 py-2">
                    Post Comment
                    <Send class="size-4 ml-3" />
                </base-btn>
            </div>
        </form>

        <!-- Comments List -->
        <div v-if="comments.length > 0">
            <h3 class="text-xl font-semibold mb-6">Comments ({{ comments.length }})</h3>
            <div v-for="comment in comments" :key="comment.id" class="border-t border-gray-200 dark:border-[#1F2028]">
                <comment :comment="comment" />
            </div>
        </div>

        <!-- No Comments State -->
        <div v-else class="text-center py-8">
            <p class="text-slate-600 dark:text-offWhite">No comments yet. Be the first to comment!</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseBtn from './BaseBtn.vue';
import Comment from './Comment.vue';
import { Send } from '@lucide/vue';
import type { NoteComment } from '../services/notesService';

const props = defineProps<{
    comments: NoteComment[];
}>();

const formData = ref({
    name: '',
    comment: '',
});


function handleSubmitComment() {
    if (!formData.value.name.trim() || !formData.value.comment.trim()) {
        return;
    }

    const newComment: NoteComment = {
        id: 1,
        name: formData.value.name,
        comment: formData.value.comment,
        date: new Date().toDateString()
    };

    props.comments.unshift(newComment);

    // Reset form
    formData.value = {
        name: '',
        comment: '',
    };
}
</script>