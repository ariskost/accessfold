<template>
  <div class="pt-24 pb-16 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">{{ t('compliance.title') }}</h1>
      <div class="grid md:grid-cols-2 gap-12">
         
         <!-- WCAG 2.1 -->
         <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-brand-200/60 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 dark:text-white mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500 dark:text-brand-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              {{ t('compliance.wcag21.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {{ t('compliance.wcag21.desc') }}
            </p>
            <ul class="space-y-3">
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300">{{ t('compliance.wcag21.l1') }}</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300">{{ t('compliance.wcag21.l2') }}</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300">{{ t('compliance.wcag21.l3') }}</span>
               </li>
            </ul>
         </div>

         <!-- WCAG 2.2 (New) -->
         <div class="bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-800/80 p-8 rounded-2xl border border-brand-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">{{ t('compliance.wcag22.badge') }}</div>
            <h2 class="text-2xl font-display font-bold text-brand-900 dark:text-white mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent-500 dark:text-accent-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              {{ t('compliance.wcag22.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {{ t('compliance.wcag22.desc') }}
            </p>
            <ul class="space-y-3">
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300"><strong>{{ t('compliance.wcag22.l1') }}</strong> {{ t('compliance.wcag22.l1desc') }}</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300"><strong>{{ t('compliance.wcag22.l2') }}</strong> {{ t('compliance.wcag22.l2desc') }}</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                 <span class="text-slate-600 dark:text-slate-300"><strong>{{ t('compliance.wcag22.l3') }}</strong> {{ t('compliance.wcag22.l3desc') }}</span>
               </li>
            </ul>
         </div>

         <!-- ADA Title III -->
         <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-brand-200/60 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 dark:text-white mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500 dark:text-brand-400"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              {{ t('compliance.ada.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ t('compliance.ada.desc') }}
            </p>
         </div>

         <!-- Section 508 (USA) & ACA (Canada) -->
         <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-brand-200/60 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 dark:text-white mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500 dark:text-brand-400"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
              {{ t('compliance.section508.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              <strong>{{ t('compliance.section508.desc1') }}</strong> {{ t('compliance.section508.desc1text') }}
            </p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>{{ t('compliance.section508.desc2') }}</strong> {{ t('compliance.section508.desc2text') }}
            </p>
         </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
