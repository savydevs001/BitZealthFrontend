import { useTranslation } from 'react-i18next'
import { Lightbulb, Wrench, Rocket } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import styles from './CompleteSolutionStrip.module.css'

export function CompleteSolutionStrip() {
  const { t } = useTranslation()

  const items = [
    { icon: Lightbulb, title: t('solution_strip.step1') },
    { icon: Wrench, title: t('solution_strip.step2') },
    { icon: Rocket, title: t('solution_strip.step3') },
  ]

  return (
    <SectionWrapper className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.h2}>{t('solution_strip.headline')}</h2>
        <div className={styles.grid}>
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className={styles.item}>
              <div className={styles.icon}>
                <Icon size={22} />
              </div>
              <div className={styles.title}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
