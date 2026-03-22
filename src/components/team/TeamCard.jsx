import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Badge } from '../ui/Badge.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './TeamCard.module.css'

export function TeamCard({ member, reveal = false, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const role = member.role[lang] || member.role['en']

  return (
    <article 
      className={`${styles.card} bz-hover-card ${reveal ? 'bz-reveal' : ''} ${reveal ? `bz-delay-${((index + 1) % 4) * 100}` : ''}`}
    >
      <div className={styles.photoWrap}>
        <img src={member.photo} alt="" className={styles.photo} loading="lazy" />
        {member.isFounder && (
          <div className={styles.founderBadge}>
            Founder
          </div>
        )}
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <div className={styles.role}>{role}</div>
      <div className={styles.skills}>
        {member.skills.map((s) => (
          <Badge key={s} variant="tertiary">
            {s}
          </Badge>
        ))}
      </div>
      <div className={styles.links}>
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={t('social.linkedin')}>
            <Linkedin size={18} />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noreferrer" aria-label={t('social.github')}>
            <Github size={18} />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <Twitter size={18} />
          </a>
        )}
        {member.instagram && (
          <a href={member.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        )}
        {member.facebook && (
          <a href={member.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        )}
      </div>
      <Button to={`/team/${member.slug}`} variant="secondary" className={styles.cta}>
        {t('team.view_profile')}
      </Button>
    </article>
  )
}

