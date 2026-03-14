<template>
  <div>
    <div class="mb-6 flex justify-between items-end">
       <div>
          <h2 class="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
          <p class="text-slate-500 mt-1">Welcome back, {{ auth.user?.name || 'User' }}</p>
       </div>
       <button @click="auth.logout" class="px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          Sign out
       </button>
    </div>
    
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
         <div class="text-slate-500 text-sm font-medium">Total Domains</div>
         <div class="text-3xl font-bold text-slate-900 mt-2">{{ domainStore.domains.length }}</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
         <div class="text-slate-500 text-sm font-medium">Avg. Accessibility Score</div>
         <div class="text-3xl font-bold text-emerald-600 mt-2">85%</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
         <div class="text-slate-500 text-sm font-medium">Total Issues Fixed</div>
         <div class="text-3xl font-bold text-indigo-600 mt-2">1,240</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
         <div class="text-slate-500 text-sm font-medium">Plan Usage</div>
         <div class="text-3xl font-bold text-slate-900 mt-2">45%</div>
      </div>
    </div>

    <!-- Recent Domains -->
    <div class="bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col">
       <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 class="font-bold text-lg">My Domains</h3>
          <NuxtLink to="/domains/add" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">+ Add New</NuxtLink>
       </div>
       <div class="p-0">
          <table class="w-full text-left">
             <thead class="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                <tr>
                   <th class="px-6 py-3">Domain</th>
                   <th class="px-6 py-3">Status</th>
                   <th class="px-6 py-3">Score</th>
                   <th class="px-6 py-3">Issues</th>
                   <th class="px-6 py-3"></th>
                </tr>
             </thead>
             <tbody class="divide-y divide-slate-100">
                <tr v-for="domain in domainStore.domains" :key="domain.id" class="hover:bg-slate-50 transition-colors">
                   <td class="px-6 py-4 font-medium text-slate-900">{{ domain.name }}</td>
                   <td class="px-6 py-4">
                      <span :class="{'bg-emerald-100 text-emerald-800': domain.status === 'active', 'bg-yellow-100 text-yellow-800': domain.status === 'pending'}" class="px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {{ domain.status }}
                      </span>
                   </td>
                   <td class="px-6 py-4">
                      <div class="flex items-center gap-2">
                        <div class="w-24 bg-slate-200 rounded-full h-2">
                           <div class="bg-indigo-600 h-2 rounded-full" :style="{width: domain.score + '%'}"></div>
                        </div>
                        <span class="text-sm font-bold">{{ domain.score }}</span>
                      </div>
                   </td>
                   <td class="px-6 py-4 text-slate-500">{{ domain.issues }}</td>
                   <td class="px-6 py-4 text-right">
                      <NuxtLink :to="`/domains/${domain.id}`" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Manage</NuxtLink>
                   </td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useDomainStore } from '~/stores/domain';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  middleware: 'auth'
})

const domainStore = useDomainStore();
const auth = useAuthStore();
</script>
