import React from 'react'

/**
 * Component to inject JSON-LD structured data into the document head.
 * Supports Organization, WebSite, ProfessionalService, FAQ, and Person schemas.
 */
export function JsonLd({ data }) {
  if (!data) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function getOrganizationSchema(brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.nameFull,
    url: `https://${brand.domain}`,
    logo: `https://${brand.domain}${brand.logo.src}`,
    email: brand.contact.email,
    description: brand.description,
    foundingLocation: {
      '@type': 'Place',
      name: brand.contact.location
    },
    sameAs: [
      brand.socials.linkedin,
      brand.socials.github,
      brand.socials.upwork,
      brand.socials.fiverr,
    ].filter(Boolean)
  }
}

export function getWebSiteSchema(brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.nameFull,
    url: `https://${brand.domain}`,
    description: brand.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://${brand.domain}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function getProfessionalServiceSchema(brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.nameFull,
    url: `https://${brand.domain}`,
    image: `https://${brand.domain}${brand.ogImage}`,
    description: 'Custom software development agency in Islamabad, Pakistan. We build web apps, mobile apps, AI tools, and automation for startups and enterprises worldwide.',
    email: brand.contact.email,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development (React Native)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI System Integration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP Development' } }
      ]
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6844,
      longitude: 73.0479
    },
    sameAs: [
      brand.socials.linkedin,
      brand.socials.github,
    ].filter(Boolean)
  }
}

export function getPersonSchema(member, brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    url: `https://${brand.domain}/team/${member.slug}`,
    image: `https://${brand.domain}${member.photo}`,
    sameAs: [
      member.linkedin,
      member.github,
      member.instagram,
      member.facebook,
      member.website
    ].filter(Boolean)
  }
}
