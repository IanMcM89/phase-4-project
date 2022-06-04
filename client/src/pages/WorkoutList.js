import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageMap from "../components/ImageMap";
import WorkoutTab from "../components/WorkoutTab";
import { Button } from "../styles";
import styled from "styled-components";

function WorkoutList() {
  const [muscles, setMuscles] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const handleDelete = workout => {
    fetch(`/api/workouts/${workout.id}`, {
      method: "DELETE"
    }).then(
      setWorkouts(workouts.filter((element) => element.id !== workout.id))
    );
  };

  useEffect(() => {
    fetch("/api/workouts")
      .then((r) => r.json())
      .then(setWorkouts)
  }, []);

  return (
    <Wrapper>
      <ImageMap/>
      <Section>
        <Link style={{ textDecoration: "none" }} to="/create">
          <Button variant={"white"}>+</Button>
        </Link>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutTab key={workout.id} workout={workout} onDelete={handleDelete} />
          ))
        ) : (
          <>
            <h2>No workouts Found</h2>
            <button as={Link} to="/create">
              Create a New Workout
            </button>
          </>
        )}
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