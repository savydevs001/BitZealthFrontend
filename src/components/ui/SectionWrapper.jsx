import styles from './SectionWrapper.module.css'

export function SectionWrapper({ children, id, className = '', as: Tag = 'section' }) {
  return (
    <Tag id={id} className={`${styles.section} ${className}`.trim()}>
      <div className={styles.inner}>{children}</div>
    </Tag>
  )
}
