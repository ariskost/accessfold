import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Pass the nuxtApp.$pinia instance to ensure it is initialized properly during SSR / Plugin loading stage
  const auth = useAuthStore(nuxtApp.$pinia as any)

  if (process.client) {
    await auth.initAuth()
  }
})
