<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-brand-200/60 dark:border-slate-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div class="col-span-2 md:col-span-1">
           <div class="flex items-center gap-2 mb-4 dark:text-white">
             <div class="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                <img src="/logo/AccessFold_Logo_Default.png" alt="AccessFold Logo" class="h-9 w-auto object-contain" />
              </div>
              AccessFold
          </div>
          <p class="text-brand-500 dark:text-slate-400 text-[15px] leading-relaxed" v-html="t('footer.tagline')"></p>
        </div>
        
        <div>
          <h3 class="font-display text-sm font-bold text-brand-900 dark:text-white tracking-wider uppercase mb-5">{{ t('footer.product') }}</h3>
          <ul class="space-y-4">
            <li><router-link to="/features" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.links.features') }}</router-link></li>
            <li><router-link to="/pricing" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.links.pricing') }}</router-link></li>
            <li><router-link to="/integrations" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.links.integrations') }}</router-link></li>
            <li><router-link to="/widget" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.links.widget') }}</router-link></li>
          </ul>
        </div>

        <div>
           <h3 class="font-display text-sm font-bold text-brand-900 dark:text-white tracking-wider uppercase mb-5">{{ t('footer.resources') }}</h3>
           <ul class="space-y-4">
             <li><router-link to="/docs" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.resourcesLinks.docs') }}</router-link></li>
             <li><router-link to="/compliance" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.resourcesLinks.compliance') }}</router-link></li>
             <li><router-link to="/blog" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.resourcesLinks.blog') }}</router-link></li>
           </ul>
        </div>
        
        <div>
           <h3 class="font-display text-sm font-bold text-brand-900 dark:text-white tracking-wider uppercase mb-5">{{ t('footer.company') }}</h3>
           <ul class="space-y-4">
             <li><router-link to="/about" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.companyLinks.about') }}</router-link></li>
             <li><router-link to="/contact" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.companyLinks.contact') }}</router-link></li>
             <li><a href="#" class="text-[15px] text-brand-500 dark:text-slate-400 hover:text-brand-800 dark:hover:text-white transition-colors">{{ t('footer.companyLinks.legal') }}</a></li>
           </ul>
        </div>
      </div>
      <div class="mt-16 border-t border-brand-200/60 dark:border-slate-800 pt-8 flex justify-between items-center">
        <p class="text-brand-400 dark:text-slate-500 text-sm">{{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
