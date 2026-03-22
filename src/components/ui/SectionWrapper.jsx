import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './SectionWrapper.module.css'

export function SectionWrapper({ children, id, className = '', as: Tag = 'section' }) {
  const ref = useScrollAnimation()
  return (
    <Tag ref={ref} id={id} className={`${styles.section} ${className}`.trim()}>
      <div className={styles.inner}>{children}</div>
    </Tag>
  )
}
