import { useTranslation } from 'react-i18next'
import styles from './FilterBar.module.css'

const FILTERS = [
  { id: 'all', key: 'work.filter_all' },
  { id: 'web-app', key: 'work.filter_web' },
  { id: 'mobile', key: 'work.filter_mobile' },
  { id: 'ai', key: 'work.filter_ai' },
  { id: 'extension', key: 'work.filter_extension' },
  { id: 'automation', key: 'work.filter_automation' },
]

export function FilterBar({ active, onChange }) {
  const { t } = useTranslation()

  return (
    <div className={styles.bar} role="tablist" aria-label={t('a11y.portfolio_filter')}>
      {FILTERS.map(({ id, key }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`${styles.pill} ${isActive ? styles.pillActive : ''}`}
            onClick={() => onChange(id)}
          >
            {t(key)}
          </button>
        )
      })}
    </div>
  )
}
