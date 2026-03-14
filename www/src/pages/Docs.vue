<template>
  <div class="pt-24 pb-16 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">{{ t('docs.title') }}</h1>
      <div class="prose dark:prose-invert max-w-none">
        <h2 class="dark:text-white">{{ t('docs.quickStart') }}</h2>
        <p class="dark:text-slate-300">{{ t('docs.scriptDesc') }}</p>
        <pre class="bg-slate-900 border border-slate-700 text-slate-100 p-4 rounded-lg"><code>&lt;script src="https://accessfold.unionfold.com/widget/cdn/widget.js"&gt;&lt;/script&gt;
&lt;script&gt;
  AccessibilityFold.init({
    color: '#4f46e5'
  });
&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
