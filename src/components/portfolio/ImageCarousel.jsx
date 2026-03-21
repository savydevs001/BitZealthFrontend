import { useTranslation } from 'react-i18next'
import styles from './ImageCarousel.module.css'

export function ImageCarousel({ images, alt }) {
  const { t } = useTranslation()
  if (!images?.length) return null

  return (
    <div className={styles.wrap} role="region" aria-label={alt || t('a11y.gallery')}>
      <div className={styles.track}>
        {images.map((src, i) => (
          <img key={src} src={src} alt="" className={styles.img} loading="lazy" />
        ))}
      </div>
    </div>
  )
}
