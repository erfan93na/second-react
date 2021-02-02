import styles from "./ErrorMessageStyle.module.scss"

const ErrorMessage=(props)=>{

    return (
        <div className={styles.errorBox}>{props.message}</div>
    )
}

export default ErrorMessage