import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import faqs from '../../data/faqs.json'
import styles from './FAQAccordion.module.css'

export function FAQAccordion() {
  const { t } = useTranslation()
  const baseId = useId()
  const [openId, setOpenId] = useState(faqs[0]?.id)

  return (
    <div className={styles.wrap}>
      <h2 className={styles.h2} id={`${baseId}-title`}>
        {t('faq.title')}
      </h2>
      <div className={styles.list} role="list">
        {faqs.map((item) => {
          const expanded = openId === item.id
          const panelId = `${baseId}-panel-${item.id}`
          const buttonId = `${baseId}-btn-${item.id}`

          return (
            <div key={item.id} className={styles.item} role="listitem">
              <button
                id={buttonId}
                type="button"
                className={styles.q}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenId(expanded ? null : item.id)}
              >
                <span>{t(item.questionKey)}</span>
                <span className={styles.chev} aria-hidden>
                  {expanded ? '−' : '+'}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!expanded}
                className={`${styles.a} ${expanded ? styles.aOpen : ''}`}
              >
                <p className={styles.p}>{t(item.answerKey)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
