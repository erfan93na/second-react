import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import Post from "./Post/Post.js";
import styles from "./Posts-style.module.scss";
const Posts = (props) => {

  const [postsState, setPosts] = useState([]);
  const ref=useRef(null)
  useEffect(()=>{
      ref.current.onscroll=()=>{   this.style.backgroundColor="blue";   console.log(4)
      }
  })
//   const handleScroll=()=>{
//       if (document.documentElement.scrollHeight-(document.documentElement.clientHeight
// +window.pageYOffset)>500        ) alert("hi")
//   }
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   let data=response.data.slice(0,20)
    //   setPosts(data.map(post=><Post title={post.title} key={post.id} id={post.id} />))
    setPosts(response.data.slice(0,20))
    });
  }, []);
 console.log(postsState)

  return  <div ref={ref} className={styles.main} >{postsState.map(post=><Post title={post.title} key={post.id} id={post.id} />)}</div>;
};

export default Posts