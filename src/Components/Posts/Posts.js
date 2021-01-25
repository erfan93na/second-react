import React, { useEffect,useState } from 'react';
import axios from "axios";
import Post from "./Post/Post.js"
import styles from "./Posts-style.module.scss"
const Posts=(props)=>{
    let [postsState,setPosts]=useState("");
    connst renderendPosts
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            let data=response.data
            setPosts(data.slice(0,20))
        })
    })
    useEffect(()=>{
        
    })
return (
   
    <div className={styles.main}>
          
    </div>
)
}

export default Posts;