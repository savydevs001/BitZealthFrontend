import { useTranslation } from 'react-i18next'
import { Bot, Globe, Puzzle, Smartphone, Workflow } from 'lucide-react'
import services from '../data/services.json'
import { FAQAccordion } from '../components/ui/FAQAccordion.jsx'
import { LifecycleTimeline } from '../components/ui/LifecycleTimeline.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import styles from './Services.module.css'

const ICONS = {
  Globe,
  Smartphone,
  Bot,
  Puzzle,
  Workflow,
}

export function Services() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead titleKey="seo.services.title" descKey="seo.services.desc" />
      <SectionWrapper>
        <div className={styles.hero}>
          <h1>{t('services.page_title')}</h1>
          <p className={styles.sub}>{t('services.page_sub')}</p>
        </div>

        <div className={styles.blocks}>
          {services.map((s, idx) => {
            const Icon = ICONS[s.icon] || Globe
            const odd = idx % 2 === 1
            return (
              <section key={s.id} id={s.id} className={`${styles.block} ${odd ? styles.blockAlt : ''}`}>
                <div className={styles.icon}>
                  <Icon size={26} />
                </div>
                <div>
                  <h2 className={styles.h2}>{t(s.titleKey)}</h2>
                  <p className={styles.p}>{t(s.descriptionKey)}</p>
                  <ul className={styles.list}>
                    {s.inclusionsKeys.map((k) => (
                      <li key={k}>{t(k)}</li>
                    ))}
                  </ul>
                  <div className={styles.tags}>
                    {s.tags.map((tag) => (
                      <Badge key={tag} variant="tertiary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        <div className={styles.timelineWrap}>
          <h2 className={styles.h2center}>{t('home.lifecycle_preview_title')}</h2>
          <LifecycleTimeline />
        </div>

        <FAQAccordion />

        <div className={styles.bottom}>
          <p className={styles.bottomText}>{t('services.bottom_cta')}</p>
          <Button to="/contact" variant="primary">
            {t('nav.cta')}
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
