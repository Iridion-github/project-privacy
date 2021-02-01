import '../styles/globals.css' //Css activation for every part of the app.
import 'bootstrap/dist/css/bootstrap.min.css' //Css activation for every part of the app.
import '@fortawesome/fontawesome-free/css/all.min.css' //Fontawesome activation for every part of the app.
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