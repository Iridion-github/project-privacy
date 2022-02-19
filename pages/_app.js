import "../styles/globals.css"; //Css activation for every part of the app.
import "bootstrap/dist/css/bootstrap.min.css"; //Css activation for every part of the app.
import "@fortawesome/fontawesome-free/css/all.min.css"; //Fontawesome activation for every part of the app.
import { useCookies } from "react-cookie";
import { useCallback, useEffect, useState } from "react";
import { AppContext } from "../context/contextLib";

function MyApp(props) {
  const { Component, pageProps } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const languageCookie = cookies.currentLang;
  const loggedUserCookie = cookies.loggedUser;
  const quizQuestionsSeen = cookies.quizQuestionsSeen;
  const [currentLang, setCurrentLang] = useState(languageCookie ? languageCookie : "ita");
  const [loggedUser, setLoggedUser] = useState(loggedUserCookie ? loggedUserCookie : null);
  const [currentQuizQuestionsSeen, setCurrentQuizQuestionsSeen] = useState(quizQuestionsSeen ? quizQuestionsSeen : []);

  const changeSiteLang = useCallback(newLang => {
    setCurrentLang(newLang);
  }, []);

  const logInUser = useCallback(user => {
    setLoggedUser(user);
  }, []);

  const logOutUser = useCallback(() => {
    setLoggedUser(null);
  }, []);

  const addToQuizQuestionsSeen = useCallback(newQuestionsIds => {
    const updatedQuestionsSeen = [...currentQuizQuestionsSeen, ...newQuestionsIds];
    setCurrentQuizQuestionsSeen(updatedQuestionsSeen);
  }, []);

  const resetQuizQuestionsSeen = useCallback(() => {
    setCurrentQuizQuestionsSeen([]);
  }, []);

  useEffect(() => {
    if (currentLang !== cookies.currentLang) {
      setCookie("currentLang", currentLang);
    }
    if (loggedUser && loggedUser !== cookies.loggedUser) {
      setCookie("loggedUser", loggedUser);
    }
    if (!loggedUser) removeCookie("loggedUser");
    if (currentQuizQuestionsSeen !== cookies.quizQuestionsSeen) {
      setCookie("quizQuestionsSeen", currentQuizQuestionsSeen);
    }
  }, [currentLang, loggedUser, currentQuizQuestionsSeen]);

  return (
    <AppContext.Provider
      value={{
        currentLang,
        changeSiteLang,
        loggedUser,
        logInUser,
        logOutUser,
        currentQuizQuestionsSeen,
        addToQuizQuestionsSeen,
        resetQuizQuestionsSeen,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
