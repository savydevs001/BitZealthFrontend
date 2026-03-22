import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin } from 'lucide-react'
import { Badge } from '../ui/Badge.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './TeamCard.module.css'

export function TeamCard({ member, reveal = false, index = 0 }) {
  const { t } = useTranslation()

  return (
    <article 
      className={`${styles.card} bz-hover-card ${reveal ? 'bz-reveal' : ''} ${reveal ? `bz-delay-${((index + 1) % 4) * 100}` : ''}`}
    >
      <div className={styles.photoWrap}>
        <img src={member.photo} alt="" className={styles.photo} loading="lazy" />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <div className={styles.role}>{t(member.roleKey)}</div>
      <div className={styles.skills}>
        {member.skills.map((s) => (
          <Badge key={s} variant="tertiary">
            {s}
          </Badge>
        ))}
      </div>
      <div className={styles.links}>
        <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={t('social.linkedin')}>
          <Linkedin size={18} />
        </a>
        <a href={member.github} target="_blank" rel="noreferrer" aria-label={t('social.github')}>
          <Github size={18} />
        </a>
      </div>
      <Button to={`/team/${member.slug}`} variant="secondary" className={styles.cta}>
        {t('team.view_profile')}
      </Button>
    </article>
  )
}
