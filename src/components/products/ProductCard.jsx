import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from '../ui/Badge.jsx'
import styles from './ProductCard.module.css'

export function ProductCard({ product }) {
  const { t } = useTranslation()
  const formId = import.meta.env.VITE_FORMSPREE_PRODUCT
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    if (!formId) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('bad')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h2 className={styles.title}>{t(product.nameKey)}</h2>
        <Badge variant="accent">{t('products.status_coming_soon')}</Badge>
      </div>

      <p className={styles.p}>{t(product.descriptionKey)}</p>
      <p className={styles.audience}>{t(product.audienceKey)}</p>

      <ul className={styles.list}>
        {product.featuresKeys.map((k) => (
          <li key={k}>{t(k)}</li>
        ))}
      </ul>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.sr} htmlFor="product-email">
          {t('contact.aside_email')}
        </label>
        <div className={styles.row}>
          <input
            id="product-email"
            className={styles.input}
            type="email"
            name="email"
            placeholder={t('products.email_placeholder')}
            required
            autoComplete="email"
          />
          <button className={styles.btn} type="submit" disabled={status === 'submitting'}>
            {t('products.notify_cta')}
          </button>
        </div>
        <input type="hidden" name="_subject" value={t('products.form_subject')} />
        <input type="text" name="_gotcha" className={styles.hp} tabIndex={-1} autoComplete="off" />
      </form>

      {status === 'success' && <p className={styles.ok}>{t('products.notify_success')}</p>}
      {status === 'error' && <p className={styles.bad}>{t('products.notify_error')}</p>}
    </div>
  )
}
