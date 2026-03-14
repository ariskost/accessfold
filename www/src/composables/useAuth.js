import { ref } from 'vue'

const user = ref(null)
const isAuthenticated = ref(false)

export function useAuth() {
  const checkAuth = async () => {
    try {
      // In Vite, we'll try to fetch the user if the cookie is active
      const response = await fetch('http://localhost:8000/api/user', {
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
      await fetch('http://localhost:8000/logout', {
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
