import { useTranslation } from 'react-i18next'
import portfolio from '../../data/portfolio.json'
import { ProjectCard } from '../portfolio/ProjectCard.jsx'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './FeaturedWork.module.css'

export function FeaturedWork() {
  const { t } = useTranslation()
  const featured = portfolio.filter((p) => p.featured).slice(0, 3)

  return (
    <SectionWrapper>
      <div className={styles.head}>
        <h2>{t('home.featured_title')}</h2>
        <p className={styles.sub}>{t('home.featured_sub')}</p>
      </div>

      <div className={styles.grid}>
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} reveal />
        ))}
      </div>

      <div className={styles.cta}>
        <Button to="/work" variant="outline">
          {t('home.see_all_work')} →
        </Button>
      </div>
    </SectionWrapper>
  )
}
