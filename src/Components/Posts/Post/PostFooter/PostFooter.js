import styles from "../Post-style.module.scss";

import { FaHeart, FaEye, FaComment } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const PostFooter = (props) => {
  const source = axios.CancelToken.source()
  let [commentsCount,setCommentsCount]=useState("0")
  useEffect(()=>{axios.get(`http://jsonplaceholder.typicode.com/posts/${props.id}/comments`,{
    cancelToken:source.token
  }).then(response=>setCommentsCount(response.data.length),[]).catch(err=>err);
  return ()=>{source.cancel("canceled request")}
})
  return (
    <div className={styles.footer}>
      <IconContext.Provider  value={{ size: "1rem", style: { padding: 0 } }}>
        <div>
          <FaHeart />
          {Math.floor(Math.random()*10)}

        </div>
        <div>
          <FaComment />
          {commentsCount}

        </div>
        <div>
          <FaEye />
          {Math.floor(Math.random()*10)}

        </div>
      </IconContext.Provider>
    </div>
  );
};

export default PostFooter;
