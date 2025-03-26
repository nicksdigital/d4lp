import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  
  // Admin routes protection
  if (to.path.startsWith('/admin') && !auth.isAdmin) {
    return navigateTo('/')
  }

  // Protected routes requiring authentication
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return navigateTo('/connect')
  }
})