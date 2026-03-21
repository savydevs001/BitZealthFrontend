import { useTranslation } from 'react-i18next'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { SectionWrapper } from '../components/ui/SectionWrapper.jsx'
import { Button } from '../components/ui/Button.jsx'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead titleKey="seo.notfound.title" descKey="seo.notfound.desc" />
      <SectionWrapper>
        <h1>{t('not_found.title')}</h1>
        <p>{t('not_found.body')}</p>
        <Button to="/" variant="primary">
          {t('not_found.home')}
        </Button>
      </SectionWrapper>
    </>
  )
}
