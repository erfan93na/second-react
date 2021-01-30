import { withRouter,Link } from "react-router-dom";
import PostFooter from "../Post/PostFooter/PostFooter.js"
import styles from "./Post-style.module.scss";
import banner from "../../../misc/images/banner.jpg";



const Post = (props) => {
 
    
  return (
    <Link to={`/posts/${props.id}`} ><div className={styles.main} >
    <img src={banner} alt="banner" className={styles.banner} />
    <div className={styles.postTitle}>{props.title}</div>
    <PostFooter id={props.id}/>
  </div></Link>
    
  );
};

export default withRouter(Post)