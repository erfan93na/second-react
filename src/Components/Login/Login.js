import styles from "./Login-style.module.scss"
import {FaUser,FaLock} from "react-icons/fa";
import {BiLogIn} from "react-icons/bi";




export default function Login(props) {
    return (
        <div className={styles.main} >
<form >
<h3>USER LOGIN</h3>
<div>
<FaUser/>
<input type="text" placeholder="Username"/>
</div>
<div>
<FaLock/>
<input type="password" placeholder="Passowrd"/>

</div>
<div>
<FaDoorOpen/>
<input type="submit" placeholder="Passowrd" value="Login"/>

</div>
<div>
</div>
</form>
<div>



</div>

        </div>
    )
}