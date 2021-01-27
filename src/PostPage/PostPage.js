import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FullPost from "./FullPost/FullPost.js"
import Comments from "./Comments/Comments.js"
import postBanner from "../images/postBanner.jfif";
import styles from "./PostPage.style.module.scss"

const PostPage = () => {
    let [fullPost,setFullPost]=useState("");
    let { id } = useParams();
    useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then(response=>{setFullPost(response.data)});
  });

    return ( 
        <div className={styles.main}>
            <div className={styles.bannerHolder}> <img src={postBanner} alt="postBanner" /></div> 
        <FullPost {...fullPost}/>
        <Comments/>
        </div>
     )
}
 
export default PostPage;