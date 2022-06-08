import React, { useState } from "react";
import { Textarea } from "../styles";
import styled from "styled-components";

function Comment({ comment, user, onDelete, onUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [commentData, setCommentData] = useState(null);

  const handleEdit = () => {
    setIsEditable(!isEditable);
    setCommentData({
      id: comment.id,
      message: comment.message,
    })
  }

  const handleChange = (e) => {
    setCommentData({ 
      ...commentData, 
      [e.target.name]: e.target.value 
    })
  }

  const patchComment = () => {
    fetch(`/api/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((r) => r.json())
      .then((patch) => onUpdate(patch))
      .then(setIsEditable(false));
  }

  return (
    <Wrapper>
      <Section>
        <h3 style={{ color: "orange", margin: 0 }}>{comment.user.username}:</h3>
        <Date>Posted: {comment.created_at}</Date>
      </Section>
      {!isEditable ? (
        <p style={{ margin: "2px" }}>{comment.message}</p>
      ) : (
        <Textarea
          type="textarea"
          name="message"
          placeholder={comment.message}
          value={commentData.message}
          onChange={handleChange}
        />
      )}
      {comment.user.username === user.username ? (
        <Section>
          <Icon onClick={(e) => patchComment(e)} style={{ display: isEditable ? "block" : "none" }}>✔</Icon>
          <Icon onClick={handleEdit}>✏️</Icon>
          <Icon onClick={() => onDelete(comment.id)}>🗑️</Icon>
        </Section>
      ) : (
        null
      )}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  margin 1% auto 1% auto;
  padding: 8px;
`;

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Date = styled.span`
  color: gray;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Icon = styled.button`
  cursor: pointer;
  border: none;
  filter: brightness(1.5) grayscale(100%);
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

export default Comment;