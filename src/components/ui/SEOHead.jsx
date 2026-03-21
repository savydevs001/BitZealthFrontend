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

    // 3. Update OG Tags
    const ogValues = {
      'og:site_name': brand.nameFull,
      'og:title': displayTitle,
      'og:description': displayDesc,
      'og:url': window.location.href,
      'og:type': 'website',
      'og:image': `https://${brand.domain}${brand.ogImage}`
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
