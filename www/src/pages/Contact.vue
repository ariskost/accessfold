<template>
  <div class="pt-24 pb-16 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">{{ t('contact.title') }}</h1>
      
      <form class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700" @submit.prevent>
         <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
               <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{{ t('contact.form.name') }}</label>
               <input type="text" class="w-full px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 outline-none transition-colors">
            </div>
            <div>
               <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{{ t('contact.form.email') }}</label>
               <input type="email" class="w-full px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 outline-none transition-colors">
            </div>
         </div>
         
         <div class="mb-6">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{{ t('contact.form.message') }}</label>
            <textarea rows="4" class="w-full px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 outline-none transition-colors"></textarea>
         </div>
         
         <button class="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
            {{ t('contact.form.submit') }}
         </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
