import {
  Button
} from 'react-bootstrap'
import { useLanguage } from '../../context/siteLanguageContext' //context
import { useRouter } from 'next/router'


export const ContactsBtn = function (props) {
  const router = useRouter()
  const siteLanguage = useLanguage()

  return (
    <Button
      size="lg"
      variant="info"
      onClick={() => router.push("/contatti")}
    >
      {siteLanguage === "ita" ? "I miei Contatti" : "My Contacts"}
      <i className="far fa-share-square ml-2"></i>
    </Button>
  )
}