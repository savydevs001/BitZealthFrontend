import {
  Bot,
  Globe,
  Puzzle,
  Smartphone,
  Workflow,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '../ui/Badge.jsx'
import styles from './PlaceholderThumb.module.css'

const GRADIENTS = {
  'web-app': ['#7C3AED', '#06B6D4'],
  mobile: ['#EC4899', '#7C3AED'],
  ai: ['#06B6D4', '#A78BFA'],
  extension: ['#A78BFA', '#EC4899'],
  automation: ['#7C3AED', '#EC4899'],
}

const ICONS = {
  'web-app': Globe,
  mobile: Smartphone,
  ai: Bot,
  extension: Puzzle,
  automation: Workflow,
}

export function PlaceholderThumb({ project, className = '' }) {
  const { t } = useTranslation()
  const cat = project.categories?.[0] || 'web-app'
  const [a, b] = GRADIENTS[cat] || GRADIENTS['web-app']
  const Icon = ICONS[cat] || Globe
  const deployed = project.status === 'deployed'

  return (
    <div
      className={`${styles.wrap} ${className}`.trim()}
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      <div className={styles.noise} aria-hidden />
      <div className={styles.top}>
        {deployed && (
          <span className={styles.live} title={t('work.deployed')}>
            <span className={styles.dot} />
          </span>
        )}
        <Icon className={styles.catIcon} size={22} strokeWidth={1.75} />
      </div>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.meta}>
        <span className={styles.flag}>{project.clientFlag}</span>
        <span className={styles.region}>{project.clientRegion}</span>
      </div>
      <div className={styles.pills}>
        {(project.techStack || []).slice(0, 4).map((t) => (
          <Badge key={t} variant="neutral" className={styles.pill}>
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}
