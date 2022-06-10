import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Overlay } from "../styles";
import ImageMap from "../components/ImageMap";
import WorkoutSpan from "../components/WorkoutSpan";
import styled from "styled-components";

function WorkoutList({ muscles }) {
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
      <ImageMap 
        filterWorkouts={filterWorkouts} 
        muscles={muscles}
      />
      <Section>
        <Ul>
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutSpan key={workout.id} workout={workout} />
            ))
          ) : (
            <h2 style={{color: "gray"}}>No workouts found</h2>
          )}
        </Ul>
        <Nav>
          <Button as={Link} to="/create" variant="orange">Create Workout</Button>
        </Nav>
      </Section>
      <Overlay variant="right"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  margin: 0;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 0 0 1% 0;
  padding: 0;
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

export default WorkoutList