import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Linkedin } from 'lucide-react'
import styles from './TeamMiniCard.module.css'

export function TeamMiniCard({ member }) {
  const { t } = useTranslation()

  return (
    <article className={styles.card}>
      <Link to={`/team/${member.slug}`} className={styles.row}>
        <img src={member.photo} alt="" className={styles.photo} loading="lazy" />
        <div>
          <div className={styles.name}>{member.name}</div>
          <div className={styles.role}>{t(member.roleKey)}</div>
        </div>
      </Link>
      <a href={member.linkedin} target="_blank" rel="noreferrer" className={styles.in}>
        <Linkedin size={18} /> {t('social.linkedin')}
      </a>
    </article>
  )
}
