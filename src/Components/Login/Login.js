import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import FormInput from "./FormInput/FormInput.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import styles from "./Login-style.module.scss";
// localStorage.setItem("allowedUsers",JSON.stringify([{username:"erfan",password:"1234"}]))
let allowedUsers = [{ username: "erfan", password: "1234" }];

function Login(props) {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  const [usernameState, setUsername] = useState("");
  const [passwordState, setPassword] = useState("");
  const [errorMessageState, setError] = useState("");
  const [loginState, setLogin] = useState("1");

  const handleSubmit = (e) => {

    let user = usernameState;
    let pass = passwordState;
    e.preventDefault();
    if (!user || !pass) setError("Both Fields Should Be Filled.");
    else if (user.includes("@")) setError("Username Should Not Include @.");
    else if (
      allowedUsers.find(
        (allowedUser) =>
          allowedUser.username === user && allowedUser.password === pass
      )
    ) {
      localStorage.setItem("isLoggedIn", "1");
      setLogin("1")
    } else {
      setError("Username or Password Not Found!");
    }
  };
  useEffect(() => {
    console.log(isLoggedIn)
if (isLoggedIn===null) {      localStorage.setItem("isLoggedIn", "0");
console.log("hi")
setLogin("0")}
    
  });
  useEffect(() => {
    setError("");
  }, [usernameState, passwordState]);

  // if (loginState === "1") {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className={styles.main}>
      <FormContext.Provider
        value={{
          userInfo: { usernameState, setUsername },
          passInfo: { passwordState, setPassword },
        }}
      >
        <form onSubmit={handleSubmit}>
          <h3>
            USER LOGIN
            <hr />
          </h3>

          <FormInput name="username" type="text" placeholder="Username" />
          <FormInput name="password" type="password" placeholder="Password" />
          <FormInput name="submit" type="submit" placeholder="Username" />

          <ErrorMessage message={errorMessageState} />
        </form>
      </FormContext.Provider>
    </div>
  );
}

export const FormContext = React.createContext();
export default withRouter(Login);
