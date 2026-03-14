import { ref, computed } from 'vue'
import { DICTIONARY } from '../utils/dictionary'

const currentLocale = ref('en')

export function useI18n() {
  const locale = computed(() => currentLocale.value)

  const setLocale = (lang) => {
    currentLocale.value = lang
    if (typeof window !== 'undefined') {
      localStorage.setItem('af-locale', lang)
    }
  }

  // Initialize from localStorage on client
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('af-locale')
    if (saved && ['en', 'el', 'nl'].includes(saved)) {
      currentLocale.value = saved
    }
  }

  /**
   * Access a translation by dot-notation key, e.g. t('nav.features')
   */
  const t = (key) => {
    const keys = key.split('.')
    let result = DICTIONARY[currentLocale.value]
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key // fallback: return the key itself
      }
    }
    return typeof result === 'string' ? result : key
  }

  return { t, locale, setLocale }
}
