import { useTranslation } from 'react-i18next'
import testimonials from '../../data/testimonials.json'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import { Badge } from '../ui/Badge.jsx'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <h2 className={styles.h2}>{t('home.testimonials_title')}</h2>
      <div className={styles.grid}>
        {testimonials.map((x) => (
          <figure key={x.id} className={`${styles.card} bz-reveal`}>
            <blockquote className={styles.quote}>{t(x.quoteKey)}</blockquote>
            <figcaption className={styles.meta}>
              <span className={styles.name}>{x.name}</span>
              <span className={styles.flag} aria-hidden>
                {x.flag}
              </span>
              <Badge variant="primary">{x.platform}</Badge>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
