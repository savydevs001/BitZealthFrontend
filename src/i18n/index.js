import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import fr from './fr.json'
import ar from './ar.json'

function readStoredLang() {
  try {
    if (typeof localStorage === 'undefined') return 'en'
    return localStorage.getItem('bz-lang') || 'en'
  } catch {
    return 'en'
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: readStoredLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  // Sync JSON bundles — no Suspense boundary required (avoids blank #root in some webviews)
  react: { useSuspense: false },
})

export default i18n
