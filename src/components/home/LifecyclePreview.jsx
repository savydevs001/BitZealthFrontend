import { useTranslation } from 'react-i18next'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './LifecyclePreview.module.css'

export function LifecyclePreview() {
  const { t } = useTranslation()

  const steps = ['1', '2', '3', '4']

  return (
    <SectionWrapper>
      <div className={styles.head}>
        <h2>{t('home.lifecycle_preview_title')}</h2>
        <p className={styles.sub}>{t('home.lifecycle_preview_sub')}</p>
      </div>

      <div className={styles.track}>
        {steps.map((k, i) => (
          <div key={k} className={`${styles.step} bz-reveal`}>
            <div className={styles.num}>0{k}</div>
            <div className={styles.phase}>{t(`lifecycle.preview.${k}.phase`)}</div>
            <div className={styles.line}>{t(`lifecycle.preview.${k}.line`)}</div>
            {i < steps.length - 1 && <div className={styles.connector} aria-hidden />}
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <Button to="/services#lifecycle" variant="secondary">
          {t('home.lifecycle_cta')} →
        </Button>
      </div>
    </SectionWrapper>
  )
}
