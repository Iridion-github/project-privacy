import { Row, Form, Button, Modal } from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../../context/contextLib";
import router from "next/router";

export const LoginForm = function (props) {
  const defaultErrorLabel = [
    {
      ita: `È avvenuto un errore inaspettato, siamo spiacenti.`,
      eng: `An unexpected error occurred, we are sorry.`,
    },
  ];

  const errorLabels = {
    wrongCredentials: {
      ita: "La email o la password non sono corrette",
      eng: "Inserted email or password are incorrect",
    },
  };

  const { logInUser } = useAppContext();

  const [email, setEmail] = useState("");

  const handleChangeEmail = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const [password, setPassword] = useState("");

  const handleChangePassword = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const [currentErrorLabel, setCurrentErrorLabel] = useState("");

  const onOpenErrorModal = useCallback(() => {
    setIsOpenErrorModal(true);
  }, []);

  const onCloseErrorModal = useCallback(() => {
    setIsOpenErrorModal(false);
  }, []);

  const onAutoLogin = async user => {
    logInUser(user);
    router.push("/");
  };

  const attemptLogin = async () => {
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      const result = await fetch(`http://localhost:3000/api/user/login?email=${email}&password=${password}`, {
        method: "POST",
        headers: {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      })
        .then(response => response.json())
        .then(async response => {
          console.log("login - response:", response);
          if (response.success) {
            console.log("login success - loggedUser(response.data.user) :", response.data.user);
            onAutoLogin(response.data.user);
            return true;
          } else {
            const errorLabel = errorLabels[response.data.error] ? errorLabels[response.data.error] : defaultErrorLabel;
            setCurrentErrorLabel(errorLabel[props.currentLang]);
            onOpenErrorModal();
            return false;
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmit = useCallback(async () => {
    props.setLoading(true);
    await attemptLogin({ email: email, password: password });
    props.setLoading(false);
  }, [email, password]);

  useEffect(() => {
    if (email.length >= 6 && password.length >= 8) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, password]);

  return (
    <>
      <Form id="login-form" action="" method="post" className="bg-standard-blue blue-border border-radius p-3 email-form">
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
          <Form.Control type="email" placeholder="@" name="email" value={email} onChange={handleChangeEmail} />
        </Form.Group>

        <Form.Group controlId="formEmail mb-0" className="w-100">
          <Form.Label suppressHydrationWarning>{props.currentLang === "ita" ? "Password" : "Password"}</Form.Label>
          <Form.Control type="password" value={password} onChange={handleChangePassword} />
        </Form.Group>

        <Row className="px-3">
          <Button onClick={onClickSubmit} disabled={submitDisabled} suppressHydrationWarning block variant="info">
            {props.currentLang === "ita" ? "Accedi" : "Login"}
          </Button>
        </Row>
      </Form>
    </>
  );
};
