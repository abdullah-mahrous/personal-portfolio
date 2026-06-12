import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: "Abdullah Mahrous - Full-Stack Developer",
      description: "Full-Stack Developer specializing in Vue, React, Node and Express. Explore my projects, technical notes, and development journey." 
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      title: "Abdullah Mahrous - Projects",
      description: "Explore my projects that I've built so far with filtration of Front-End and Back-End enabled." 
    }
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/JournalView.vue'),
    meta: {
      title: "Abdullah Mahrous - Journal",
      description: "Follow my development journey through insights, lessons learned, project updates, and experiences in Full-Stack Development." 
    }
  },
  {
    path: '/notes/:id',
    name: 'note',
    component: () => import('../views/NoteView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: "Abdullah Mahrous - Login",
      description: "Secure login portal for accessing and managing content on Abdullah Mahrous' personal portfolio and journal." 
    }
  },
  {
    path: '/admin-pannel',
    name: 'adminPannel',
    component: () => import('../views/AdminPannel.vue'),
    meta: {
      requiresAuth: true,
      title: "Abdullah Mahrous - Admin Pannel",
      description: "Administrative dashboard for managing projects, notes, journal entries, and portfolio content."
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: "Abdullah Mahrous - Not Found",
      description: "Page Not Found." 
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Abdullah Mahrous'

  const description = document.querySelector(
    'meta[name="description"]'
  )

  if (description) {
    description.setAttribute(
      'content',
      to.meta.description || ''
    )
  }

  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthorized) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath
      }
    }
  }
})
