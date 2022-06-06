import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import ReviewList from "../components/ReviewList";
import styled from "styled-components";

function Workout({ user }) {
  const [workout, setWorkout] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api${location.pathname}`).then((r) => {
      if (r.ok) {
        r.json().then(setWorkout);
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
            <h2>{workout.title}</h2>
            <h3>Muscle Group: {workout.muscle.group}</h3>
            <img src={workout.image_url} style={{ width: "200px" }} alt="" />
            <p>Description: {workout.description}</p>
            <span>Weighted: {workout.is_weighted ? 'Yes' : 'No'}</span>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Posted By: {workout.posted_by}</p>
            {workout.posted_by === user.username ? (
              <Button onClick={() => handleDelete()} style={{ border: "none", fontSize: "2rem" }}>🚮</Button>
            ) : (
              null
            )}
          </Section>
          <ReviewList workout={workout} />
        </Wrapper>
      ) : (
        <NotFound>
          <h1 style={{ fontSize: "4rem" }}>⚠️</h1>
          <h2 style={{ fontSize: "3rem", margin: 0 }}>404</h2>
          <h3>Not Found</h3>
          <p>The requested resource could not be found! </p>
          <Button as={Link} to="/">Home</Button>
        </NotFound>
      )}
    </>
  )
}

const Wrapper = styled.div`
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
`;

const NotFound = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  height: 90vh;
  margin: auto;
  padding: 2%;
`;

export default Workout;