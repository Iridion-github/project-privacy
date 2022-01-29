import { Row, Form, Button, Modal } from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";

export const RegistrationForm = function (props) {
  const checkboxLabels = [
    {
      ita: `Dichiaro di aver letto l'INFORMATIVA PRIVACY ed esprimo il consenso 
      al trattamento dei dati per le finalità indicate.`,
      eng: `In sending this form, I declare that I have read the 
      PRIVACY STATEMENT and agree to having my personal details 
      processed using the methods indicated. `,
    },
  ];

  const defaultErrorLabel = [
    {
      ita: `È avvenuto un errore inaspettato, siamo spiacenti.`,
      eng: `An unexpected error occurred, we are sorry.`,
    },
  ];

  const errorLabels = {
    alreadyRegisteredEmail: {
      ita: "Questa email è già utilizzata da un utente registrato",
      eng: "This email is already in use by another user",
    },
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [currentErrorLabel, setCurrentErrorLabel] = useState("");

  const checkAndSetEmail = useCallback(
    event => {
      const em = String(event.target.value).toLowerCase();
      setEmail(em);
      var regex = /\S+@\S+\.\S+/;
      const valid = regex.test(em);
      setValidEmail(valid);
    },
    [email, setEmail, validEmail, setValidEmail]
  );

  const handleChangePassword = useCallback(
    event => {
      setPassword(event.target.value);
      setValidConfirmPassword(event.target.value === confirmPassword);
      checkValidPassword(event.target.value);
    },
    [confirmPassword]
  );

  const handleChangeConfirmPassword = useCallback(
    event => {
      setConfirmPassword(event.target.value);
      setValidConfirmPassword(event.target.value === password);
    },
    [password]
  );

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const onOpenConfirmModal = useCallback(() => {
    setIsOpenConfirmModal(true);
  }, []);

  const onCloseConfirmModal = useCallback(() => {
    setIsOpenConfirmModal(false);
  }, []);

  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const onOpenErrorModal = useCallback(() => {
    setIsOpenErrorModal(true);
  }, []);

  const onCloseErrorModal = useCallback(() => {
    setCurrentErrorLabel("");
    setIsOpenErrorModal(false);
  }, []);

  const checkDbForEmail = async () => {
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      const result = await fetch(`http://localhost:3000/api/user/checkEmail?email=${email}`, {
        method: "POST",
        headers: {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      })
        .then(response => response.json())
        .then(async response => {
          if (response.data.canRegister) {
            return true;
          } else {
            setCurrentErrorLabel(errorLabels.alreadyRegisteredEmail[props.currentLang]);
            return false;
          }
        });
      return result;
    } catch (error) {
      onOpenErrorModal();
    }
  };

  const registerUser = async () => {
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      const result = await fetch(`http://localhost:3000/api/user/registerUser?email=${email}&password=${password}`, {
        method: "POST",
        headers: {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      })
        .then(response => response.json())
        .then(async response => {
          if (response.success) {
            return true;
          } else {
            return false;
          }
        });
      if (!result) {
        onOpenErrorModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmit = useCallback(async () => {
    props.setLoading(true);
    const canRegister = await checkDbForEmail({ email: email });
    props.setLoading(false);
    if (canRegister) {
      setIsOpenConfirmModal(true);
    } else {
      setIsOpenErrorModal(true);
    }
  }, [email]);

  const onConfirmRegistration = async event => {
    await registerUser();
  };

  const checkValidPassword = useCallback(value => {
    let err = false;
    if (value.length < 1) {
      setValidPassword(false);
      err = true;
      return !err;
    }
    const pw = String(value).toLowerCase();
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (regex.test(pw)) {
      err = false;
    } else {
      err = true;
    }
    setValidPassword(!err);
    return !err;
  }, []);

  useEffect(() => {
    if (validEmail && isChecked && validPassword && validConfirmPassword) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [validEmail, isChecked, validPassword, validConfirmPassword]);

  return (
    <>
      <Form id="registration-form" action="https://formsubmit.co/alex.mastro.1989@gmail.com" method="post" className="bg-standard-blue blue-border border-radius p-3 email-form">
        {/* inizio Settings di submitForm.com */}
        <Form.Control type="hidden" name="_captcha" value="true" />
        <Form.Control type="hidden" name="_next" value="http://localhost:3000/registrazioneCompletata" />
        <Form.Control type="hidden" name="_subject" value="Un utente si è registrato sul sito" />
        <Form.Control type="text" name="_honey" style={{ display: "none" }} />
        <Form.Control type="hidden" name="_autoresponse" value="Conferma di avvenuta registrazione a GmConsulting" />
        <Form.Control type="hidden" name="_template" value="table" />
        {/* fine Settings di submitForm.com */}

        {/* Confirmation modal */}
        <Modal show={isOpenConfirmModal} onHide={onCloseConfirmModal} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{props.currentLang === "ita" ? "Conferma registrazione" : "Confirm registration"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.currentLang === "ita" ? `Confermi di volerti registrare tramite l'email: ${email} ?` : `Are you sure you want to register with this email: ${email} ?`}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={onCloseConfirmModal} style={{ flex: 0.5 }}>
              {props.currentLang === "ita" ? "Annulla" : "Cancel"}
            </Button>
            <Button form="registration-form" onClick={onConfirmRegistration} suppressHydrationWarning block variant="success" type="submit" style={{ flex: 1 }}>
              {props.currentLang === "ita" ? "Conferma registrazione" : "Confirm registration"}
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Error modal */}
        <Modal show={isOpenErrorModal} onHide={onCloseErrorModal} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title className="text-red">{props.currentLang === "ita" ? "Errore" : "Error"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{currentErrorLabel ? currentErrorLabel : defaultErrorLabel[props.currentLang]}</Modal.Body>
          <Modal.Footer>
            <Button onClick={onCloseErrorModal} suppressHydrationWarning block variant="info" type="" style={{ flex: 1 }}>
              {props.currentLang === "ita" ? "Chiudi" : "Close"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Form.Group controlId="formEmail mb-0" className="w-100">
          <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Indirizzo Email" : "Email address"}</Form.Label>
          <Form.Control type="email" placeholder="@" name="email" value={email} onChange={checkAndSetEmail} />
          <Form.Text suppressHydrationWarning className="text-dark">
            {props.currentLang === "ita" ? <i>La tua mail verrà utilizzata esclusivamente per accedere al sito.</i> : <i>We'll never share your email with anyone else.</i>}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formEmail mb-0" className="w-100">
          <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Password" : "Password"}</Form.Label>
          <Form.Control type="password" value={password} onChange={handleChangePassword} />
          <Form.Text suppressHydrationWarning className={password.length > 0 && !validPassword ? "text-danger" : "text-dark"}>
            {props.currentLang === "ita" ? (
              <i>La password: deve essere lunga almeno 8 caratteri; deve contenere almeno 1 lettera, 1 numero ed 1 carattere speciale.</i>
            ) : (
              <i>Your password: must be at least 8 characters long, must include at least 1 letter, 1 number ed 1 special character </i>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formEmail mb-0" className="w-100">
          <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Conferma password" : "Confirm password"}</Form.Label>
          <Form.Control type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} />
          <Form.Text suppressHydrationWarning className={password.length > 0 && !validConfirmPassword ? "text-danger" : "text-dark"}>
            {props.currentLang === "ita" ? <i>Il valore dei due campi deve coincidere.</i> : <i>Values of the two fields must be the same.</i>}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPrivacy" className="w-100 mb-3">
          <Form.Check suppressHydrationWarning type="checkbox" label={checkboxLabels[0][props.currentLang]} className="email-form-checkbox-label" onChange={toggleChecked} />
        </Form.Group>

        <Row className="px-3">
          <Button onClick={onClickSubmit} disabled={submitDisabled} suppressHydrationWarning block variant="info">
            {props.currentLang === "ita" ? "Invia" : "Submit"}
          </Button>
        </Row>
      </Form>
    </>
  );
};
