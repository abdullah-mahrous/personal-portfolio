<template>
    <section class="bg-lightBg dark:bg-darkCard p-4 sm:p-8 rounded-xl base-border">
        <h2 class="text-2xl font-bold mb-2">Leave a Comment</h2>
        <p class="mb-6 text-slate-600 dark:text-offWhite text-sm sm:text-base">Share your thoughts, I'm always happy to
            hear your feedback.
        </p>

        <!-- Comment Form -->
        <form @submit.prevent="handleSubmitComment" class="mb-8 rounded-lg space-y-4">
            <!-- Error/Success Message -->
            <div v-if="message" :class="[
                'p-4 rounded-lg text-sm',
                message.type === 'error'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700'
            ]">
                {{ message.text }}
            </div>

            <!-- Name Field -->
            <div>
                <label class="block text-slate-700 dark:text-offWhite font-medium mb-2">Name</label>
                <base-input v-model="formData.name" type="text" placeHolder="Your name" />
            </div>

            <!-- Comment Field -->
            <div>
                <label class="block text-slate-700 dark:text-offWhite font-medium mb-2">Comment</label>
                <textarea v-model="formData.content" placeholder="Write your comment..."
                    class="base-input base-border w-full p-4 h-32 bg-white dark:bg-[#111217] rounded-lg text-lightText dark:text-white placeholder:text-slate-400 dark:placeholder:text-muted outline-none focus:border-primary resize-vertical"></textarea>
            </div>

            <!-- Submit Button -->
            <div>
                <base-btn type="submit" class="w-full sm:w-auto px-4 py-2" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Posting...' : 'Post Comment' }}
                    <Send class="size-4 ml-3" />
                </base-btn>
            </div>
        </form>

        <!-- Comments List -->
        <div v-if="comments.length > 0">
            <h3 class="text-xl font-semibold mb-6">Comments ({{ comments.length }})</h3>
            <div v-for="comment in comments" :key="comment.commentId"
                class="border-t border-gray-200 dark:border-[#1F2028]">
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
import { ref, onMounted, computed } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseBtn from './BaseBtn.vue';
import Comment from './Comment.vue';
import { Send } from '@lucide/vue';
import { useCommentsStore } from '../stores/comments';

const props = defineProps<{
    noteId: string;
}>();

const commentsStore = useCommentsStore();
const isSubmitting = ref(false);
const message = ref<{ type: 'error' | 'success'; text: string } | null>(null);

const formData = ref({
    name: '',
    content: '',
});

const comments = computed(() => commentsStore.comments);

onMounted(() => {
    commentsStore.fetchComments(props.noteId);
});

const clearMessage = () => {
    message.value = null;
};

const setMessageWithAutoClear = (type: 'error' | 'success', text: string) => {
    message.value = { type, text };
    setTimeout(() => {
        clearMessage();
    }, 5000);
};

async function handleSubmitComment() {
    // Clear previous messages
    clearMessage();

    // Validation
    if (!formData.value.name.trim()) {
        setMessageWithAutoClear('error', 'Please enter your name.');
        return;
    }

    if (!formData.value.content.trim()) {
        setMessageWithAutoClear('error', 'Please write a comment before posting.');
        return;
    }

    isSubmitting.value = true;

    try {
        await commentsStore.addComment(props.noteId, {
            name: formData.value.name,
            content: formData.value.content,
        });

        // Show success message
        setMessageWithAutoClear('success', 'Comment posted successfully! Thank you for your thoughts.');

        // Reset form
        formData.value = {
            name: '',
            content: '',
        };
    } catch (error) {
        console.error('Failed to post comment:', error);
        setMessageWithAutoClear('error', 'Failed to post comment. Please try again later.');
    } finally {
        isSubmitting.value = false;
    }
}
</script>