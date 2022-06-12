import React from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";

function ExerciseSpan({ exercise }) {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/exercises/${exercise.id}`)}>
      <Section>
        <H2 style={{ color: "darkblue", margin: 0 }}>{exercise.title}</H2>
        <H4>{exercise.muscle.title}</H4>
      </Section>
      <P>Posted By: {exercise.posted_by}</P>
    </Wrapper>
  )
}

const commonStyles = css`
  display: flex;
  margin: 0;
  transition: 0.3s;
`;

const H2 = styled.h2`
  ${commonStyles}
  color: darkblue;
`;

const H4 = styled.h3`
  ${commonStyles}
  color: orange;
  font-wight: bold;
`;

const P = styled.p`
  ${commonStyles}
  justify-content: center;
  color: gray;
  width: 35%;
`;

const Wrapper = styled.span`
  ${commonStyles}
  background-color: white;
  box-shadow: 5px 5px #888888;
  flex-direction: row;
  width: 96%;
  margin 1% auto 1% auto;
  padding: 8px;
  animation: expand 0.4s ease forwards;

  &:hover {
    background-color: orange;
    ${H4}, ${P} {
      color: white
    }
  }
`;

const Section = styled.section`
  ${commonStyles}
  flex-direction: column;
  width: 65%;
  height: auto;
`;

export default ExerciseSpan;