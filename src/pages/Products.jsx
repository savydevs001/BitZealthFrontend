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
        <div className={`${styles.hero} bz-reveal`}>
          <h1>{t('products.page_title')}</h1>
          <p className={styles.sub}>{t('products.page_sub')}</p>
          <p className={`${styles.line} bz-reveal bz-delay-200`}>{t('products.page_hero_line')}</p>
        </div>

        <ProductCard product={products.pos} reveal />

        <h2 className={styles.h2}>{t('products.future_title')}</h2>
        <div className={styles.future}>
          {products.future.map((p, idx) => (
            <div key={p.id} className={`${styles.fcard} bz-reveal bz-delay-${((idx + 1) % 4) * 200}`}>
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
