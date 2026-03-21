# BitZealth — Website Build Specification

> **Stack:** React 18 + Vite · React Router v6 · react-i18next (EN/FR/AR) · CSS Modules · Cloudflare Pages  
> **Domain:** bitzealth.com · **Phase:** 1 — Static frontend, no backend

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Customer Messaging & Copy Strategy](#2-customer-messaging--copy-strategy)
3. [Brand Configuration](#3-brand-configuration)
4. [Tech Stack & Architecture](#4-tech-stack--architecture)
5. [Multilingual System (i18n)](#5-multilingual-system-i18n)
6. [Routing & Pages](#6-routing--pages)
7. [Page-by-Page Specification](#7-page-by-page-specification)
8. [Portfolio Placeholder System](#8-portfolio-placeholder-system)
9. [Data Schemas](#9-data-schemas)
10. [Component Architecture](#10-component-architecture)
11. [File & Folder Structure](#11-file--folder-structure)
12. [Cloudflare Pages Deployment](#12-cloudflare-pages-deployment)
13. [Build Prompt & Checklist](#13-build-prompt--checklist)

---

## 1. Project Overview

| Key | Value |
|-----|-------|
| Agency | BitZealth — Complete Software Agency, Islamabad, Pakistan |
| Founders | Muhammad Bilal Gul (CS Gold Medal) · Zain Ali (CS) |
| Domain | bitzealth.com |
| Hosting | Cloudflare Pages (free tier — global CDN, custom domain, HTTPS auto) |
| Stack | React 18 + Vite · React Router v6 · react-i18next · CSS Modules |
| Languages | English (default) · French · Arabic (full RTL layout) |
| Forms | Formspree.io — no backend required |
| Phase | Phase 1: Static frontend only. No Node.js / database backend. |

### What This Site Must Communicate

> BitZealth is not a freelance shop. It is a **complete solution provider**.
> A client brings only their idea — BitZealth handles every piece of the technology:
> architecture, design, development, testing, deployment, and ongoing support.
> Clients never need to manage developers, chase deliverables, or worry about the tech.
> They get a single point of contact, a well-defined process, and a working product at the end.

**This message must be present — explicitly or implicitly — on every page.**

---

## 2. Customer Messaging & Copy Strategy

### 2.1 Core Value Proposition

```
HEADLINE:  "You have the idea. We handle everything else."
SUB:       "No tech jargon. No managing developers. No chasing timelines."
BODY:      "Just bring your vision — we turn it into production-ready software."
```

### 2.2 Hero Headline Options (all go in i18n files)

| Option | Headline | Sub-headline | Best for |
|--------|----------|--------------|----------|
| A | You have the idea. We handle the tech. | From concept to deployed product — web, mobile, AI, automation. One team, complete delivery. | All clients |
| B | Your idea deserves great software. | We are a complete software agency. You bring the vision. We design, build, test, and ship — end to end. | West clients |
| C | Turn your idea into reality. | BitZealth handles the full technology lifecycle. No in-house team needed. | Africa / Upwork |

### 2.3 Value Props (render as 3-column cards on home page)

| # | Icon (lucide-react) | Headline | Body copy |
|---|---------------------|----------|-----------|
| 1 | `Lightbulb` | Idea to Product | You bring the concept, we handle architecture, design, code, testing, and deployment. Nothing falls through the cracks. |
| 2 | `GitBranch` | Defined Lifecycle | Every project follows a clear roadmap: Discovery → Design → Build → QA → Launch → Support. You always know what is happening. |
| 3 | `Globe` | End-to-End Delivery | Web apps, mobile apps, AI chatbots, browser extensions, automations — we cover the full technology stack under one roof. |
| 4 | `ShieldCheck` | One Point of Contact | No managing multiple vendors or freelancers. One team, one conversation, one accountable partner from start to finish. |
| 5 | `Zap` | Proven Speed | 5+ simultaneous projects at any given time. We know how to execute fast without cutting corners. |
| 6 | `Users` | Global Experience | Clients in the UK, USA, France, Nigeria, Canada, Ghana and more. We understand western and African market needs. |

### 2.4 Project Lifecycle (render as timeline on /services and abbreviated on /home)

| Step | Phase | What Happens | Client Involvement |
|------|-------|-------------|-------------------|
| 01 | Discovery | We understand your idea, goals, target users, and constraints. We ask the right questions so nothing is assumed. | 1–2 calls or async Q&A. Client shares their vision. |
| 02 | Scope & Proposal | We define the full scope, tech stack, timeline, and cost. You get a clear written proposal — no surprises later. | Client reviews and approves before work begins. |
| 03 | Design & Prototype | UI/UX design, wireframes, clickable prototype. You see and feel the product before a single line of code is written. | Client approves designs. Feedback rounds included. |
| 04 | Build & QA | Development with regular progress updates. Automated and manual testing throughout. Bugs fixed before they reach you. | Client gets a staging environment to review live. |
| 05 | Launch | We deploy to your domain, configure hosting, SSL, and monitoring. Your product goes live. | Client provides domain access. We handle the rest. |
| 06 | Support & Growth | Post-launch bug fixes, updates, and new features as your product grows. Ongoing partnership, not a one-time sale. | Client reaches out whenever needed. |

### 2.5 FAQ Content (use on /services and /contact)

**Q: Do I need to know anything about tech?**  
Not at all. You explain your idea in plain language — what it should do, who will use it, what problem it solves. We translate that into a technical plan. You stay in the loop through clear updates in plain English.

**Q: How much does a project cost?**  
Every project is different. After a free discovery call, we send a detailed proposal with a fixed price or milestone-based budget. No hidden charges and no surprises.

**Q: How long does a project take?**  
A typical web app takes 4–12 weeks depending on complexity. Mobile apps take 6–14 weeks. We give you a clear timeline in the proposal and keep you updated every step of the way.

**Q: Can you work with my existing system or codebase?**  
Yes. We regularly take over existing projects, integrate with third-party APIs, and extend legacy systems. Just share what you have and we will take a look.

**Q: What happens after the project launches?**  
We offer post-launch support and maintenance packages. Many of our clients continue working with us on new features and improvements. We are a long-term partner, not a one-time vendor.

**Q: Do you sign NDAs?**  
Absolutely. We sign NDAs before any sensitive discussions. Your idea is safe with us.

**Q: How do we communicate during the project?**  
You get access to a shared project space (Notion, Linear, or similar) with real-time progress. We have weekly check-ins and you can always reach us by email or WhatsApp.

---

## 3. Brand Configuration

### 3.1 Brand Colors (from Zain's branding sheet — Palette 1, Dark Base Variant)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#7C3AED` | Deep violet — CTAs, active states, headings |
| `--color-secondary` | `#A78BFA` | Soft violet — hover, badges, borders |
| `--color-tertiary` | `#06B6D4` | Cyan/teal — tags, code highlights |
| `--color-accent` | `#EC4899` | Hot pink — creative labels, product badge |
| `--color-dark` | `#0A0A0F` | Page background — the base canvas |
| `--color-surface` | `#111118` | Card backgrounds |
| `--color-surface-alt` | `#1A1A2E` | Alternate card background |
| `--color-neutral` | `#F1F1F3` | Body text on dark background |
| `--color-border` | `rgba(167,139,250,0.15)` | Subtle card/section borders |

### 3.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Space Grotesk | 700 | 72px (H1) / 48px (H2) / 28px (H3) |
| Body | DM Sans | 400 | 16px, line-height 1.7 |
| Caption / Tags | DM Sans | 500 | 13px |
| Arabic fallback | Noto Sans Arabic | 400 | inherit |

Load via Google Fonts with `display=swap`.

### 3.3 `src/config/brand.js` — Single Source of Truth

> ⚠️ **RULE: Zero hardcoded brand values anywhere in component code. Everything reads from this file.**

```js
// src/config/brand.js
export const brand = {
  nameShort:   'BZ',
  nameFull:    'BitZealth',
  tagline:     'You have the idea. We handle everything else.',
  domain:      'bitzealth.com',
  logo: {
    src:    '/assets/logo.svg',  // swap to change logo everywhere
    width:  40,
    height: 40,
  },
  colors: {
    primary:    '#7C3AED',
    secondary:  '#A78BFA',
    tertiary:   '#06B6D4',
    accent:     '#EC4899',
    dark:       '#0A0A0F',
    surface:    '#111118',
    surfaceAlt: '#1A1A2E',
    neutral:    '#F1F1F3',
    border:     'rgba(167,139,250,0.15)',
  },
  contact: {
    email:    'hello@bitzealth.com',
    whatsapp: '',         // add number when ready
    location: 'Islamabad, Pakistan',
    calendly: '',         // add Calendly URL when ready
  },
  socials: {
    linkedin: 'https://linkedin.com/company/bitzealth',
    github:   'https://github.com/bitzealth',
    upwork:   '',
    fiverr:   '',
  },
}
```

### 3.4 Inject as CSS Variables in `src/main.jsx`

```js
// src/main.jsx
import { brand } from './config/brand.js'
import i18n from './i18n/index.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Inject brand colors as CSS custom properties
Object.entries(brand.colors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--color-${key}`, value)
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

---

## 4. Tech Stack & Architecture

```
React 18 + Vite 5
React Router v6          — client-side routing
react-i18next            — EN / FR / AR translations
CSS Modules              — scoped component styles
CSS custom properties    — brand tokens from brand.js
lucide-react             — icons (tree-shakeable)
Formspree.io             — form submissions (no backend)
Cloudflare Pages         — hosting + CDN + analytics
Cloudflare Web Analytics — privacy-friendly, no cookies, no banner
```

### Data Files (edit content without touching component code)

| File | Controls |
|------|----------|
| `src/data/portfolio.json` | All case studies — title, slugs, team refs, images, live URLs |
| `src/data/team.json` | Team members — names, bios, photos, skills, LinkedIn |
| `src/data/services.json` | Service descriptions, icons, inclusions, tech tags |
| `src/data/testimonials.json` | Client quotes, name, country, platform |
| `src/data/products.json` | POS product card — name, features, status |
| `src/data/stats.json` | Hero strip numbers: active projects, countries, years |
| `src/data/faqs.json` | FAQ entries (use content from Section 2.5) |
| `src/config/brand.js` | ALL brand tokens — name, colors, logo, contact, socials |

---

## 5. Multilingual System (i18n)

### Languages

| Code | Language | Direction | Notes |
|------|----------|-----------|-------|
| `en` | English | LTR | Default. All keys authored here first. Fallback locale. |
| `fr` | French | LTR | West Africa + European clients. |
| `ar` | Arabic | RTL | Full RTL: set `document.documentElement.dir = 'rtl'` |

### Setup

```js
// src/i18n/index.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import fr from './fr.json'
import ar from './ar.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: localStorage.getItem('bz-lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
```

### RTL Effect in `App.jsx`

```jsx
// src/App.jsx
const { i18n } = useTranslation()

useEffect(() => {
  const isRTL = i18n.language === 'ar'
  document.documentElement.dir  = isRTL ? 'rtl' : 'ltr'
  document.documentElement.lang = i18n.language
  localStorage.setItem('bz-lang', i18n.language)
}, [i18n.language])
```

### RTL Layout Rules — Apply Everywhere

- Use `margin-inline-start` / `margin-inline-end` instead of `margin-left` / `margin-right`
- Use `padding-inline-start` / `padding-inline-end` for all directional padding
- Flex rows auto-reverse with `dir=rtl` — verify every `flex-direction: row`
- Directional icons (arrows, chevrons): apply `transform: scaleX(-1)` in RTL via `[dir=rtl]` selector
- Add `'Noto Sans Arabic'` as font-family fallback for `ar` locale
- Test all pages in Arabic before shipping

### Language Switcher Component

```jsx
// src/components/ui/LanguageSwitcher.jsx
// Renders as pill row in Navbar: [EN] [FR] [ع]
// Active language → primary color fill, white text
// Inactive → transparent, muted text
// On click: i18n.changeLanguage(code)
const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'ع'  },
]
```

### Translation File Structure (abbreviated)

```json
// src/i18n/en.json — all keys must exist in fr.json and ar.json too
{
  "nav": {
    "services": "Services",
    "work": "Work",
    "products": "Products",
    "team": "Team",
    "contact": "Contact",
    "cta": "Get a Quote"
  },
  "hero": {
    "headline": "You have the idea. We handle the tech.",
    "sub": "From concept to deployed product — web, mobile, AI, automation. One team, complete delivery.",
    "cta_primary": "Start a Project",
    "cta_secondary": "See Our Work"
  },
  "solution_strip": {
    "headline": "You have the idea. We handle everything else.",
    "step1": "Just share your vision",
    "step2": "We take care of all the tech",
    "step3": "You get a working product"
  },
  "contact": {
    "opener": "No tech knowledge needed. Just tell us your idea.",
    "name": "Your name",
    "email": "Your email",
    "project_type": "Project type",
    "budget": "Budget (optional)",
    "message": "Tell us about your idea",
    "submit": "Send Message",
    "success": "Message sent! We will get back to you within 24 hours.",
    "error": "Something went wrong. Please email us directly."
  },
  "footer": {
    "built_in": "Built in Islamabad 🇵🇰",
    "rights": "All rights reserved."
  }
}
```

---

## 6. Routing & Pages

```jsx
// src/App.jsx
<Routes>
  <Route path="/"           element={<Home />} />
  <Route path="/services"   element={<Services />} />
  <Route path="/work"       element={<Work />} />
  <Route path="/work/:slug" element={<ProjectDetail />} />
  <Route path="/products"   element={<Products />} />
  <Route path="/team"       element={<Team />} />
  <Route path="/team/:slug" element={<TeamMember />} />
  <Route path="/contact"    element={<Contact />} />
  <Route path="*"           element={<NotFound />} />
</Routes>
```

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `Home.jsx` | Landing — hero, services, portfolio preview, lifecycle, testimonials, CTA |
| `/services` | `Services.jsx` | Full service catalogue + lifecycle timeline + FAQ |
| `/work` | `Work.jsx` | Filterable portfolio grid |
| `/work/:slug` | `ProjectDetail.jsx` | Full project + problem/solution/outcome + team links |
| `/products` | `Products.jsx` | POS product + future products + email capture |
| `/team` | `Team.jsx` | Team grid + values |
| `/team/:slug` | `TeamMember.jsx` | Individual profile + their projects |
| `/contact` | `Contact.jsx` | Contact form + info + Calendly |
| `*` | `NotFound.jsx` | 404 branded page |

---

## 7. Page-by-Page Specification

### 7.1 Home Page `/`

> **Goal:** Convert a cold Fiverr/Upwork visitor in under 10 seconds. Every section reinforces: complete solution provider, safe to trust, proven.

#### Navbar (sticky)
- Backdrop blur + semi-transparent dark on scroll (`backdrop-filter: blur(12px)`)
- Left: `brand.logo.src` + `brand.nameFull` wordmark → links to `/`
- Center: translated nav links
- Right: `<LanguageSwitcher />` + "Get a Quote" pill CTA
- Mobile: hamburger → full-screen slide-in drawer

#### Hero (100dvh)
- Background: `brand.colors.dark` + slow animated radial gradient blob in primary at 6% opacity (8s CSS loop, no JS)
- Subtle dot-grid overlay via CSS `radial-gradient` on pseudo-element
- Left: H1 from `hero.headline`, sub-headline, two CTA buttons
- Right: Animated logo mark, floating with CSS `transform` animation
- Trust strip below headline: "1 Year Operating · Global Clients · 5+ Active Projects"
- Stat strip at bottom: `<AnimatedNumber />` components counting from 0 on scroll-into-view

#### Complete Solution Strip ⭐ (NEW — critical for messaging)
- Dark card, full-width, immediately after hero
- Headline: `"You have the idea. We handle everything else."`
- 3 icon + text mini-cards: "Just share your vision" / "We take care of all the tech" / "You get a working product"

#### Services Overview
- 5 cards from `services.json`
- Each: lucide icon, title, 1-line description, "Learn more →" → `/services#anchor`
- Hover: card lifts 4px, primary border glow

#### Why BitZealth (6 value props)
- All 6 props from Section 2.3, 3-column grid (2 rows)

#### Project Lifecycle Preview
- Abbreviated 4-step horizontal timeline: Discovery → Design → Build → Launch
- Each step: step number (violet), phase name, 1 sentence
- CTA: "See full process →" → `/services#lifecycle`

#### Featured Work (3 cards)
- Projects where `featured: true` in `portfolio.json`
- Gradient placeholder thumbnails until real images added
- "Deployed" badge (green pulsing dot) on live projects
- "See all work →" → `/work`

#### Products Teaser
- Distinct background (primary at 8% on dark)
- Headline: "More than a service — a product company in the making."
- CTA → `/products`

#### Testimonials
- 2–3 quotes from `testimonials.json`
- Client name, country flag, platform badge (Upwork/Fiverr)

#### Final CTA Banner
- Full-width gradient: primary → secondary
- Headline: "Ready to build something great?"
- Sub: "No tech knowledge required. Just bring your idea."
- Button: "Start a Project" → `/contact`

#### Footer
- Logo + tagline + "Built in Islamabad 🇵🇰"
- Nav links + social icons + `<LanguageSwitcher />`
- Copyright from i18n

---

### 7.2 Services Page `/services`

- Hero: "What We Build" + "Whatever it is, we can build it."
- 5 service blocks — full-width, alternating layout. Each: icon, title, full description, bullet inclusions, tech tags
- Each block has id anchor: `id="web-apps"`, `id="mobile"`, `id="ai"`, `id="extensions"`, `id="automation"`
- Full 6-step lifecycle timeline (`<LifecycleTimeline />`) with all columns from Section 2.4
- FAQ accordion — all 7 entries from Section 2.5 — CSS expand/collapse, no library
- Bottom CTA: "Not sure which service you need? Tell us your idea and we will recommend." → `/contact`

---

### 7.3 Work Page `/work`

- Filter bar: All · Web App · Mobile · AI & Chatbot · Extension · Automation
- Client-side filter — smooth opacity/translate transition, no page reload
- 3-column grid (2-col tablet, 1-col mobile)
- Card: gradient placeholder thumb, "Deployed" / "In Progress" badge, title, category tags, client flag, tagline, "View" button
- "Deployed" = green pulsing dot (strong credibility signal)

---

### 7.4 Project Detail Page `/work/:slug`

- Full-width gradient hero (`<PlaceholderHero />`) until real screenshot added
- Metadata row: Year · Category · Client Region · Status · "Visit Live Site" button (if `liveUrl` is set)
- Three text sections: **Problem** / **Solution** / **Outcome**
- Tech Stack tag cloud
- Image carousel (horizontal scroll, lazy-loaded WebP) — or `<PlaceholderHero />` if `images[]` is empty
- **TEAM SECTION:** "Who built this" — `<TeamMiniCard />` for each slug in `teamSlugs[]`. Each card clickable → `/team/:slug`
- Related Projects: 2 cards from same category

---

### 7.5 Products Page `/products`

- Hero: product-company energy — bold type, primary gradient. "More than a service."
- POS Product card: name, description, who it's for, feature list, status badge ("Coming Soon"), email capture form → Formspree `VITE_FORMSPREE_PRODUCT`
- Future products placeholder grid — dimmed cards with lock icon
- Philosophy blurb: "We build once. We sell many. We improve forever."

---

### 7.6 Team Page `/team`

- Personal intro: "We are Muhammad Bilal and Zain — two CS graduates from Islamabad, building software for the world."
- Team grid from `team.json`: circular photo, name, role, skills tags, LinkedIn, "View Profile" → `/team/:slug`
- 4 values: Transparency · Craft · Speed · Accountability

---

### 7.7 Team Member Page `/team/:slug`

- Hero: large circular photo, name, role, LinkedIn + GitHub icon links
- Full bio. Skills tag cloud.
- **PROJECTS SECTION (bidirectional link):** "Projects I worked on" — filtered from `portfolio.json` where `teamSlugs.includes(member.slug)`. `<ProjectMiniCard />` for each → `/work/:slug`
- If no projects found: placeholder card "More projects coming soon"

---

### 7.8 Contact Page `/contact`

- **Opening line:** "No tech knowledge needed. Just tell us your idea." — sets tone immediately
- Two-column layout (stacked on mobile)
- Left: email (linked), location, social links, Upwork/Fiverr buttons, Calendly link
- Right: form fields:
  - Name
  - Email
  - Project Type (dropdown): Web App / Mobile App / AI Chatbot / Automation / POS / Browser Extension / Not sure yet
  - Budget (optional dropdown): Under $1k / $1k–$5k / $5k–$20k / $20k+ / Let's discuss
  - Message (textarea)
  - Submit button
- Form → `Formspree` (`VITE_FORMSPREE_CONTACT`). Inline success/error — no page redirect.

---

## 8. Portfolio Placeholder System

> Placeholders must look impressive — not grey boxes. Each is a unique CSS gradient card with project metadata.

### PlaceholderThumb Component

```jsx
// src/components/portfolio/PlaceholderThumb.jsx
// Generates unique gradient per category. No image file needed.

const GRADIENTS = {
  'web-app':    ['#7C3AED', '#06B6D4'],  // violet → cyan
  'mobile':     ['#EC4899', '#7C3AED'],  // pink → violet
  'ai':         ['#06B6D4', '#A78BFA'],  // cyan → soft violet
  'extension':  ['#A78BFA', '#EC4899'],  // soft violet → pink
  'automation': ['#7C3AED', '#EC4899'],  // violet → pink
}

// Card shows:
// - CSS gradient background from category palette
// - Project title (large, white)
// - Category icon (lucide-react)
// - Client region + flag
// - Tech stack as floating pills
// - Green pulsing dot if status === 'deployed'
// Aspect ratio: 16/9

// Transition to real image: set thumbnail path in portfolio.json
// The component checks: thumbnail ? <img> : <PlaceholderThumb>
```

### Initial Portfolio Entries (add to `portfolio.json`)

| Slug | Title | Category | Region | Featured | Deployed |
|------|-------|----------|--------|----------|----------|
| `saas-dashboard-uk` | SaaS Analytics Dashboard | web-app | 🇬🇧 UK | ✅ | ✅ |
| `mobile-commerce-nigeria` | Mobile Commerce App | mobile | 🇳🇬 Nigeria | ✅ | ✅ |
| `ai-support-chatbot-usa` | AI Customer Support System | ai | 🇺🇸 USA | ✅ | ✅ |
| `chrome-productivity-ext` | Chrome Productivity Extension | extension | 🇨🇦 Canada | — | ✅ |
| `erp-automation-ghana` | ERP Workflow Automation | automation | 🇬🇭 Ghana | — | — |
| `real-estate-portal-france` | Real Estate Listing Portal | web-app | 🇫🇷 France | — | ✅ |

---

## 9. Data Schemas

### 9.1 `portfolio.json` entry

```json
{
  "id": "proj-001",
  "slug": "saas-dashboard-uk",
  "title": "SaaS Analytics Dashboard",
  "tagline": "Real-time analytics for a UK logistics firm.",
  "status": "deployed",
  "liveUrl": "https://example.com",
  "categories": ["web-app"],
  "clientRegion": "UK",
  "clientFlag": "🇬🇧",
  "year": 2024,
  "thumbnail": "",
  "images": [],
  "problem": "The client needed...",
  "solution": "We built...",
  "outcome": "Launched in 6 weeks...",
  "techStack": ["React", "Node.js", "PostgreSQL"],
  "teamSlugs": ["bilal-gul", "zain-ali"],
  "featured": true
}
```

> `thumbnail: ""` → use `<PlaceholderThumb />`  
> `images: []` → use `<PlaceholderHero />` on detail page  
> `liveUrl` set → show "Visit Live Site" button

### 9.2 `team.json` entry

```json
{
  "slug": "bilal-gul",
  "name": "Muhammad Bilal Gul",
  "shortName": "Bilal",
  "role": "Co-founder & Full-Stack Developer",
  "photo": "/assets/team/bilal.webp",
  "bio": "CS graduate with Gold Medal...",
  "skills": ["React", "Node.js", "Python", "AI Systems"],
  "linkedin": "https://linkedin.com/in/...",
  "github": "https://github.com/..."
}
```

### 9.3 Bidirectional Project ↔ Team Linking

> ⭐ This is a flagship feature. Zero manual maintenance — just keep `teamSlugs` accurate.

```jsx
// In ProjectDetail.jsx — show who built this project
const project     = portfolio.find(p => p.slug === params.slug)
const projectTeam = project.teamSlugs.map(s => team.find(m => m.slug === s))
// Render: <TeamMiniCard member={m} /> — each links to /team/:slug

// In TeamMember.jsx — show this person's projects
const member         = team.find(m => m.slug === params.slug)
const memberProjects = portfolio.filter(p => p.teamSlugs.includes(member.slug))
// Render: <ProjectMiniCard project={p} /> — each links to /work/:slug
```

---

## 10. Component Architecture

### Layout & UI

| Component | File | Description |
|-----------|------|-------------|
| `<Navbar />` | `layout/Navbar.jsx` | Fixed nav, blur-on-scroll, logo, links, lang switcher, CTA |
| `<Footer />` | `layout/Footer.jsx` | Logo, nav links, socials, copyright, lang switcher |
| `<Layout />` | `layout/Layout.jsx` | Wraps every page with Navbar + Footer |
| `<Button />` | `ui/Button.jsx` | Variants: primary / secondary / outline / ghost. RTL-safe. |
| `<Badge />` | `ui/Badge.jsx` | Category or status pill. Color from variant prop. |
| `<LanguageSwitcher />` | `ui/LanguageSwitcher.jsx` | EN/FR/ع pills. Updates i18n + html dir + localStorage. |
| `<SEOHead />` | `ui/SEOHead.jsx` | Title, description, og:image per page |
| `<SectionWrapper />` | `ui/SectionWrapper.jsx` | Consistent padding + max-width centering |
| `<AnimatedNumber />` | `ui/AnimatedNumber.jsx` | Counts 0 → target on scroll-into-view (IntersectionObserver) |

### Feature Components

| Component | Used On | Description |
|-----------|---------|-------------|
| `<ProjectCard />` | /work, /home | Portfolio card — gradient thumb, deployed dot, tags, flag |
| `<ProjectMiniCard />` | /team/:slug | Compact project card on team member profile |
| `<TeamCard />` | /team | Member grid card — photo, name, role, skills, links |
| `<TeamMiniCard />` | /work/:slug | Compact member card in project — links to profile |
| `<FilterBar />` | /work | Category filter pills, client-side smooth filter |
| `<PlaceholderThumb />` | everywhere | CSS gradient thumbnail — unique per category |
| `<PlaceholderHero />` | /work/:slug | Full-width gradient hero when `images[]` is empty |
| `<ImageCarousel />` | /work/:slug | Horizontal scroll gallery, lazy-loaded WebP |
| `<FAQAccordion />` | /services | CSS expand/collapse, no library |
| `<ContactForm />` | /contact | Formspree form. Inline success/error. No redirect. |
| `<LifecycleTimeline />` | /services, /home | Visual 6-step timeline (abbreviated on home) |
| `<ProductCard />` | /products | POS card with features, status badge, email capture |

---

## 11. File & Folder Structure

```
bitzealth/
├── public/
│   ├── _redirects                      ← CRITICAL for Cloudflare Pages (see Section 12)
│   ├── assets/
│   │   ├── logo.svg                    ← Logo 1 from branding sheet
│   │   ├── team/
│   │   │   ├── bilal.webp
│   │   │   └── zain.webp
│   │   └── portfolio/
│   │       └── saas-dashboard-uk/
│   │           ├── thumb.webp
│   │           └── screen-1.webp
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config/
│   │   └── brand.js                    ← SINGLE SOURCE OF TRUTH
│   ├── data/
│   │   ├── portfolio.json
│   │   ├── team.json
│   │   ├── services.json
│   │   ├── testimonials.json
│   │   ├── products.json
│   │   ├── stats.json
│   │   └── faqs.json
│   ├── i18n/
│   │   ├── index.js
│   │   ├── en.json
│   │   ├── fr.json
│   │   └── ar.json
│   ├── styles/
│   │   ├── globals.css                 ← CSS vars, reset, typography
│   │   ├── animations.css              ← keyframes, scroll-reveal classes
│   │   └── rtl.css                     ← RTL-specific overrides
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.module.css
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── AnimatedNumber.jsx
│   │   │   ├── LanguageSwitcher.jsx
│   │   │   ├── SEOHead.jsx
│   │   │   └── SectionWrapper.jsx
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectMiniCard.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── PlaceholderThumb.jsx
│   │   │   ├── PlaceholderHero.jsx
│   │   │   └── ImageCarousel.jsx
│   │   ├── team/
│   │   │   ├── TeamCard.jsx
│   │   │   └── TeamMiniCard.jsx
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── CompleteSolutionStrip.jsx
│   │       ├── ServicesStrip.jsx
│   │       ├── WhyBitZealth.jsx
│   │       ├── LifecyclePreview.jsx
│   │       ├── FeaturedWork.jsx
│   │       ├── ProductsTeaser.jsx
│   │       ├── Testimonials.jsx
│   │       └── CTABanner.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Products.jsx
│   │   ├── Team.jsx
│   │   ├── TeamMember.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js       ← IntersectionObserver reveal-on-scroll
│   │   └── useFilter.js                ← portfolio filter state
│   ├── App.jsx                         ← Router + RTL effect
│   ├── main.jsx                        ← CSS variable injection from brand.js
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 12. Cloudflare Pages Deployment

### 12.1 Why Cloudflare Pages

| Feature | Detail |
|---------|--------|
| Cost | Free tier — unlimited bandwidth, 500 builds/month |
| Performance | 300+ edge locations — fast from UK, Nigeria, USA alike |
| Custom domain | bitzealth.com already on Cloudflare DNS — connects in ~2 minutes |
| HTTPS | Auto-provisioned SSL, zero config |
| Analytics | Cloudflare Web Analytics built-in — no cookies, no GDPR banner |
| Preview URLs | Every git push gets a unique preview URL |
| Auto-deploy | Connects to GitHub — deploys on every push to `main` |

### 12.2 `public/_redirects` — CRITICAL

> ⚠️ Without this file, any direct URL visit or page refresh on a non-home route returns a 404.

```
# public/_redirects
/*  /index.html  200
```

One line. Vite copies it to `dist/` automatically. This tells Cloudflare: serve `index.html` for every route — React Router handles the rest.

### 12.3 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,  // keep WebP as separate files, not inlined
  },
})
```

### 12.4 Step-by-Step Deployment

**Step 1 — Push to GitHub**
1. Create repo at github.com — name it `bitzealth-website`
2. `git init && git add . && git commit -m "Initial commit"`
3. `git remote add origin https://github.com/YOUR_USERNAME/bitzealth-website.git`
4. `git push -u origin main`

**Step 2 — Create Cloudflare Pages project**
1. Cloudflare dashboard → Workers & Pages → Pages → Create a project
2. Connect to Git → Authorize GitHub → Select `bitzealth-website`
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and Deploy — wait ~60 seconds
5. Test the generated `*.pages.dev` preview URL

**Step 3 — Connect bitzealth.com**
1. Cloudflare Pages project → Custom domains → Add custom domain
2. Enter `bitzealth.com` → Confirm
3. DNS record added automatically (already on Cloudflare)
4. SSL provisions automatically — site live in ~2 minutes
5. Optionally add `www.bitzealth.com` as a second custom domain

**Step 4 — Auto-deploy forever**
- Any `git push` to `main` → new build → live automatically
- Pushes to other branches → preview URL only (safe to test)
- Adding a new team member or project = edit JSON → push → done

### 12.5 Environment Variables (Formspree)

Set in Cloudflare Pages → Settings → Environment Variables:

```
VITE_FORMSPREE_CONTACT = your_contact_form_id
VITE_FORMSPREE_PRODUCT = your_product_email_capture_id
```

Use in React:
```js
const formId = import.meta.env.VITE_FORMSPREE_CONTACT
fetch(`https://formspree.io/f/${formId}`, { method: 'POST', body: formData })
```

### 12.6 Cloudflare Web Analytics

1. Cloudflare dashboard → Analytics & Logs → Web Analytics
2. Add a site → select bitzealth.com
3. Enable automatic tracking — uses Cloudflare's edge, no JS snippet needed
4. Done. Real-time traffic visible at dash.cloudflare.com.

---

## 13. Build Prompt & Checklist

### 13.1 Complete Build Prompt

> Copy this entire block and paste it as your first message in Cursor or Bolt.

---

```
You are building the BitZealth agency website. Follow this specification exactly.

HOSTING: Cloudflare Pages. Create public/_redirects with exactly: /* /index.html 200
Build command: npm run build. Output directory: dist.

STACK: React 18 + Vite 5. React Router v6. react-i18next (EN default, FR, AR with full RTL).
CSS Modules + CSS custom properties. lucide-react icons. Formspree for forms. No Tailwind. No backend.

BRAND COLORS (from brand.js, injected as CSS vars — no hardcoding in components):
  Primary:    #7C3AED  (deep violet — CTAs, headings, active states)
  Secondary:  #A78BFA  (soft violet — hover, badges, borders)
  Tertiary:   #06B6D4  (cyan — tags, highlights)
  Accent:     #EC4899  (pink — creative labels, product badge)
  Dark BG:    #0A0A0F  (page background)
  Surface:    #111118  (card backgrounds)
  Neutral:    #F1F1F3  (body text on dark bg)

FONTS: Space Grotesk (headings) + DM Sans (body) via Google Fonts with display=swap.

CORE MESSAGE: BitZealth is a complete solution provider. Core tagline:
"You have the idea. We handle everything else."
Place this on: hero section, CTA banner, contact page opener.
Show the 6-step lifecycle (Discovery → Scope → Design → Build → Launch → Support) on /services
and abbreviated (4 steps) on home page. Include all 7 pre-written FAQ entries on /services.

PAGES: Home / Services / Work / Work/:slug / Products / Team / Team/:slug / Contact / 404

KEY FEATURE — BIDIRECTIONAL TEAM ↔ PROJECT LINKS:
- portfolio.json projects have teamSlugs[] array
- ProjectDetail page: renders <TeamMiniCard> for each slug → links to /team/:slug
- TeamMember page: filters portfolio for this member → renders <ProjectMiniCard> → links to /work/:slug

PORTFOLIO: No real screenshots yet. Use <PlaceholderThumb> (CSS gradient per category)
and <PlaceholderHero>. 6 placeholder projects in portfolio.json. Deployed projects show green pulsing dot.

MULTILINGUAL: All visible strings via t() from useTranslation(). When Arabic active:
document.documentElement.dir = 'rtl'. Use CSS logical properties throughout.
Language switcher [EN][FR][ع] in Navbar and Footer.

FORMSPREE: Two endpoints via env vars: VITE_FORMSPREE_CONTACT and VITE_FORMSPREE_PRODUCT.

BUILD ORDER (follow this exactly):
1.  src/config/brand.js
2.  src/data/*.json (all 7 files with placeholder content)
3.  src/i18n/*.json (en first, then fr, then ar)
4.  public/_redirects
5.  index.html (Google Fonts, lang=en, meta tags)
6.  src/main.jsx (CSS var injection, i18n init)
7.  src/styles/globals.css + rtl.css
8.  src/components/ui/* (Button, Badge, SectionWrapper, AnimatedNumber, LanguageSwitcher)
9.  src/components/layout/* (Navbar, Footer, Layout)
10. src/components/portfolio/* (PlaceholderThumb, PlaceholderHero, ProjectCard, FilterBar, ImageCarousel)
11. src/components/team/* (TeamCard, TeamMiniCard)
12. src/components/home/* (all 9 home section components)
13. src/App.jsx (router + RTL effect)
14. src/pages/Home.jsx
15. src/pages/Work.jsx + ProjectDetail.jsx
16. src/pages/Team.jsx + TeamMember.jsx
17. src/pages/Services.jsx + Products.jsx + Contact.jsx + NotFound.jsx

The full specification is in SPEC.md at the project root.
```

---

### 13.2 Pre-Launch Checklist

#### Content & Messaging
- [ ] "You have the idea. We handle everything else." visible on home page
- [ ] 6-step lifecycle on Services page with all columns
- [ ] 7 FAQ entries on Services page using pre-written content
- [ ] Contact page opens with "No tech knowledge needed. Just tell us your idea."
- [ ] Zero hardcoded English strings in JSX — all via `t()`

#### Multilingual & RTL
- [ ] Language switcher visible in Navbar and Footer
- [ ] Switching to Arabic flips layout — all 8 pages readable RTL
- [ ] Directional icons flipped in Arabic
- [ ] All 3 locale files have same keys — no missing translations

#### Portfolio & Team Linking
- [ ] 6 placeholder projects in `portfolio.json` with `teamSlugs` assigned
- [ ] Clicking team member in ProjectDetail → `/team/:slug` works
- [ ] TeamMember profile shows their projects correctly
- [ ] Deployed projects show green pulsing dot on all card views
- [ ] Portfolio filter works client-side, smooth transition, no page reload

#### Cloudflare & Technical
- [ ] `public/_redirects` exists with `/* /index.html 200`
- [ ] `npm run build` produces `dist/` with no errors
- [ ] Direct URL visit to `/work`, `/team`, `/contact` works (no 404 on refresh)
- [ ] `VITE_FORMSPREE_CONTACT` env var set in Cloudflare Pages settings
- [ ] Contact form shows inline success message, does not redirect
- [ ] Changing `brand.colors.primary` in `brand.js` updates all buttons and accents
- [ ] Lighthouse Performance 90+ on production build
- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] Mobile hamburger nav opens and closes correctly

---

*BitZealth — bitzealth.com | Islamabad, Pakistan*