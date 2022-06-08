import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Button, Overlay } from "../styles";
import CommentList from "../components/CommentList";
import styled from "styled-components";

function WorkoutPage({ user }) {
  const [workout, setWorkout] = useState(null);
  const [response, setResponse] = useState(null)
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api${location.pathname}`).then((r) => {
      if (r.ok) {
        r.json().then(setWorkout);
      } else {
        setResponse(r);
      }
    });
  }, [location.pathname]);

  const handleDelete = () => {
    fetch(`/api/workouts/${workout.id}`, {
      method: "DELETE"
    }).then(history.push("/"));
  };

  return (
    <>
      {workout ? (
        <Wrapper>
          <Section>
            <h1 style={{ color: "darkblue", margin: 0 }}>{workout.title}</h1>
            <h2 style={{ color: "orange", margin: 0, fontWeight: "bold" }}>{workout.muscle.group}</h2>
            <h3>Target Muscles: {workout.target_muscles.join(', ')}</h3>
            <img src={workout.image_url} style={{ width: "200px" }} alt="" />
            <p>Description: {workout.description}</p>
            <span>Weighted: {workout.is_weighted ? 'Yes' : 'No'}</span>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Posted By: {workout.posted_by}</p>
            <p>{workout.created_at}</p>
            {workout.posted_by === user.username ? (
              <Button onClick={() => handleDelete()} style={{ border: "none", fontSize: "2rem" }}>🚮</Button>
            ) : (
              null
            )}
          </Section>
          <CommentList workout={workout} user={user} />
        </Wrapper>
      ) : (
        null
      )}
      {response ? (
        <Response>
          <h1 style={{ fontSize: "4rem" }}>⚠️</h1>
          <h2 style={{ fontSize: "3rem", margin: 0 }}>{response.status}</h2>
          <h3>{response.statusText}</h3>
          <Button as={Link} to="/">Home</Button>
        </Response>
      ) : (
        null
      )}
      <Overlay variant="up" />
    </>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 2%;
  animation: appear 1.4s ease forwards;
`;

const Response = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 90vh;
  margin: auto;
  padding: 2%;
`;

export default WorkoutPage;