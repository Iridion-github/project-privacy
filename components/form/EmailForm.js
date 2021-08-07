
import {
  Row,
  Form,
  Button
} from 'react-bootstrap';
import { useState } from 'react';



export const EmailForm = function (props) {

  const checkboxLabels = [
    {
      ita: `Dichiaro di aver letto l'INFORMATIVA PRIVACY ed esprimo il consenso 
      al trattamento dei dati per le finalità indicate.`,
      eng: `In sending this form, I declare that I have read the 
      PRIVACY STATEMENT and agree to having my personal details 
      processed using the methods indicated. `
    },
    {
      ita: `Dichiaro di aver letto l'INFORMATIVA PRIVACY ed esprimo il consenso 
      al trattamento dei dati per l'iscrizione alla newsletter GM Consulenze.`,
      eng: `I hereby agree to be signed up to the GM Consultancy newletter 
      and declare to have read, understood and 
      accepted the privacy policy.`
    }
  ];

  const [postData, setPostData] = useState({});

  return (
    <Form
      action={"/api/Post?data=" + postData}
      method="post"
      className="bg-standard-blue blue-border border-radius p-3 email-form">

      <Form.Group controlId="formFirstName mb-0" className="email-formgroup">
        <Form.Label>{props.currentLang === "ita" ? "Nome" : "First name"}</Form.Label>
        <Form.Control type="text" placeholder={props.currentLang === "ita" ? "" : ""} />
      </Form.Group>

      <Form.Group controlId="formLastName mb-0" className="email-formgroup">
        <Form.Label>{props.currentLang === "ita" ? "Cognome" : "Last name"}</Form.Label>
        <Form.Control type="text" placeholder={props.currentLang === "ita" ? "" : ""} />
      </Form.Group>

      <Form.Group controlId="formEmail mb-0" className="email-formgroup">
        <Form.Label>{props.currentLang === "ita" ? "Indirizzo Email" : "Email address"}</Form.Label>
        <Form.Control type="email" placeholder="@" />
        <Form.Text className="text-dark">
          {props.currentLang === "ita" ? <i>La tua mail verrà utilizzata esclusivamente per contattarti.</i> : <i>We'll never share your email with anyone else.</i>}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPrivacy" className="email-formgroup">
        <Form.Check type="checkbox" label={checkboxLabels[0][props.currentLang]} className="email-form-checkbox-label" />
      </Form.Group>

      <Form.Group controlId="formNewsletter" className="email-formgroup">
        <Form.Check type="checkbox" label={checkboxLabels[0][props.currentLang]} className="email-form-checkbox-label" />
      </Form.Group>

      <Row className="px-3">
        <Button block variant="info" type="submit">
          {props.currentLang === "ita" ? "Invia" : "Submit"}
        </Button>
      </Row>
    </Form>
  );
};
