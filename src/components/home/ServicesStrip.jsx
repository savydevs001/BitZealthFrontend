import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Bot, Globe, Puzzle, Smartphone, Workflow } from 'lucide-react'
import services from '../../data/services.json'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import styles from './ServicesStrip.module.css'

const ICONS = {
  Globe,
  Smartphone,
  Bot,
  Puzzle,
  Workflow,
}

export function ServicesStrip() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <div className={styles.head}>
        <h2>{t('home.services_title')}</h2>
        <p className={styles.sub}>{t('home.services_sub')}</p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => {
          const Icon = ICONS[s.icon] || Globe
          return (
            <article key={s.id} className={`${styles.card} bz-reveal`}>
              <div className={styles.icon}>
                <Icon size={22} />
              </div>
              <h3 className={styles.title}>{t(s.titleKey)}</h3>
              <p className={styles.desc}>{t(s.summaryKey)}</p>
              <Link to={`/services#${s.id}`} className={styles.more}>
                {t('home.learn_more')} <ArrowRight size={18} className="bz-icon-flip-rtl" />
              </Link>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
