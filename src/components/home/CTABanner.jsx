import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button.jsx'
import styles from './CTABanner.module.css'

export function CTABanner() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('a11y.cta_banner')}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>{t('home.cta_banner_title')}</h2>
        <p className={styles.sub}>{t('home.cta_banner_sub')}</p>
        <Button to="/contact" variant="primary" className={styles.btn}>
          {t('hero.cta_primary')}
        </Button>
      </div>
    </section>
  )
}
