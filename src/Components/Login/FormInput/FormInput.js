import { useRef, useEffect,useContext } from "react";
import {FormContext} from "../Login.js"
import styles from "./FormInput.module.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { IconContext } from "react-icons";



const FormInput = (props) => {
    const {userInfo,passInfo}=useContext(FormContext)
  const input = useRef();
  console.log("hello")

  useEffect(() => {
    console.log("ho")
    if (props.name === "submit") input.current.value = "LOGIN";
    if (props.name==="password"){ input.current.onchange=(e)=>{passInfo.setPassword(e.target.value)};
    input.current.value=passInfo.passwordState === "" ? "" :passInfo.passwordState}
    if (props.name==="username"){ input.current.onchange=(e)=>{userInfo.setUsername(e.target.value)};
    input.current.value=userInfo.usernameState}
  });
   



  const icon =
    props.name === "username" ? (
      <FaUser />
    ) : props.name === "password" ? (
      <FaLock />
    ) : (
      <BiLogIn />
    );
  return (
    <IconContext.Provider value={{ size: "1.5rem", style: { padding: 0 } }}>
      <div className={styles.formInputHolder}>
        <div className={styles.iconHolder}>{icon}</div>
        <input type={props.type} placeholder={props.placeholder} ref={input} />
      </div>
    </IconContext.Provider>
  );
};

export default FormInput;
