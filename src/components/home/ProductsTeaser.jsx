import { useTranslation } from 'react-i18next'
import { SectionWrapper } from '../ui/SectionWrapper.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './ProductsTeaser.module.css'

export function ProductsTeaser() {
  const { t } = useTranslation()

  return (
    <SectionWrapper className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>{t('home.products_teaser_title')}</h2>
        <p className={styles.sub}>{t('home.products_teaser_sub')}</p>
        <Button to="/products" variant="primary">
          {t('home.products_teaser_cta')} →
        </Button>
      </div>
    </SectionWrapper>
  )
}
