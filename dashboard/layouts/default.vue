<template>
  <div class="min-h-screen flex bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white flex-shrink-0">
      <div class="h-16 flex items-center px-6 font-bold text-xl tracking-tight">
        AccessFold
      </div>
      <nav class="mt-4 px-4 space-y-1">
        <NuxtLink to="/" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
          Dashboard
        </NuxtLink>
        <NuxtLink to="/domains" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
          Domains
        </NuxtLink>
        <NuxtLink to="/settings" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
          Widget Settings
        </NuxtLink>
        <NuxtLink to="/compliance" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
          Compliance
        </NuxtLink>
        <NuxtLink to="/ai-tools" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
          AI Tools <span class="text-xs bg-indigo-500 px-1 rounded ml-1">Beta</span>
        </NuxtLink>
        <div class="pt-4 border-t border-slate-700 mt-4">
           <NuxtLink to="/billing" class="block px-4 py-2 rounded hover:bg-slate-800" active-class="bg-indigo-600">
             Billing
           </NuxtLink>
           <button @click="authStore.logout()" class="w-full text-left px-4 py-2 rounded hover:bg-slate-800 text-slate-400">
             Logout
           </button>
        </div>
      </nav>
    </aside>

    <!-- Content -->
    <main class="flex-1 flex flex-col">
      <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
        <h1 class="text-lg font-medium text-slate-800">{{ route.meta.title || 'Overview' }}</h1>
        <div class="flex items-center gap-4">
           <span class="text-sm text-slate-500">{{ authStore.user?.email }}</span>
           <div class="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
             {{ authStore.user?.name?.charAt(0) || 'U' }}
           </div>
        </div>
      </header>
      <div class="p-8 overflow-y-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore();
const route = useRoute();

onMounted(() => {
    authStore.init();
    if (!authStore.isAuthenticated && route.path !== '/auth/login') {
        navigateTo('/auth/login');
    }
});
</script>
