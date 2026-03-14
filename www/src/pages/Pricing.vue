<template>
  <div class="pt-24 pb-16 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">{{ t('pricing.title') }}</h1>
      <p class="text-slate-600 dark:text-slate-400">{{ t('pricing.desc') }}</p>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
