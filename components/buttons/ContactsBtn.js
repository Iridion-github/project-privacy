import {
  Button
} from 'react-bootstrap'

import { useRouter } from 'next/router'


export const ContactsBtn = function (props) {
  const router = useRouter()

  return (
    <Button
      size="lg"
      variant="info"
      onClick={() => router.push("/contatti")}
    >
      {props.currentLang === "ita" ? "I miei Contatti" : "My Contacts"}
      <i className="far fa-share-square ml-2"></i>
    </Button>
  )
}