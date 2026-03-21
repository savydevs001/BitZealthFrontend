import { useTranslation } from 'react-i18next'
import { GitBranch, Globe, Lightbulb, ShieldCheck, Users, Zap } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import styles from './WhyBitZealth.module.css'

const ICONS = [Lightbulb, GitBranch, Globe, ShieldCheck, Zap, Users]

export function WhyBitZealth() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <h2 className={styles.h2}>{t('home.why_title')}</h2>
      <div className={styles.grid}>
        {ICONS.map((Icon, idx) => {
          const key = String(idx + 1)
          return (
            <article key={key} className={`${styles.card} bz-reveal`}>
              <div className={styles.icon}>
                <Icon size={22} />
              </div>
              <h3 className={styles.title}>{t(`value_props.${key}.title`)}</h3>
              <p className={styles.body}>{t(`value_props.${key}.body`)}</p>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
