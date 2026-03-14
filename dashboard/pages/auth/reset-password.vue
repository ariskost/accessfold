<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-900">
        Create New Password
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100">
        <form class="space-y-6" @submit.prevent="handleReset">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700"> Email address </label>
            <div class="mt-1">
              <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 bg-slate-100 text-slate-500 border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm" readonly />
            </div>
            <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email[0] }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700"> New Password </label>
            <div class="mt-1">
              <input id="password" v-model="form.password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <p v-if="errors.password" class="mt-2 text-sm text-red-600">{{ errors.password[0] }}</p>
          </div>

          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-slate-700"> Confirm Password </label>
            <div class="mt-1">
              <input id="password_confirmation" v-model="form.password_confirmation" name="password_confirmation" type="password" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
              <span v-if="isLoading">Resetting...</span>
              <span v-else>Reset Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

definePageMeta({
  layout: 'empty',
  middleware: 'guest'
})

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const form = reactive({
  token: route.query.token || '',
  email: route.query.email || '',
  password: '',
  password_confirmation: ''
})

const errors = ref({})
const isLoading = ref(false)

const handleReset = async () => {
  errors.value = {}
  isLoading.value = true
  try {
    await $fetch('/reset-password', {
      method: 'POST',
      baseURL: config.public.apiBase,
      body: form,
      credentials: 'include'
    })
    alert('Password has been successfully reset. You can now login.')
    router.push('/auth/login')
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response._data.errors
    } else {
      alert('An error occurred during password reset.')
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (!form.token || !form.email) {
    alert('Invalid reset parameters.')
    router.push('/auth/login')
  }
})
</script>
