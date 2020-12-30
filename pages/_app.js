import '../styles/globals.css'
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
