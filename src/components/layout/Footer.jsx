import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin } from 'lucide-react'
import { brand } from '../../config/brand.js'
import { LanguageSwitcher } from '../ui/LanguageSwitcher.jsx'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const links = [
    { to: '/services', key: 'nav.services' },
    { to: '/work', key: 'nav.work' },
    { to: '/products', key: 'nav.products' },
    { to: '/team', key: 'nav.team' },
    { to: '/contact', key: 'nav.contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.brandRow}>
            <img src={brand.logo.src} width={36} height={36} alt="" />
            <div>
              <div className={styles.name}>{brand.nameFull}</div>
              <div className={styles.tagline}>{brand.tagline}</div>
            </div>
          </div>
          <p className={styles.built}>{t('footer.built_in')}</p>
        </div>

        <nav className={styles.nav} aria-label={t('a11y.footer_nav')}>
          {links.map(({ to, key }) => (
            <Link key={to} to={to} className={styles.link}>
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className={styles.social}>
          <a href={brand.socials.linkedin} target="_blank" rel="noreferrer" aria-label={t('social.linkedin')}>
            <Linkedin size={20} />
          </a>
          <a href={brand.socials.github} target="_blank" rel="noreferrer" aria-label={t('social.github')}>
            <Github size={20} />
          </a>
          <LanguageSwitcher compact />
        </div>
      </div>

      <div className={styles.bottom}>
        © {year} {brand.nameFull}. {t('footer.rights')}
      </div>
    </footer>
  )
}
