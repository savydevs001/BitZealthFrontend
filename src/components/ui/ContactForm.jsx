import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ContactForm.module.css'

const PROJECT_TYPES = ['web', 'mobile', 'ai', 'automation', 'pos', 'extension', 'unsure']
const BUDGETS = ['u1k', '1to5', '5to20', '20p', 'discuss']

export function ContactForm() {
  const { t } = useTranslation()
  const formId = import.meta.env.VITE_FORMSPREE_CONTACT
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    if (!formId) {
      setError(t('contact.error'))
      setStatus('error')
      return
    }

    setStatus('submitting')
    setError('')

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
      setError(t('contact.error'))
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className={styles.label}>
        <span>{t('contact.name')}</span>
        <input className={styles.input} name="name" type="text" autoComplete="name" required />
      </label>

      <label className={styles.label}>
        <span>{t('contact.email')}</span>
        <input className={styles.input} name="email" type="email" autoComplete="email" required />
      </label>

      <label className={styles.label}>
        <span>{t('contact.project_type')}</span>
        <select className={styles.input} name="project_type" required defaultValue="">
          <option value="" disabled>
            —
          </option>
          {PROJECT_TYPES.map((k) => (
            <option key={k} value={k}>
              {t(`contact.project_types.${k}`)}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        <span>{t('contact.budget')}</span>
        <select className={styles.input} name="budget" defaultValue="">
          <option value="">—</option>
          {BUDGETS.map((k) => (
            <option key={k} value={k}>
              {t(`contact.budgets.${k}`)}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        <span>{t('contact.message')}</span>
        <textarea className={styles.textarea} name="message" rows={6} required />
      </label>

      <input type="text" name="_gotcha" className={styles.hp} tabIndex={-1} autoComplete="off" />

      <button className={styles.submit} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? t('contact.submitting') : t('contact.submit')}
      </button>

      {status === 'success' && <p className={styles.ok}>{t('contact.success')}</p>}
      {status === 'error' && <p className={styles.bad}>{error || t('contact.error')}</p>}
    </form>
  )
}
