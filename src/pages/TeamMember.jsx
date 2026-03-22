import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Globe, Instagram, Facebook, Twitter } from 'lucide-react'
import portfolio from '../data/portfolio.json'
import team from '../data/team.json'
import { brand } from '../config/brand.js'
import { ProjectMiniCard } from '../components/portfolio/ProjectMiniCard.jsx'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { getPersonSchema } from '../components/ui/JsonLd.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { Button } from '../components/ui/Button.jsx'
import styles from './TeamMember.module.css'

export function TeamMember() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'

  const member = team.find((m) => m.slug === slug)

  const memberProjects = useMemo(() => {
    if (!member) return []
    return portfolio.filter((p) => p.teamSlugs.includes(member.slug))
  }, [member])

  if (!member) {
    return (
      <>
        <SEOHead titleKey="seo.notfound.title" descKey="seo.notfound.desc" />
        <SectionWrapper>
          <h1>{t('not_found.title')}</h1>
          <p>{t('not_found.body')}</p>
          <Button to="/team" variant="primary">
            {t('team.page_title')}
          </Button>
        </SectionWrapper>
      </>
    )
  }

  const role = member.role[lang] || member.role['en']
  const bio = member.bio[lang] || member.bio['en']
  const title = `${member.name} — ${role} — BitZealth`
  const personSchema = getPersonSchema({ ...member, role }, brand)

  return (
    <>
      <SEOHead title={title} desc={bio} author={member.name} schema={personSchema} />
      <SectionWrapper>
        <div className={styles.hero}>
          <img className={styles.photo} src={member.photo} alt="" loading="eager" />
          <div>
            <h1 className={styles.name}>{member.name}</h1>
            <div className={styles.role}>
              {member.isFounder && <span className={styles.founderTag}>Founder</span>}
              {role}
            </div>
            <div className={styles.links}>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                  <Twitter size={20} />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              )}
              {member.website && (
                <a href={member.website} target="_blank" rel="noreferrer" aria-label="Personal Website">
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <p className={styles.bio}>{bio}</p>

        <div className={styles.skills}>
          {member.skills.map((s) => (
            <Badge key={s} variant="primary">
              {s}
            </Badge>
          ))}
        </div>

        <h2 className={styles.h2}>{t('team.projects_title')}</h2>
        {memberProjects.length ? (
          <div className={styles.grid}>
            {memberProjects.map((p) => (
              <ProjectMiniCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>{t('team.empty_projects')}</div>
        )}
      </SectionWrapper>
    </>
  )
}

