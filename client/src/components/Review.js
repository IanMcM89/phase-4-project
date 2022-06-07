import React from "react";
import styled from "styled-components";

function Review({ review, user, onDelete }) {
  return (
    <Wrapper>
      <h3 style={{ color: "orange", margin: 0 }}>{review.user.username}:</h3>
      <p style={{ margin: "2px" }}>{review.comment}</p>
      <Section>
        <p style={{ filter: "grayscale(50%)", margin: "2px auto 2px 2px" }}>⭐{review.rating}</p>
        {review.user.username === user.username ? (
          <>
            <Icon onClick={() => console.log("edit")}>✏️</Icon>
            <Icon onClick={() => onDelete(review.id)}>🗑️</Icon>
          </>
        ) : (
          null
        )}
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  margin 1% auto 1% auto;
  padding: 8px;
`;

const Section = styled.section`
  display: flex;
`

const Icon = styled.button`
cursor: pointer;
border: none;
filter: brightness(1.5) grayscale(100%);
`;

export default Review