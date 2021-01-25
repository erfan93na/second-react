import PostFooter from "../Post/PostFooter/PostFooter.js"
import styles from "./Post-style.module.scss";
import banner from "../../../images/banner.jpg";



const Post = (props) => {
  return (
    <div>
      <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.postTitle}>{props.title}</div>
      <PostFooter/>
    </div>
  );
};
