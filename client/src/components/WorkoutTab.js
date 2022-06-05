import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Workout({ workout, user, onDelete }) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (workout.posted_by === user.username) setIsHidden(!isHidden);
  }, []);

  return (
    <Wrapper>
      <Section>
        <h2 style={{ color: "darkblue", margin: 0 }}>{workout.title}</h2>
        <p style={{ color: "orange", margin: 0, fontWeight: "bold" }}>{workout.target_muscles.join(', ')}</p>
      </Section>
      <Section>
        <p>Posted By: {workout.posted_by}</p>
      </Section>
      {!isHidden ? (
          <>
            <button onClick={() => onDelete(workout)} style={{ border: "none" }}>🚮</button>
          </>
        ) : (
          null
        )
      }
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



export default Workout