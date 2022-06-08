import React, { useEffect, useState } from "react";
import { Button, WrapperUl, Ul, Nav } from "../styles";
import Comment from "./Comment";

function CommentList({ workout, user }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/comments").then((r) => {
      if (r.ok) {
        r.json().then((comments) => {
          setComments(comments.filter((comment) => {
            return comment.workout.id === workout.id
          }))
        });
      }
    });
  }, [workout.id]);

  const handleDelete = (id) => {
    fetch(`/api/comments/${id}`, {
      method: "DELETE"
    }).then(setComments(comments.filter((comment) => {
      return comment.id !== id
    })))
  };

  const updateCommentList = (patch) => {
    const i = comments.findIndex((comment) => comment.id === patch.id);
    
    comments[i] = patch;

    setComments(comments.map((comment) => comment));
  }

  return (
    <WrapperUl>
      <Ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment 
              key={comment.id} 
              comment={comment} 
              user={user}
              onUpdate={updateCommentList}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <h2 style={{color: "gray"}}>No Comments</h2>
        )}
      </Ul>
      <Nav>
        <Button variant="orange">Leave Comment</Button>
      </Nav>
    </WrapperUl>
  )
}

export default CommentList;