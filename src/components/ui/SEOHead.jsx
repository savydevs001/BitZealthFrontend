import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { brand } from '../../config/brand.js'
import { getOrganizationSchema } from './JsonLd.jsx'

/**
 * Manual SEO manager that doesn't rely on buggy libraries.
 * Handles Title, Meta Tags, and JSON-LD.
 */
export function SEOHead({ title, desc, titleKey, descKey, author, schema }) {
  const { t } = useTranslation()
  const displayTitle = titleKey ? t(titleKey) : (title || brand?.nameFull || 'BitZealth')
  const displayDesc = descKey ? t(descKey) : (desc || brand?.tagline || '')
  
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

    // 3. Update OG Tags
    const ogValues = {
      'og:title': displayTitle,
      'og:description': displayDesc,
      'og:url': window.location.href,
      'og:type': 'website',
      'og:image': `https://${brand.domain}/og-image.png`
    }

    Object.entries(ogValues).forEach(([prop, val]) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.content = val
    })

    // 4. Update JSON-LD
    let script = document.getElementById('bz-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.id = 'bz-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    
    const finalSchema = schema || getOrganizationSchema(brand)
    script.innerHTML = JSON.stringify(finalSchema)

    // 5. Cleanup (optional, but keep for single page stability)
    return () => {
      // We don't necessarily want to remove meta tags on unmount to avoid flicker
    }
  }, [displayTitle, displayDesc, schema])

  return null
}
