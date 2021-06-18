import '../styles/globals.css'; //Css activation for every part of the app.
import 'bootstrap/dist/css/bootstrap.min.css'; //Css activation for every part of the app.
import '@fortawesome/fontawesome-free/css/all.min.css'; //Fontawesome activation for every part of the app.
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { AppContext } from '../context/contextLib';

function MyApp(props) {
  const { Component, pageProps } = props;

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const languageCookie = cookies.currentLang;
  const loggedUserCookie = cookies.loggedUser;
  const [currentLang, setCurrentLang] = useState(languageCookie ? languageCookie : "ita");
  const [loggedUser, setLoggedUser] = useState(loggedUserCookie ? loggedUserCookie : null);

  const changeSiteLang = (newLang) => {
    setCurrentLang(newLang);
  };

  const registerUser = (newUser) => {
    console.log("Registering this new user:", newUser);
    //Does something with API
  };

  const logInUser = (user) => {
    console.log("Logging in as Alex");
    //Does something with API
    setLoggedUser({ id: "userIdDiAlex", username: "Seiden" });
  };

  const logOutUser = () => {
    console.log("Logging out");
    //Does something with API ... or maybe not necessary?
    setLoggedUser(null);
  };

  useEffect(() => {
    if (currentLang !== cookies.currentLang) {
      setCookie("currentLang", currentLang);
    }
    if (loggedUser && loggedUser !== cookies.loggedUser) {
      setCookie("loggedUser", loggedUser);
    }
    if (!loggedUser) removeCookie("loggedUser");
  }, [currentLang, loggedUser]);

  return (
    <AppContext.Provider value={{
      currentLang,
      changeSiteLang,
      loggedUser,
      logInUser,
      logOutUser
    }}>
      <Component
        {...pageProps}
      />
    </AppContext.Provider>
  );
}

export default MyApp;