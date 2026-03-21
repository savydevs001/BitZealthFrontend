import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Contact } from './pages/Contact.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Products } from './pages/Products.jsx'
import { ProjectDetail } from './pages/ProjectDetail.jsx'
import { Services } from './pages/Services.jsx'
import { Team } from './pages/Team.jsx'
import { TeamMember } from './pages/TeamMember.jsx'
import { Work } from './pages/Work.jsx'

import { HelmetProvider } from 'react-helmet-async'

function RtlSync() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const isRTL = i18n.language === 'ar'
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
    try {
      localStorage.setItem('bz-lang', i18n.language)
    } catch {
      /* embedded / private mode */
    }
  }, [i18n.language])

  return null
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RtlSync />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<TeamMember />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
