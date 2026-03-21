import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PlaceholderThumb } from './PlaceholderThumb.jsx'
import styles from './ProjectMiniCard.module.css'

export function ProjectMiniCard({ project }) {
  const { t } = useTranslation()
  const thumb = project.thumbnail ? (
    <img src={project.thumbnail} alt="" className={styles.img} loading="lazy" />
  ) : (
    <PlaceholderThumb project={project} className={styles.ph} />
  )

  return (
    <article className={styles.card}>
      <Link to={`/work/${project.slug}`} className={styles.media}>
        {thumb}
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.flag}>{project.clientFlag}</span>
          <span className={styles.region}>{project.clientRegion}</span>
        </div>
        <h3 className={styles.title}>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className={styles.line}>{project.tagline}</p>
        <div className={styles.link}>{t('home.view')} →</div>
      </div>
    </article>
  )
}
