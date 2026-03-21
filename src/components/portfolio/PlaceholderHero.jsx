import { PlaceholderThumb } from './PlaceholderThumb.jsx'
import styles from './PlaceholderHero.module.css'

export function PlaceholderHero({ project }) {
  return (
    <div className={styles.hero}>
      <PlaceholderThumb project={project} className={styles.thumb} />
    </div>
  )
}
