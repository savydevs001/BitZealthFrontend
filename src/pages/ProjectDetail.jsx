import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import portfolio from '../data/portfolio.json'
import team from '../data/team.json'
import { ImageCarousel } from '../components/portfolio/ImageCarousel.jsx'
import { PlaceholderHero } from '../components/portfolio/PlaceholderHero.jsx'
import { ProjectMiniCard } from '../components/portfolio/ProjectMiniCard.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { Button } from '../components/ui/Button.jsx'
import { TeamMiniCard } from '../components/team/TeamMiniCard.jsx'
import styles from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  const project = portfolio.find((p) => p.slug === slug)

  const projectTeam = useMemo(() => {
    if (!project) return []
    return project.teamSlugs
      .map((s) => team.find((m) => m.slug === s))
      .filter(Boolean)
  }, [project])

  const related = useMemo(() => {
    if (!project) return []
    const cat = project.categories[0]
    return portfolio.filter((p) => p.slug !== project.slug && p.categories.includes(cat)).slice(0, 2)
  }, [project])

  if (!project) {
    return (
      <>
        <SEOHead titleKey="seo.notfound.title" descKey="seo.notfound.desc" />
        <SectionWrapper>
          <h1>{t('not_found.title')}</h1>
          <p>{t('not_found.body')}</p>
          <Button to="/work" variant="primary">
            {t('work.back_to_work')}
          </Button>
        </SectionWrapper>
      </>
    )
  }

  const title = `${project.title} — BitZealth`

  return (
    <>
      <SEOHead title={title} desc={project.tagline} />
      <div className={styles.hero}>
        {project.images?.length ? (
          <img src={project.images[0]} alt="" className={styles.heroImg} loading="eager" />
        ) : (
          <PlaceholderHero project={project} />
        )}
      </div>

      <SectionWrapper>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.k}>{t('work.year')}</span>
            <span className={styles.v}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.k}>{t('work.category')}</span>
            <span className={styles.v}>{project.categories.join(', ')}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.k}>{t('work.region')}</span>
            <span className={styles.v}>
              {project.clientFlag} {project.clientRegion}
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.k}>{t('work.status')}</span>
            <span className={styles.v}>
              {project.status === 'deployed' ? (
                <Badge variant="success">
                  <span className={styles.dot} aria-hidden /> {t('work.deployed')}
                </Badge>
              ) : (
                <Badge variant="tertiary">{t('work.in_progress')}</Badge>
              )}
            </span>
          </div>
          {project.liveUrl ? (
            <Button href={project.liveUrl} variant="primary" className={styles.live}>
              {t('work.visit_live')} <ExternalLink size={18} className="bz-icon-flip-rtl" />
            </Button>
          ) : null}
        </div>

        <h1 className={`${styles.h1} bz-reveal`}>{project.title}</h1>
        <p className={`${styles.tagline} bz-reveal bz-delay-100`}>{project.tagline}</p>

        <div className={`${styles.section} bz-reveal`}>
          <h2 className={styles.h2}>{t('work.problem')}</h2>
          <p className={styles.p}>{project.problem}</p>
        </div>
        <div className={`${styles.section} bz-reveal`}>
          <h2 className={styles.h2}>{t('work.solution')}</h2>
          <p className={styles.p}>{project.solution}</p>
        </div>
        <div className={`${styles.section} bz-reveal`}>
          <h2 className={styles.h2}>{t('work.outcome')}</h2>
          <p className={styles.p}>{project.outcome}</p>
        </div>

        <div className={`${styles.section} bz-reveal`}>
          <h2 className={styles.h2}>{t('work.tech_stack')}</h2>
          <div className={styles.tags}>
            {project.techStack.map((x) => (
              <Badge key={x} variant="primary">
                {x}
              </Badge>
            ))}
          </div>
        </div>

        {project.images?.length ? (
          <div className={`${styles.section} bz-reveal`}>
            <h2 className={styles.h2}>{t('work.gallery')}</h2>
            <ImageCarousel images={project.images} alt={project.title} />
          </div>
        ) : null}

        <div className={`${styles.section} bz-reveal`}>
          <h2 className={styles.h2}>{t('work.who_built')}</h2>
          <div className={styles.teamGrid}>
            {projectTeam.map((m) => (
              <TeamMiniCard key={m.slug} member={m} />
            ))}
          </div>
        </div>

        {related.length ? (
          <div className={`${styles.section} bz-reveal`}>
            <h2 className={styles.h2}>{t('work.related')}</h2>
            <div className={styles.related}>
              {related.map((p) => (
                <ProjectMiniCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        ) : null}

        <div className={styles.back}>
          <Button to="/work" variant="outline">
            ← {t('nav.work')}
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
