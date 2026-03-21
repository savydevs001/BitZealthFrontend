import { useTranslation } from 'react-i18next'
import { Lock } from 'lucide-react'
import products from '../data/products.json'
import { ProductCard } from '../components/products/ProductCard.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import styles from './Products.module.css'

export function Products() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead titleKey="seo.products.title" descKey="seo.products.desc" />
      <SectionWrapper>
        <div className={styles.hero}>
          <h1>{t('products.page_title')}</h1>
          <p className={styles.sub}>{t('products.page_sub')}</p>
          <p className={styles.line}>{t('products.page_hero_line')}</p>
        </div>

        <ProductCard product={products.pos} />

        <h2 className={styles.h2}>{t('products.future_title')}</h2>
        <div className={styles.future}>
          {products.future.map((p) => (
            <div key={p.id} className={styles.fcard}>
              <Lock size={18} aria-hidden />
              <div className={styles.ftitle}>{t(p.titleKey)}</div>
              <div className={styles.fmeta}>{t('products.locked')}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
