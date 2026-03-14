import { defineStore } from 'pinia'

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
      await $fetch('/sanctum/csrf-cookie', {
        baseURL: config.public.apiBase,
        credentials: 'include',
      })
    },
    async login(credentials) {
      await this.csrfCookie()
      const config = useRuntimeConfig()
      await $fetch('/login', {
        method: 'POST',
        baseURL: config.public.apiBase,
        body: credentials,
        credentials: 'include',
      })
      await this.fetchUser()
      useRouter().push('/dashboard')
    },
    async register(data) {
      await this.csrfCookie()
      const config = useRuntimeConfig()
      await $fetch('/register', {
        method: 'POST',
        baseURL: config.public.apiBase,
        body: data,
        credentials: 'include',
      })
      await this.fetchUser()
      useRouter().push('/dashboard')
    },
    async logout() {
      const config = useRuntimeConfig()
      await $fetch('/logout', {
        method: 'POST',
        baseURL: config.public.apiBase,
        credentials: 'include',
      })
      this.user = null
      this.isAuthenticated = false
      useRouter().push('/auth/login')
    },
    loginWithProvider(provider) {
      const config = useRuntimeConfig()
      // Redirect to Laravel socialite route
      window.location.href = `${config.public.apiBase}/api/auth/${provider}/redirect`
    }
  }
})
