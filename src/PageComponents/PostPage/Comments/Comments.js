import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment/Comment.js"

const Comments = (props) => {
  let [ commentsList, setComments ] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data.map(comment=><Comment {...comment} key={comment.id} />));
      });

  },[id]);
  return <div>
    <b>{commentsList.length} Comments</b>
    {commentsList}</div>;
};

export default Comments;
