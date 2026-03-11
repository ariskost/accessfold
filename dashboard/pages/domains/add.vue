<template>
  <div class="max-w-2xl mx-auto">
     <h2 class="text-2xl font-bold mb-6">Add New Domain</h2>
     
     <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <form @submit.prevent="addDomain">
           <div class="mb-6">
              <label class="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
              <input type="url" v-model="url" placeholder="https://example.com" required class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <p class="mt-2 text-sm text-slate-500">We will verify this domain via DNS or meta tag.</p>
           </div>
           
           <div class="flex justify-end gap-3">
              <NuxtLink to="/domains" class="bg-white text-slate-700 px-4 py-2 rounded-md font-medium text-sm border border-slate-300 hover:bg-slate-50">Cancel</NuxtLink>
              <button type="submit" :disabled="loading" class="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-indigo-700 disabled:opacity-50">
                 {{ loading ? 'Adding...' : 'Add Domain' }}
              </button>
           </div>
        </form>
     </div>
  </div>
</template>

<script setup>
import { useDomainStore } from '~/stores/domain';
const domainStore = useDomainStore();
const url = ref('');
const loading = ref(false);

const addDomain = async () => {
   loading.value = true;
   await domainStore.addDomain(url.value);
   loading.value = false;
   navigateTo('/domains');
};
</script>
