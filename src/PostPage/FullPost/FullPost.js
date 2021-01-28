import styles from "./FullPost.style.module.scss"

const FullPost = (props) => {
  
  return (
    <div className={styles.fullPost}>
      <h1>{props.title}</h1>
      <div>{props.body}</div>
    </div>
  );
};

export default FullPost;
