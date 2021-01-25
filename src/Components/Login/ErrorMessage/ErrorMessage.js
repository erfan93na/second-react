import styles from "./ErrorMessageStyle.module.scss"

const ErrorMessage=(props)=>{

    return (
        <div style={{display:props.message?"block":"none"}} className={styles.errorBox}>{props.message}</div>
    )
}

export default ErrorMessage