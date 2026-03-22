import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { PlaceholderThumb } from './PlaceholderThumb.jsx'
import { Badge } from '../ui/Badge.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project, reveal = false, index = 0 }) {
  const { t } = useTranslation()
  const deployed = project.status === 'deployed'

  const thumb = project.thumbnail ? (
    <img src={project.thumbnail} alt="" className={styles.img} loading="lazy" />
  ) : (
    <PlaceholderThumb project={project} />
  )

  return (
    <article 
      className={`${styles.card} bz-hover-card ${reveal ? 'bz-reveal' : ''} ${reveal ? `bz-delay-${(index % 5 + 1) * 100}` : ''}`}
    >
      <Link to={`/work/${project.slug}`} className={styles.media}>
        {thumb}
      </Link>
      <div className={styles.body}>
        <div className={styles.row}>
          {deployed ? (
            <Badge variant="success" className={styles.status}>
              <span className={styles.pulse} aria-hidden />
              {t('work.deployed')}
            </Badge>
          ) : (
            <Badge variant="tertiary" className={styles.status}>
              {t('work.in_progress')}
            </Badge>
          )}
          <span className={styles.flag} aria-hidden>
            {project.clientFlag}
          </span>
        </div>
        <h3 className={styles.title}>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.tags}>
          {project.categories.map((c) => (
            <Badge key={c} variant="primary">
              {c}
            </Badge>
          ))}
        </div>
        <Button to={`/work/${project.slug}`} variant="ghost" className={styles.cta}>
          {t('home.view')} <ArrowRight size={18} className="bz-icon-flip-rtl" />
        </Button>
      </div>
    </article>
  )
}
