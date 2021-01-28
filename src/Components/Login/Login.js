import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import FormInput from "./FormInput/FormInput.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";
import styles from "./Login-style.module.scss";

let allowedUsers = JSON.parse(localStorage.getItem("allowedUsers"));

function Login(props) {
  console.log(allowedUsers);
  const [usernameState, setUsername] = useState("");
  const [passwordState, setPassword] = useState("");
  const [errorMessageState, setError] = useState("");

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
      props.history.push("/posts");
    } else {
      setError("Username or Password Not Found!");
    }
  };

  useEffect(() => {
    setError("");
  }, [usernameState, passwordState]);

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
