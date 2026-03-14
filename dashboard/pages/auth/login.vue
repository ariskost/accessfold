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
        Welcome back
      </h2>
      <p class="mt-2 text-center text-sm text-slate-600">
        Or
        <NuxtLink to="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700"> Email address </label>
            <div class="mt-1">
              <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700"> Password </label>
            <div class="mt-1">
              <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" v-model="form.remember" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-slate-900"> Remember me </label>
            </div>

            <div class="text-sm">
              <NuxtLink to="/auth/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </NuxtLink>
            </div>
          </div>

          <div>
            <button type="submit" :disabled="auth.isLoading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
              <span v-if="auth.isLoading">Signing in...</span>
              <span v-else>Sign in</span>
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-slate-500"> Or continue with </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <button @click="auth.loginWithProvider('google')" class="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                <span class="sr-only">Sign in with Google</span>
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            <div>
              <button @click="auth.loginWithProvider('facebook')" class="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                <span class="sr-only">Sign in with Facebook</span>
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <div>
              <button @click="auth.loginWithProvider('apple')" class="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                <span class="sr-only">Sign in with Apple</span>
                <svg class="w-5 h-5 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.981 1.632C12.981 1.632 12.91.802 12.186.273c-.76-.55-1.725-.664-1.725-.664s.087 1.063.84 1.634c.731.554 1.68.389 1.68.389zM10.124 3.01c-1.42.062-2.825 1.055-3.593 1.055-1.042 0-2.327-.92-3.664-.89-1.724.03-3.322.997-4.218 2.57-1.815 3.193-.456 7.924 1.306 10.51 1.002 1.47 2.193 3.141 3.782 3.085 1.552-.063 2.146-1.018 4.024-1.018 1.868 0 2.411 1.018 4.03 1.018 1.642 0 2.684-1.5 3.65-2.924 1.118-1.655 1.577-3.255 1.59-3.337-.035-.015-3.13-1.22-3.155-4.832-.02-3.033 2.457-4.49 2.505-4.52-1.428-2.112-3.626-2.4-4.42-2.464-1.838-.153-3.606 1.139-4.525 1.139-.908 0-2.434-1.127-3.963-1.082h.001z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'empty',
  middleware: 'guest'
})

const auth = useAuthStore()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const handleLogin = async () => {
  try {
    await auth.login(form)
  } catch (error) {
    alert('Invalid login credentials.')
  }
}
</script>
