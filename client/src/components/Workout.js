import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function Workout({ workout }) {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/workouts/${workout.id}`)}>
      <Section>
        <h2 style={{ color: "darkblue", margin: 0 }}>{workout.title}</h2>
        <p style={{ color: "orange", margin: 0, fontWeight: "bold" }}>{workout.target_muscles.join(', ')}</p>
      </Section>
        <P>Posted By: {workout.posted_by}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: row;
  width: 96%;
  margin 1% auto 1% auto;
  padding: 8px;
  animation: hoverOut 1.0s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: auto;
`;

const P = styled.p`
  color: gray;
  display: flex;
  width: 35%;
  margin: 0;
`;

export default Workout;