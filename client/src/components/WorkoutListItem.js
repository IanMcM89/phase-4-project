import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function WorkoutListItem({ workout }) {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/workouts/${workout.id}`)}>
      <Section>
        <h2 style={{ color: "darkblue", margin: 0 }}>{workout.title}</h2>
        <p style={{ color: "orange", margin: 0, fontWeight: "bold" }}>{workout.target_muscles.join(', ')}</p>
      </Section>
      <Section>
        <p>Posted By: {workout.posted_by}</p>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: row;
  width: 96%;
  height: 10%;
  margin 1% auto 1% auto;
  padding: 8px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
`;



export default WorkoutListItem