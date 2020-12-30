/* Per implementare una traduzione globale del sito creaimo il context usato in _app.js */
import { useState, useContext, createContext } from 'react'

const siteLanguageContext = createContext()
const siteLanguageUpdateContext = createContext()

export function useLanguage() {
  return useContext(siteLanguageContext)
}

export function useLanguageUpdate() {
  return useContext(siteLanguageUpdateContext)
}

export function LanguageProvider({ children }) {
  const [siteLanguage, setSiteLanguage] = useState("ita")
  const changeSiteLanguage = (newLang) => {
    setSiteLanguage(newLang)
  }

  return (
    <siteLanguageContext.Provider value={siteLanguage}>
      <siteLanguageUpdateContext.Provider value={changeSiteLanguage}>
        {children}
      </siteLanguageUpdateContext.Provider>
    </siteLanguageContext.Provider>
  )
}


