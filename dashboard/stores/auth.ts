import { defineStore } from 'pinia'
import { useCookie, useRuntimeConfig, useRouter } from 'nuxt/app'

const getCsrfHeader = (): Record<string, string> => {
  const token = useCookie('XSRF-TOKEN').value
  return token ? { 'X-XSRF-TOKEN': decodeURIComponent(token as string) } : {}
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  }),
  actions: {
    async initAuth() {
      this.isLoading = true
      try {
        await this.fetchUser()
      } catch (e) {
        this.user = null
        this.isAuthenticated = false
      } finally {
        this.isLoading = false
      }
    },
    async fetchUser() {
      const config = useRuntimeConfig()
      try {
        const { data } = await useFetch('/api/user', {
          baseURL: config.public.apiBase,
          headers: {
            Accept: 'application/json',
          },
          // Important for Sanctum cookie-based auth
          credentials: 'include',
        })
        
        if (data.value) {
          this.user = data.value
          this.isAuthenticated = true
        } else {
          throw new Error('Not authenticated')
        }
      } catch (error) {
        this.user = null
        this.isAuthenticated = false
        throw error
      }
    },
    async csrfCookie() {
      const config = useRuntimeConfig()
      await $fetch('/api/sanctum/csrf-cookie', {
        baseURL: config.public.apiBase,
        credentials: 'include',
      })
    },
    async login(credentials: any) {
      await this.csrfCookie()
      const config = useRuntimeConfig()
      await $fetch('/api/login', {
        method: 'POST',
        baseURL: config.public.apiBase,
        body: credentials,
        headers: { ...getCsrfHeader(), 'Accept': 'application/json' },
        credentials: 'include',
      })
      await this.fetchUser()
      useRouter().push('/')
    },
    async register(data: any) {
      await this.csrfCookie()
      const config = useRuntimeConfig()
      await $fetch('/api/register', {
        method: 'POST',
        baseURL: config.public.apiBase,
        body: data,
        headers: { ...getCsrfHeader(), 'Accept': 'application/json' },
        credentials: 'include',
      })
      await this.fetchUser()
      useRouter().push('/')
    },
    async logout() {
      const config = useRuntimeConfig()
      await $fetch('/api/logout', {
        method: 'POST',
        baseURL: config.public.apiBase,
        headers: { ...getCsrfHeader(), 'Accept': 'application/json' },
        credentials: 'include',
      })
      this.user = null
      this.isAuthenticated = false
      useRouter().push('/auth/login')
    },
    loginWithProvider(provider: any) {
      const config = useRuntimeConfig()
      // Redirect to Laravel socialite route
      window.location.href = `${config.public.apiBase}/api/auth/${provider}/redirect`
    }
  }
})
