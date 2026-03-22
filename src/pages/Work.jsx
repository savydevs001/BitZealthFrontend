import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import portfolio from '../data/portfolio.json'
import { useFilter } from '../hooks/useFilter.js'
import { FilterBar } from '../components/portfolio/FilterBar.jsx'
import { ProjectCard } from '../components/portfolio/ProjectCard.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import styles from './Work.module.css'

export function Work() {
  const { t } = useTranslation()
  const getCategories = useMemo(() => (p) => p.categories, [])

  const { filter, setFilter, filtered } = useFilter(portfolio, getCategories)

  return (
    <>
      <SEOHead titleKey="seo.work.title" descKey="seo.work.desc" />
      <SectionWrapper>
        <div className={styles.head}>
          <h1>{t('work.title')}</h1>
          <p className={styles.sub}>{t('work.sub')}</p>
        </div>

        <FilterBar active={filter} onChange={setFilter} />

        <div className={styles.grid} key={filter} data-filter={filter}>
          {filtered.map((p, idx) => (
            <div key={p.slug} className={styles.cell}>
              <ProjectCard project={p} reveal index={idx} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
