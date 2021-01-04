import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { LanguageProvider } from '../context/siteLanguageContext'

function MyApp({ Component, pageProps }) {

  return (
    <LanguageProvider>
      <Component
        {...pageProps}
      />
    </LanguageProvider>
  )
}

export default MyApp
