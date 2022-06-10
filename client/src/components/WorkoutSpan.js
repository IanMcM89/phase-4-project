import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function WorkoutSpan({ workout }) {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/workouts/${workout.id}`)}>
      <Section>
        <H2 style={{ color: "darkblue", margin: 0 }}>{workout.title}</H2>
        <H4>{workout.muscle.title}</H4>
      </Section>
        <P>Posted By: {workout.posted_by}</P>
    </Wrapper>
  )
}

const H2 = styled.h2`
  color: darkblue;
  margin: 0;
`;

const H4 = styled.h3`
  color: orange;
  margin: 0;
  font-wight: bold;
  transition: 0.3s;
`;

const P = styled.p`
  color: gray;
  display: flex;
  width: 35%;
  margin: 0;
  transition: 0.3s;
`;

const Wrapper = styled.span`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: row;
  width: 96%;
  margin 1% auto 1% auto;
  padding: 8px;
  transition: 0.3s;
  animation: expand 0.4s ease forwards;

  &:hover {
    background-color: orange;
    ${H4}, ${P} {
      color: white
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: auto;
`;

export default WorkoutSpan;