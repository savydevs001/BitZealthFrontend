import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { brand } from '../../config/brand.js'
import stats from '../../data/stats.json'
import { Button } from '../ui/Button.jsx'
import { AnimatedNumber } from '../ui/AnimatedNumber.jsx'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const { t } = useTranslation()
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={styles.hero}>
      <div 
        className={styles.glow} 
        aria-hidden
        style={{ 
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.12), transparent 50%)` 
        }}
      />
      <div className={styles.blob} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.inner}>
        <div className={`${styles.copy} reveal`}>
          <h1 className={styles.h1}>{t('hero.title')}</h1>
          <p className={styles.trust}>{t('hero.trust')}</p>
          <p className={styles.sub}>{t('hero.sub')}</p>
          <div className={styles.ctas}>
            <Button to="/contact" variant="primary">
              {t('hero.cta_primary')}
            </Button>
            <Button to="/work" variant="outline">
              {t('hero.cta_secondary')}
            </Button>
          </div>

          <div className={styles.stats} aria-label={t('a11y.stats')}>
            {stats.map((s) => (
              <div key={s.id} className={styles.stat}>
                <div className={styles.statNum}>
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <div className={styles.statLabel}>{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.art} aria-hidden>
          <div className={`${styles.logoMark} bz-animate-float`}>
            <img src={brand.logo.src} width={120} height={120} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
