import { useTranslation } from 'react-i18next'
import { brand } from '../config/brand.js'
import { ContactForm } from '../components/ui/ContactForm.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import { Button } from '../components/ui/Button.jsx'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead titleKey="seo.contact.title" descKey="seo.contact.desc" />
      <SectionWrapper>
        <div className={styles.head}>
          <h1>{t('contact.title')}</h1>
          <p className={styles.opener}>{t('contact.opener')}</p>
        </div>

        <div className={styles.grid}>
          <aside className={styles.aside}>
            <div className={styles.block}>
              <div className={styles.k}>{t('contact.aside_email')}</div>
              <a className={styles.a} href={`mailto:${brand.contact.email}`}>
                {brand.contact.email}
              </a>
            </div>

            <div className={styles.block}>
              <div className={styles.k}>{t('contact.aside_location')}</div>
              <div className={styles.v}>{brand.contact.location}</div>
            </div>

            <div className={styles.row}>
              <Button href={brand.socials.linkedin} variant="outline">
                {t('social.linkedin')}
              </Button>
              <Button href={brand.socials.github} variant="outline">
                {t('social.github')}
              </Button>
            </div>

            <div className={styles.row}>
              {brand.socials.upwork ? (
                <Button href={brand.socials.upwork} variant="secondary">
                  {t('contact.upwork')}
                </Button>
              ) : null}
              {brand.socials.fiverr ? (
                <Button href={brand.socials.fiverr} variant="secondary">
                  {t('contact.fiverr')}
                </Button>
              ) : null}
            </div>

            {brand.contact.calendly ? (
              <Button href={brand.contact.calendly} variant="primary">
                {t('contact.book')}
              </Button>
            ) : null}
          </aside>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
