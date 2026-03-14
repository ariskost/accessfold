import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore()

  if (process.client) {
    if (auth.isAuthenticated) {
      return navigateTo('/dashboard')
    }
  }
})
