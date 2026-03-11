<template>
  <div>
     <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Domains</h2>
        <NuxtLink to="/domains/add" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
           Add Domain
        </NuxtLink>
     </div>

     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="domain in domainStore.domains" :key="domain.id" class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
           <div class="flex justify-between items-start mb-4">
              <h3 class="font-bold text-lg text-slate-900">{{ domain.name }}</h3>
              <span :class="{'bg-emerald-100 text-emerald-800': domain.status === 'active', 'bg-yellow-100 text-yellow-800': domain.status === 'pending'}" class="px-2 py-1 rounded text-xs font-bold uppercase">
                  {{ domain.status }}
              </span>
           </div>
           
           <div class="space-y-3 mb-6">
              <div class="flex justify-between text-sm">
                 <span class="text-slate-500">Accessibility Score</span>
                 <span class="font-bold text-slate-900">{{ domain.score }}/100</span>
              </div>
              <div class="flex justify-between text-sm">
                 <span class="text-slate-500">Fixed Issues</span>
                 <span class="font-bold text-slate-900">{{ domain.issues }}</span>
              </div>
              <div class="flex justify-between text-sm">
                 <span class="text-slate-500">Last Scan</span>
                 <span class="text-slate-900">2 hours ago</span>
              </div>
           </div>

           <div class="flex gap-2">
              <NuxtLink :to="`/domains/${domain.id}`" class="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 text-center py-2 rounded border border-slate-200 text-sm font-medium">Settings</NuxtLink>
              <button class="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded border border-indigo-200 text-sm font-medium">Run Scan</button>
           </div>
        </div>
     </div>
  </div>
</template>

<script setup>
import { useDomainStore } from '~/stores/domain';
const domainStore = useDomainStore();
</script>
