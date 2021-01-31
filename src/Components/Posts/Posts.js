import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import Post from "./Post/Post.js";
import styles from "./Posts-style.module.scss";
const Posts = (props) => {

  const [postsState, setPosts] = useState([]);
  const ref=useRef(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
 
    setPosts(response.data.slice(0,20))
    });
  }, []);

  return  <div ref={ref} className={styles.main} >{postsState.map(post=><Post title={post.title} key={post.id} id={post.id} />)}</div>;
};

export default Posts