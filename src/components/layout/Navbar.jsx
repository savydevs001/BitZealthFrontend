import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { brand } from '../../config/brand.js'
import { LanguageSwitcher } from '../ui/LanguageSwitcher.jsx'
import { Button } from '../ui/Button.jsx'
import styles from './Navbar.module.css'

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { to: '/services', key: 'nav.services' },
    { to: '/work', key: 'nav.work' },
    { to: '/products', key: 'nav.products' },
    { to: '/team', key: 'nav.team' },
    { to: '/contact', key: 'nav.contact' },
  ]

  return (
    <header className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src={brand.logo.src} width={brand.logo.width} height={brand.logo.height} alt="" />
          <span>{brand.nameFull}</span>
        </Link>

        <nav className={styles.nav} aria-label={t('a11y.primary_nav')}>
          {links.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {t(key)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <Button to="/contact" variant="primary" className={`${styles.cta} bz-btn-premium`}>
            {t('nav.cta')}
          </Button>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? t('nav.menu_close') : t('nav.menu_open')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <div className={styles.drawerInner}>
          {links.map(({ to, key }) => (
            <Link key={to} to={to} className={styles.drawerLink} onClick={() => setOpen(false)}>
              {t(key)}
            </Link>
          ))}
          <div className={styles.drawerLang}>
            <LanguageSwitcher />
          </div>
          <Button to="/contact" variant="primary" className={`${styles.drawerCta} bz-btn-premium`} onClick={() => setOpen(false)}>
            {t('nav.cta')}
          </Button>
        </div>
      </div>
    </header>
  )
}
