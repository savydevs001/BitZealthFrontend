import { useTranslation } from 'react-i18next'
import team from '../data/team.json'
import { TeamCard } from '../components/team/TeamCard.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import styles from './Team.module.css'

export function Team() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead titleKey="seo.team.title" descKey="seo.team.desc" />
      <SectionWrapper>
        <div className={styles.intro}>
          <h1>{t('team.page_title')}</h1>
          <p className={styles.p}>{t('team.intro')}</p>
        </div>

        <div className={styles.grid}>
          {team.map((m, idx) => (
            <TeamCard key={m.slug} member={m} reveal index={idx} />
          ))}
        </div>

        <div className={styles.values}>
          <h2 className={styles.vh}>{t('team.values_title')}</h2>
          <div className={styles.vgrid}>
            <div className={styles.v}>{t('team.v1')}</div>
            <div className={styles.v}>{t('team.v2')}</div>
            <div className={styles.v}>{t('team.v3')}</div>
            <div className={styles.v}>{t('team.v4')}</div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
