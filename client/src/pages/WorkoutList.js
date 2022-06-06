import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import ImageMap from "../components/ImageMap";
import WorkoutListItem from "../components/WorkoutListItem";
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
          setWorkouts(workouts.filter((workout) => workout.muscle.group === group));
        });
      } else {
        r.json().then(setWorkouts);
      }
    });
  }

  return (
    <Wrapper>
      <ImageMap filterWorkouts={filterWorkouts} />
      <Section>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutListItem key={workout.id} workout={workout} />
          ))
        ) : (
          <>
            <h2>No workouts found</h2>
          </>
        )}
        <Button as={Link} to="/create" variant={"white"}>+</Button>
      </Section>
    </Wrapper>
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

export default WorkoutList