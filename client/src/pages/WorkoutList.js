import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, WrapperUl, Ul, Nav, Overlay } from "../styles";
import ImageMap from "../components/ImageMap";
import WorkoutLi from "../components/WorkoutLi";
import styled from "styled-components";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    filterWorkouts();
  }, []);

  const filterWorkouts = (group) => {
    fetch("/api/workouts").then((r) => {
      if (r.ok && group && group !== "default") {
        r.json().then((workouts) => {
          setWorkouts(workouts.filter((workout) => (
            workout.muscle.group === group
          )));
        });
      } else {
        r.json().then(setWorkouts);
      }
    });
  }

  return (
    <Wrapper>
      <ImageMap filterWorkouts={filterWorkouts} />
      <WrapperUl>
        <Ul>
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutLi key={workout.id} workout={workout} />
            ))
          ) : (
            <h2 style={{color: "gray"}}>No workouts found</h2>
          )}
        </Ul>
        <Nav>
          <Button as={Link} to="/create" variant="orange">Create Workout</Button>
        </Nav>
      </WrapperUl>
      <Overlay variant="right"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default WorkoutList