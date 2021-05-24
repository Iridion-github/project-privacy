import '../styles/globals.css' //Css activation for every part of the app.
import 'bootstrap/dist/css/bootstrap.min.css' //Css activation for every part of the app.
import '@fortawesome/fontawesome-free/css/all.min.css' //Fontawesome activation for every part of the app.
import { useEffect, useState } from 'react'
import { AppContext } from '../context/contextLib'

function MyApp({ Component, pageProps }) {
  const [currentLang, setCurrentLang] = useState("ita")

  const changeSiteLang = (newLang) => {
    setCurrentLang(newLang)
  }

  useEffect(() => {
    if (sessionStorage.getItem('currentLang') && sessionStorage.getItem('currentLang') !== currentLang) {
      console.log("sessionStorage ha un currentLang settato e non coincide con quello dello state")
      sessionStorage.setItem('currentLang', currentLang)
      console.log("should be done updating sessionStorage")
    }
  })

  return (
    <AppContext.Provider value={{ currentLang, changeSiteLang }}>
      <Component
        {...pageProps}
      />
    </AppContext.Provider>
  )
}

export default MyApp