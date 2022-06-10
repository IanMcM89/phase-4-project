import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { Button, Error, Textarea, Form, FormField, Label } from "../styles";
import styled from "styled-components";

function CommentList({ workout, user }) {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/comments").then((r) => {
      if (r.ok) {r.json().then((comments) => {
          setComments(comments.filter((comment) => (
            comment.workout.id === workout.id
          )));
        });}
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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const r = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        user_id: user.id,
        workout_id: workout.id,
      }),
    });

    const newComment = await r.json();
    setLoading(false);
    if (r.ok) {
      setComments([...comments, newComment]);
      setShowForm(!showForm);
      setMessage("");
    } else {
      setErrors(newComment.errors);
    }
  }

  return (
    <Wrapper>
      {showForm ? (
        <Section>
          <p style={{ color: "gray" }}>
            Commenting on {user.username === workout.posted_by ? "your own" : `${workout.posted_by}'s`} post...
          </p>
          <Form onSubmit={handleSubmit} style={{ height: "60%", animation: "expand 0.8s ease forwards" }}>
            <FormField style={{ height: "inherit" }}>
              <Label htmlFor="message">Comment:</Label>
              <Textarea
                type="textarea"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormField>
            <FormField>
              <Button type="submit">
                {loading ? "Loading..." : "Post"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((error) =>
                <Error key={error}>{error}</Error>
              )}
            </FormField>
          </Form>
        </Section>
      ) : (
        <Section>
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
            <h2 style={{ color: "gray" }}>
              No Comments
            </h2>
          )}
        </Section>
      )}
      <Nav>
        <Button onClick={() => setShowForm(!showForm)} variant="orange">
          {showForm ? "Comments" : "Leave Comment"}
        </Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  margin: 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 0 0 1% 0;
  overflow-y: auto;
`;

const Nav = styled.nav`
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export default CommentList;