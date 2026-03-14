<template>
  <header class="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-brand-200/50 dark:border-slate-800 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 flex items-center justify-center text-white">
              <img src="/logo/AccessFold_Logo_Default.png" alt="AccessFold Logo" class="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            </div>
            <span class="dark:text-white font-bold text-lg">AccessFold</span>
          </router-link>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-10">
          <router-link to="/features" class="text-brand-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium transition-colors text-[15px]">
            {{ t('nav.features') }}
          </router-link>
          <router-link to="/pricing" class="text-brand-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium transition-colors text-[15px]">
            {{ t('nav.pricing') }}
          </router-link>
          <router-link to="/docs" class="text-brand-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium transition-colors text-[15px]">
            {{ t('nav.developers') }}
          </router-link>
          <router-link to="/compliance" class="text-brand-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium transition-colors text-[15px]">
            {{ t('nav.compliance') }}
          </router-link>
        </nav>

        <!-- CTA & User Menu -->
        <div class="flex items-center space-x-4 relative">
          
          <button @click="toggleMenu" class="p-2 text-brand-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-full transition-colors relative z-10" aria-label="User Menu">
            <CircleUserRound class="w-6 h-6" />
          </button>
          
          <!-- User Menu Dropdown -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="isMenuOpen" class="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 p-2">
              
              <!-- Quick Links -->
              <div class="p-2 space-y-1">
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <LayoutDashboard class="w-4 h-4 text-slate-400" />
                  {{ t('menu.dashboard') }}
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <Settings class="w-4 h-4 text-slate-400" />
                  {{ t('menu.settings') }}
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <LifeBuoy class="w-4 h-4 text-slate-400" />
                  {{ t('menu.help') }}
                </a>
              </div>

              <div class="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>

              <!-- Theme Switcher -->
              <div class="p-2">
                <div class="px-3 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{{ t('menu.theme') }}</div>
                <button @click="toggleDark()" class="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <span class="flex items-center gap-3">
                    <Sun v-if="!isDark" class="w-4 h-4 text-amber-500" />
                    <Moon v-else class="w-4 h-4 text-blue-400" />
                    {{ isDark ? t('menu.darkMode') : t('menu.lightMode') }}
                  </span>
                  <div class="w-8 h-4 bg-slate-200 dark:bg-slate-700 rounded-full relative transition-colors duration-300 flex items-center">
                    <div :class="['w-3 h-3 bg-white rounded-full absolute transition-transform duration-300', isDark ? 'translate-x-[18px]' : 'translate-x-[2px]']"></div>
                  </div>
                </button>
              </div>

              <div class="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>

              <!-- Language Selector -->
              <div class="p-2">
                <div class="px-3 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{{ t('menu.language') }}</div>
                <div class="flex gap-1">
                  <button @click="setLocale('en')" :class="['flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors', locale === 'en' ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800']">
                    <span class="text-lg">🇬🇧</span>
                    <span class="text-[10px] mt-1 font-medium">EN</span>
                  </button>
                  <button @click="setLocale('el')" :class="['flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors', locale === 'el' ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800']">
                    <span class="text-lg">🇬🇷</span>
                    <span class="text-[10px] mt-1 font-medium">EL</span>
                  </button>
                  <button @click="setLocale('nl')" :class="['flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors', locale === 'nl' ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800']">
                    <span class="text-lg">🇳🇱</span>
                    <span class="text-[10px] mt-1 font-medium">NL</span>
                  </button>
                </div>
              </div>

              <div class="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>

              <!-- Actions (Login & Get Started) -->
              <div class="p-2 space-y-1">
                <a href="http://localhost:3000/auth/login" class="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <LogIn class="w-4 h-4 text-slate-400" />
                  {{ t('nav.login') }}
                </a>
                <a href="http://localhost:3000/auth/register" class="flex items-center justify-between px-3 py-2 text-sm bg-brand-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-800 dark:hover:bg-slate-100 rounded-lg transition-colors font-medium mt-1 group">
                  <span class="flex items-center gap-2">
                    <Rocket class="w-4 h-4" />
                    {{ t('nav.getStarted') }}
                  </span>
                  <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Transition>

        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from '@/composables/useI18n'
import { 
  CircleUserRound, 
  Sun, 
  Moon, 
  LayoutDashboard, 
  Settings, 
  LifeBuoy,
  LogIn,
  Rocket,
  ArrowRight
} from 'lucide-vue-next'

const { t, locale, setLocale } = useI18n()
const isMenuOpen = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenuIfClickedOutside = (event) => {
  if (isMenuOpen.value && !event.target.closest('.user-dropdown-container')) {
    // We add a wrapper class or check if the click target is outside the header entirely. 
    // Usually clicking outside dropdown closes it.
    if(!event.target.closest('header')) {
       isMenuOpen.value = false;
    }
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenuIfClickedOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuIfClickedOutside)
})
</script>
