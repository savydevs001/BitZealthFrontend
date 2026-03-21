import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/index.js'
import { brand } from './config/brand.js'
import App from './App.jsx'
import './styles/globals.css'
import './styles/animations.css'
import './styles/rtl.css'

// Inject brand colors as CSS variables
const injectBrandColors = () => {
  const root = document.documentElement
  Object.entries(brand.colors).forEach(([name, value]) => {
    root.style.setProperty(`--color-${name}`, value)
  })
}

injectBrandColors()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
