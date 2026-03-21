import { useTranslation } from 'react-i18next'
import styles from './LifecycleTimeline.module.css'

export function LifecycleTimeline() {
  const { t } = useTranslation()
  const steps = ['1', '2', '3', '4', '5', '6']

  return (
    <div className={styles.wrap} id="lifecycle">
      <div className={styles.desktopHead} aria-hidden>
        <div />
        <div className={styles.h}>{t('lifecycle.columns.phase')}</div>
        <div className={styles.h}>{t('lifecycle.columns.what')}</div>
        <div className={styles.h}>{t('lifecycle.columns.client')}</div>
      </div>

      <div className={styles.rows}>
        {steps.map((k) => (
          <div key={k} className={styles.row}>
            <div className={styles.step}>0{k}</div>
            <div className={styles.phase}>{t(`lifecycle.steps.${k}.phase`)}</div>
            <div className={styles.what}>{t(`lifecycle.steps.${k}.what`)}</div>
            <div className={styles.client}>{t(`lifecycle.steps.${k}.client`)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
