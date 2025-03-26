import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()

  // If not authenticated, redirect to connect page
  if (!auth.isAuthenticated) {
    return navigateTo('/connect')
  }

  // If not admin, redirect to home
  if (!auth.isAdmin) {
    return navigateTo('/')
  }

  // Check specific permissions for certain routes
  if (to.meta.requiresPermission) {
    const requiredPermission = to.meta.requiresPermission as string
    if (!auth.hasAdminPermission(requiredPermission)) {
      return navigateTo('/admin/dashboard')
    }
  }
})