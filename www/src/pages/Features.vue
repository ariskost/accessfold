<template>
  <div class="pt-24 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Hero Section -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          {{ t('features.hero.title1') }} <span class="bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">{{ t('features.hero.titleHighlight') }}</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ t('features.hero.subtitle') }}
        </p>
      </div>

      <!-- Core Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        
        <!-- Feature 1: Intelligent Profiles -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-brand-50 dark:bg-brand-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-brand-50 dark:bg-brand-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-brand-100 dark:border-brand-800">
            <svg class="text-brand-600 dark:text-brand-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.0.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.0.desc') }}</p>
        </div>

        <!-- Feature 2: Readable Experience -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-accent-50 dark:bg-accent-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-accent-50 dark:bg-accent-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-accent-100 dark:border-accent-800">
            <svg class="text-accent-600 dark:text-accent-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.1.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.1.desc') }}</p>
        </div>

        <!-- Feature 3: Advanced Visuals -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-purple-50 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-purple-50 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-purple-100 dark:border-purple-800">
            <svg class="text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.2.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.2.desc') }}</p>
        </div>

        <!-- Feature 4: Shadow DOM -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-blue-50 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-blue-100 dark:border-blue-800">
            <svg class="text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.3.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.3.desc') }}</p>
        </div>

        <!-- Feature 5: Native WCAG 2.2 -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-emerald-100 dark:border-emerald-800">
            <svg class="text-emerald-600 dark:text-emerald-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.4.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.4.desc') }}</p>
        </div>
        
        <!-- Feature 6: Dashboard Analytics -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-900/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-14 h-14 bg-orange-50 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-orange-100 dark:border-orange-800">
            <svg class="text-orange-600 dark:text-orange-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 relative z-10">{{ t('features.grid.5.title') }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ t('features.grid.5.desc') }}</p>
        </div>

      </div>

      <!-- Deep Dive Section -->
      <div class="bg-brand-900 rounded-[2.5rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl">
        <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gradient-to-br from-accent-400 to-transparent opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-gradient-to-tr from-brand-400 to-transparent opacity-30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="relative z-10 max-w-3xl">
          <h2 class="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{{ t('features.deepDive.title1') }}<br>{{ t('features.deepDive.title2') }}</h2>
          <p class="text-brand-100 text-lg leading-relaxed mb-10">
            {{ t('features.deepDive.desc') }}
          </p>
          <ul class="space-y-4">
            <li class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0">
                <svg class="text-accent-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span class="text-brand-50 font-medium text-[15px]">{{ t('features.deepDive.list.0') }}</span>
            </li>
            <li class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0">
                <svg class="text-accent-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span class="text-brand-50 font-medium text-[15px]">{{ t('features.deepDive.list.1') }}</span>
            </li>
            <li class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0">
                <svg class="text-accent-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span class="text-brand-50 font-medium text-[15px]">{{ t('features.deepDive.list.2') }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
