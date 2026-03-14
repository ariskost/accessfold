<template>
  <div class="pt-24 pb-16 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">{{ t('integrations.title') }}</h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 mb-12">{{ t('integrations.desc') }}</p>
      
      <div class="grid md:grid-cols-3 gap-8">
         <div class="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t('integrations.wpTitle') }}</h3>
            <p class="text-slate-500 dark:text-slate-400">{{ t('integrations.wpDesc') }}</p>
         </div>
         <div class="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t('integrations.shopTitle') }}</h3>
            <p class="text-slate-500 dark:text-slate-400">{{ t('integrations.shopDesc') }}</p>
         </div>
         <div class="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t('integrations.webflowTitle') }}</h3>
            <p class="text-slate-500 dark:text-slate-400">{{ t('integrations.webflowDesc') }}</p>
         </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
