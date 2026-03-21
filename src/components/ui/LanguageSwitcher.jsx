import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'ع' },
]

export function LanguageSwitcher({ compact = false }) {
  const { t, i18n } = useTranslation()

  return (
    <div className={`${styles.row} ${compact ? styles.compact : ''}`} role="group" aria-label={t('a11y.language')}>
      {LANGS.map(({ code, label }) => {
        const active = i18n.language === code
        return (
          <button
            key={code}
            type="button"
            className={`${styles.pill} ${active ? styles.active : ''}`}
            onClick={() => i18n.changeLanguage(code)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
