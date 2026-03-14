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
        Reset Password
      </h2>
      <p class="mt-2 text-center text-sm text-slate-600">
        Remembered it?
        <NuxtLink to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          Sign in here
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100">
        <form v-if="!statusMessage" class="space-y-6" @submit.prevent="handleForgot">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700"> Email address </label>
            <div class="mt-1">
              <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
          </div>

          <div>
            <button type="submit" :disabled="isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
              <span v-if="isLoading">Sending Link...</span>
              <span v-else>Email Password Reset Link</span>
            </button>
          </div>
        </form>

        <div v-else class="text-center rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">{{ statusMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'empty',
  middleware: 'guest'
})

const email = ref('')
const error = ref('')
const statusMessage = ref('')
const isLoading = ref(false)
const config = useRuntimeConfig()

const handleForgot = async () => {
  error.value = ''
  isLoading.value = true
  try {
    const response = await $fetch('/forgot-password', {
      method: 'POST',
      baseURL: config.public.apiBase,
      body: { email: email.value },
      credentials: 'include'
    })
    statusMessage.value = response.status
  } catch (err) {
    if (err.response && err.response.status === 422) {
      error.value = err.response._data.errors.email[0]
    } else {
      error.value = 'Failed to send password reset link.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
