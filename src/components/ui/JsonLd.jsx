import React from 'react'

/**
 * Component to inject JSON-LD structured data into the document head.
 * Supports Organization, ProfessionalService, FAQ, and Person schemas.
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
    sameAs: [
      brand.socials.linkedin,
      brand.socials.github,
      brand.socials.facebook,
      brand.socials.instagram
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
