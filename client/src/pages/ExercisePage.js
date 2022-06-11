import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Overlay } from "../styles";
import Exercise from "../components/Exercise";
import CommentList from "../components/CommentList";
import Response from "../components/Response";
import styled from "styled-components";

function ExercisePage({ user }) {
  const [exercise, setExercise] = useState(null);
  const [response, setResponse] = useState(null)
  const location = useLocation();

  useEffect(() => {
    fetch(`/api${location.pathname}`).then((r) => {
      if (r.ok) {
        r.json().then(setExercise);
      } else {
        setResponse(r);
      }
    });
  }, [location.pathname]);

  return (
    <>
      {(() => {
        if (exercise) {
          return (
            <Wrapper>
              <Exercise exercise={exercise} user={user} />
              <CommentList exercise={exercise} user={user} />
            </Wrapper>
          )
        } else if (response) {
          return (
            <Response response={response} />
          )
        } else {
          return (<Wrapper/>)
        }
      })()}
      <Overlay variant="left" />
    </>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  width: 100%;
  height: 100%;
`;

export default ExercisePage;