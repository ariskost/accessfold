import { ref } from 'vue'

const user = ref(null)
const isAuthenticated = ref(false)

export function useAuth() {
  const checkAuth = async () => {
    try {
      const apiUrl = import.meta.env.DEV ? 'http://localhost:8000/api/user' : '/api/user'
      const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        },
        credentials: 'include'
      })
      
      if (response.ok) {
        const data = await response.json()
        user.value = data
        isAuthenticated.value = true
      } else {
        user.value = null
        isAuthenticated.value = false
      }
    } catch (error) {
      user.value = null
      isAuthenticated.value = false
    }
  }

  const logout = async () => {
    try {
      const logoutUrl = import.meta.env.DEV ? 'http://localhost:8000/logout' : '/logout'
      await fetch(logoutUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      user.value = null
      isAuthenticated.value = false
      // redirect
      window.location.reload()
    } catch (e) {
      console.error('Logout failed', e)
    }
  }

  return {
    user,
    isAuthenticated,
    checkAuth,
    logout
  }
}
