import '../styles/globals.css' //Css activation for every part of the app.
import 'bootstrap/dist/css/bootstrap.min.css' //Css activation for every part of the app.
import '@fortawesome/fontawesome-free/css/all.min.css' //Fontawesome activation for every part of the app.
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import { AppContext } from '../context/contextLib'

function MyApp({ Component, pageProps }) {
  console.log("MyApp - Component:", Component)
  console.log("MyApp - pageProps:", pageProps)
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name'])
  console.log("MyApp - cookies:", cookies)
  const languageCookie = cookies.currentLang
  console.log("MyApp - languageCookie:", languageCookie)
  const [currentLang, setCurrentLang] = useState(languageCookie ? languageCookie : "ita")
  console.log("MyApp - currentLang:", currentLang)
  const changeSiteLang = (newLang) => {
    setCurrentLang(newLang)
  }

  useEffect(() => {
    if (currentLang !== cookies.currentLang) {
      setCookie("currentLang", currentLang)
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