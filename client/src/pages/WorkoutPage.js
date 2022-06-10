import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Overlay } from "../styles";
import Workout from "../components/Workout";
import CommentList from "../components/CommentList";
import Response from "../components/Response";
import styled from "styled-components";

function WorkoutPage({ user }) {
  const [workout, setWorkout] = useState(null);
  const [response, setResponse] = useState(null)
  const location = useLocation();

  useEffect(() => {
    fetch(`/api${location.pathname}`).then((r) => {
      if (r.ok) {
        r.json().then(setWorkout);
      } else {
        setResponse(r);
      }
    });
  }, [location.pathname]);

  return (
    <>
      {(() => {
        if (workout) {
          return (
            <Wrapper>
              <Workout workout={workout} user={user} />
              <CommentList workout={workout} user={user} />
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

export default WorkoutPage;