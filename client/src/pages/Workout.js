import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
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
      {
        workout ? (
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
                  <button onClick={() => handleDelete()} style={{ border: "none" }}>🚮</button>
                ) : (
                  null
                )
              }
            </Section>
            <List>Reviews:
              {workout.reviews.map((review) =>
                <Review key={review.id}>
                  <p>{review.comment}</p>
                  {/* <p>{review.user.username}</p> */}
                  <p>{review.rating}</p>
                </Review>
              )}
            </List>
          </Wrapper>
        ) : (
          null
        )
      }
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const List = styled.ul`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const Review = styled.li`
background-color: white;
box-shadow: 5px 5px #888888;
display: flex;
flex-direction: row;
width: 96%;
height: 10%;
margin 1% auto 1% auto;
padding: 8px;
`

export default Workout;