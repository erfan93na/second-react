import styles from "./Comment-style.module.scss"
const Comment = (props) => {
    return ( <div className={styles.comment}>
        <div>{props.name}</div>
        <div>author: {props.email}</div>
        <div>{props.body}</div>

    </div> );
}
 
export default Comment;