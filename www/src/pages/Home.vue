<template>
  <div class="overflow-hidden bg-brand-50 dark:bg-slate-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <!-- Animated Background Effects -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-400 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 dark:opacity-20 animate-blob"></div>
        <div class="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-400 dark:bg-brand-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-20 animate-blob" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-accent-300 dark:bg-accent-800 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 dark:opacity-10 animate-blob" style="animation-delay: 4s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white/40 dark:border-slate-700 shadow-sm backdrop-blur-md text-sm font-medium text-brand-700 dark:text-brand-300 animate-float-delayed">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {{ t('home.hero.badge') }}
        </div>
        
        <h1 class="font-display text-5xl md:text-7xl font-extrabold text-brand-900 dark:text-white tracking-tight leading-[1.1] mb-6 animate-float">
          {{ t('home.hero.title1') }}<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">{{ t('home.hero.title2') }}</span>
        </h1>
        
        <p class="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-brand-600 dark:text-brand-300 mb-10 leading-relaxed font-sans">
          {{ t('home.hero.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a href="http://localhost:3000/auth/register" class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-brand-600 dark:bg-brand-500 rounded-xl overflow-hidden shadow-glow hover:shadow-glass hover:bg-brand-500 transition-all duration-300 ease-in-out hover:-translate-y-1">
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span class="relative">{{ t('home.hero.cta1') }}</span>
          </a>
          <router-link to="/features" class="inline-flex items-center justify-center px-8 py-4 font-bold text-brand-700 dark:text-brand-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/60 dark:border-slate-700 text-brand-700 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-glass hover:-translate-y-1">
            {{ t('home.hero.cta2') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-12 border-y border-brand-200/50 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm relative z-10">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-widest mb-8">{{ t('home.proof.label') }}</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 dark:opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           <!-- Placeholder Logos -->
           <h3 class="text-2xl font-display font-bold text-brand-800 dark:text-white">Acme Corp</h3>
           <h3 class="text-2xl font-display font-bold text-brand-800 dark:text-white">GlobalTech</h3>
           <h3 class="text-2xl font-display font-bold text-brand-800 dark:text-white">NexGen Systems</h3>
           <h3 class="text-2xl font-display font-bold text-brand-800 dark:text-white">Stratos</h3>
        </div>
      </div>
    </section>

    <!-- Value Proposition Grid -->
    <section class="py-24 relative z-10">
       <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
             <h2 class="font-display text-4xl font-bold text-brand-900 dark:text-white mb-4">{{ t('home.value.title') }}</h2>
             <p class="text-xl text-brand-600 dark:text-brand-300 max-w-2xl mx-auto">{{ t('home.value.subtitle') }}</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
             <div class="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 dark:border-slate-700 shadow-glass hover:shadow-glass-hover hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-900 dark:to-accent-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-300 mb-6 shadow-sm border border-white dark:border-slate-700">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                </div>
                <h3 class="font-display text-2xl font-bold text-brand-900 dark:text-white mb-3">{{ t('home.value.boxes.0.title') }}</h3>
                <p class="text-brand-600 dark:text-brand-400 leading-relaxed">{{ t('home.value.boxes.0.desc') }}</p>
             </div>
             
             <div class="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 dark:border-slate-700 shadow-glass hover:shadow-glass-hover hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-900 dark:to-accent-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-300 mb-6 shadow-sm border border-white dark:border-slate-700">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 class="font-display text-2xl font-bold text-brand-900 dark:text-white mb-3">{{ t('home.value.boxes.1.title') }}</h3>
                <p class="text-brand-600 dark:text-brand-400 leading-relaxed">{{ t('home.value.boxes.1.desc') }}</p>
             </div>
             
             <div class="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 dark:border-slate-700 shadow-glass hover:shadow-glass-hover hover:-translate-y-2 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-900 dark:to-accent-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-300 mb-6 shadow-sm border border-white dark:border-slate-700">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
                </div>
                <h3 class="font-display text-2xl font-bold text-brand-900 dark:text-white mb-3">{{ t('home.value.boxes.2.title') }}</h3>
                <p class="text-brand-600 dark:text-brand-400 leading-relaxed">{{ t('home.value.boxes.2.desc') }}</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Integration CTA: Interactive Tabs -->
    <section class="py-24 relative z-10 bg-gradient-to-b from-transparent to-brand-100 dark:to-brand-900">
       <div class="max-w-4xl mx-auto px-4">
         <div class="text-center mb-10">
           <h2 class="font-display text-4xl font-bold text-brand-900 dark:text-white mb-4">{{ t('home.integration.title') }}</h2>
           <p class="text-xl text-brand-600 dark:text-brand-300">{{ t('home.integration.subtitle') }}</p>
         </div>

         <!-- Interactive Tab Control -->
         <div class="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-2 rounded-2xl border border-white dark:border-slate-700 max-w-lg mx-auto mb-8 shadow-sm flex items-center justify-center gap-1">
            <button 
              v-for="tab in installationTabs" 
              :key="tab.id"
              @click="activeInstallTab = tab.id"
              :class="[
                'flex-1 px-4 py-3 rounded-xl font-medium text-[15px] transition-all duration-300',
                activeInstallTab === tab.id 
                  ? 'bg-white dark:bg-slate-700 text-brand-900 dark:text-white shadow-sm border border-brand-100 dark:border-slate-600' 
                  : 'text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700 border border-transparent'
              ]"
            >
              {{ tab.label }}
            </button>
         </div>

         <!-- Dynamic Code Window -->
         <div class="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden relative">
            <!-- Mac OS window dots -->
            <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
               <div class="w-3 h-3 rounded-full bg-red-500"></div>
               <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div class="w-3 h-3 rounded-full bg-green-500"></div>
               <span class="ml-4 text-xs font-mono text-slate-400 select-none">{{ activeTabData.filename }}</span>
            </div>
            
            <div class="p-6 relative">
              <pre class="font-mono text-[14px] leading-relaxed overflow-x-auto text-emerald-400 whitespace-pre-wrap"><code>{{ activeTabData.code }}</code></pre>

              <button 
                @click="copyCode(activeTabData.code)"
                class="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium border border-slate-600 flex items-center gap-2"
              >
                <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                {{ copied ? t('home.integration.copied') : t('home.integration.copy') }}
              </button>
            </div>
         </div>

       </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { ref, computed } from 'vue';
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// Implementation Tabs Logic
const activeInstallTab = ref('npm');
const copied = ref(false);

const installationTabs = [
  {
    id: 'npm',
    label: 'npm',
    filename: 'terminal',
    code: 'npm install accessibility-fold-widget'
  },
  {
    id: 'html',
    label: 'HTML / Webflow',
    filename: 'index.html',
    code: '<!-- Insert before closing </body> tag -->\n<script src="https://accessfold.unionfold.com/widget/cdn/widget.js"><\/script>\n<script>\n  AccessibilityFold.init({\n    clientId: "YOUR_API_KEY"\n  });\n<\/script>'
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    filename: 'functions.php',
    code: '// Add to your child-theme functions.php or use a snippet plugin\nadd_action("wp_footer", function() {\n  echo \'<script src="https://accessfold.unionfold.com/widget/cdn/widget.js"><\/script>\';\n  echo \'<script>AccessibilityFold.init({ clientId: "WP_KEY" });<\/script>\';\n});'
  }
];

const activeTabData = computed(() => {
  return installationTabs.find(tab => tab.id === activeInstallTab.value);
});

const copyCode = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>
