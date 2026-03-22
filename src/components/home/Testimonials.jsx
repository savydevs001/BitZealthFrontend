import { useTranslation } from 'react-i18next'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import styles from './Testimonials.module.css'

const MARKETS = [
  { flag: '🇬🇧', region: 'United Kingdom' },
  { flag: '🇺🇸', region: 'United States' },
  { flag: '🇦🇪', region: 'UAE' },
  { flag: '🇩🇪', region: 'Germany' },
  { flag: '🇫🇷', region: 'France' },
  { flag: '🇳🇬', region: 'Nigeria' },
  { flag: '🇸🇦', region: 'Saudi Arabia' },
  { flag: '🇨🇦', region: 'Canada' },
  { flag: '🇦🇺', region: 'Australia' },
  { flag: '🇳🇱', region: 'Netherlands' },
]

const PLATFORMS = ['Upwork', 'Fiverr', 'Direct', 'LinkedIn']

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <div className={styles.trustHeader}>
        <h2 className={styles.h2}>{t('home.testimonials_title')}</h2>
        <p className={styles.trustSub}>
          Clients from 15+ countries — finding us on Upwork, Fiverr, and LinkedIn.
        </p>
      </div>

      <div className={`${styles.flagStrip} bz-reveal`}>
        {MARKETS.map((m) => (
          <div key={m.region} className={styles.flagItem}>
            <span className={styles.flag} aria-hidden>{m.flag}</span>
            <span className={styles.regionLabel}>{m.region}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.platformRow} bz-reveal`}>
        {PLATFORMS.map((p) => (
          <span key={p} className={styles.platformBadge}>{p}</span>
        ))}
      </div>
    </SectionWrapper>
  )
}
