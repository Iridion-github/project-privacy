import { Row, Form, Button } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";

export const EmailForm = function (props) {
  const checkboxLabels = [
    {
      ita: `Dichiaro di aver letto l'INFORMATIVA PRIVACY ed esprimo il consenso 
      al trattamento dei dati per le finalità indicate.`,
      eng: `In sending this form, I declare that I have read the 
      PRIVACY STATEMENT and agree to having my personal details 
      processed using the methods indicated. `,
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const checkAndSetEmail = useCallback(event => {
    const em = String(event.target.value).toLowerCase();
    setEmail(em);
    var regex = /\S+@\S+\.\S+/;
    const valid = regex.test(em);
    setValidEmail(valid);
  }, []);

  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (validEmail && isChecked) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [validEmail, isChecked, setSubmitDisabled]);

  return (
    <Form
      //action={"/api/Post?data=" + postData}
      action="https://formsubmit.co/alex.mastro.1989@gmail.com"
      method="post"
      className="bg-standard-blue blue-border border-radius p-3 email-form"
    >
      {/* inizio Settings di submitForm.com */}
      <Form.Control type="hidden" name="_captcha" value="false" />
      <Form.Control type="hidden" name="_next" value="https://project-privacy.vercel.app/contatti" />
      <Form.Control type="hidden" name="_subject" value="Un potenziale cliente ha inviato il suo contatto tramite il sito" />
      <Form.Control type="text" name="_honey" style={{ display: "none" }} />
      <Form.Control type="hidden" name="_autoresponse" value="MG Consulting ha ricevuto i suoi dati, sarà contattato il prima possibile" />
      <Form.Control type="hidden" name="_template" value="table" />
      {/* fine Settings di submitForm.com */}

      <Form.Group controlId="formFirstName mb-0" className="email-formgroup">
        <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Nome" : "First name"}</Form.Label>
        <Form.Control type="text" placeholder={props.currentLang === "ita" ? "" : ""} name="firstname" />
      </Form.Group>

      <Form.Group controlId="formLastName mb-0" className="email-formgroup">
        <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Cognome" : "Last name"}</Form.Label>
        <Form.Control type="text" placeholder={props.currentLang === "ita" ? "" : ""} name="lastname" />
      </Form.Group>

      <Form.Group controlId="formEmail mb-0" className="email-formgroup">
        <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Indirizzo Email" : "Email address"}</Form.Label>
        <Form.Control type="email" placeholder="@" name="email" value={email} onChange={checkAndSetEmail} />
        <Form.Text suppressHydrationWarning className="text-dark">
          {props.currentLang === "ita" ? <i>La tua mail verrà utilizzata esclusivamente per contattarti.</i> : <i>We'll never share your email with anyone else.</i>}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPrivacy" className="email-formgroup mb-3">
        <Form.Check suppressHydrationWarning type="checkbox" label={checkboxLabels[0][props.currentLang]} className="email-form-checkbox-label" onChange={toggleChecked} />
      </Form.Group>

      <Row className="px-3">
        <Button disabled={submitDisabled} suppressHydrationWarning block variant="info" type="submit">
          {props.currentLang === "ita" ? "Invia" : "Submit"}
        </Button>
      </Row>
    </Form>
  );
};
