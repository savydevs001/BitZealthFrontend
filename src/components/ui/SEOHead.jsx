import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { brand } from '../../config/brand.js'
import { getOrganizationSchema, getWebSiteSchema, getProfessionalServiceSchema } from './JsonLd.jsx'

/**
 * Manual SEO manager that doesn't rely on buggy libraries.
 * Handles Title, Meta Tags, JSON-LD (@graph), and hreflang.
 */
export function SEOHead({ title, desc, titleKey, descKey, author, schema }) {
  const { t } = useTranslation()
  const displayTitle = titleKey ? t(titleKey) : (title || brand.title)
  const displayDesc = descKey ? t(descKey) : (desc || brand.description)
  
  useEffect(() => {
    // 1. Update Title
    document.title = displayTitle

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = displayDesc

    // 3. Update OG / Twitter tags
    const ogValues = {
      'og:site_name': brand.nameFull,
      'og:title': displayTitle,
      'og:description': displayDesc,
      'og:url': window.location.href,
      'og:type': 'website',
      'og:image': `https://${brand.domain}${brand.ogImage}`,
      'og:image:width': '1200',
      'og:image:height': '630',
    }

    const twitterValues = {
      'twitter:card': 'summary_large_image',
      'twitter:title': displayTitle,
      'twitter:description': displayDesc,
      'twitter:image': `https://${brand.domain}${brand.ogImage}`,
      'twitter:site': brand.twitterHandle
    }

    Object.entries({ ...ogValues, ...twitterValues }).forEach(([prop, val]) => {
      const isOg = prop.startsWith('og:')
      const selector = isOg ? `meta[property="${prop}"]` : `meta[name="${prop}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (isOg) {
          el.setAttribute('property', prop)
        } else {
          el.name = prop
        }
        document.head.appendChild(el)
      }
      el.content = val
    })

    // 4. Hreflang tags (EN / AR / FR / x-default)
    const LANGS = ['en', 'ar', 'fr']
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflang.forEach(el => el.remove())

    const canonicalBase = `https://${brand.domain}`
    const path = window.location.pathname

    ;[...LANGS, 'x-default'].forEach(lang => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = lang
      // For x-default, point to the EN version (no lang param)
      link.href = lang === 'x-default' || lang === 'en'
        ? `${canonicalBase}${path}`
        : `${canonicalBase}${path}?lng=${lang}`
      document.head.appendChild(link)
    })

    // 5. JSON-LD — @graph on home page, single schema otherwise
    let script = document.getElementById('bz-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.id = 'bz-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    
    const finalSchema = schema || {
      '@context': 'https://schema.org',
      '@graph': [
        getOrganizationSchema(brand),
        getWebSiteSchema(brand),
        getProfessionalServiceSchema(brand),
      ]
    }
    script.innerHTML = JSON.stringify(finalSchema)

    return () => {}
  }, [displayTitle, displayDesc, schema])

  return null
}
