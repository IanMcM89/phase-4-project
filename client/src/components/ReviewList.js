import React, { useEffect, useState } from "react";
import { Button } from "../styles";
import styled from "styled-components";

function ReviewList({ workout }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews").then((r) => {
      if (r.ok) {
        r.json().then((reviews) => {
          setReviews(reviews.filter((review) => {
            return review.workout.id === workout.id
          }))
        });
      }
    });
  }, [workout.id]);

  return (
    <Wrapper>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <Review key={review.id}>
              <h3 style={{ color: "darkblue", margin: 0 }}>{review.user.username}:</h3>
              <p style={{ margin: "2px" }}>{review.comment}</p>
              <p style={{ filter: "grayscale(50%)", margin: "2px" }}>⭐{review.rating}</p>
            </Review>
          )
        })
      ) : (
        <h2>No Reviews</h2>
      )}
      <Button style={{ margin: "4px auto 4px auto" }}>Leave Review</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
height: 100%;
margin: 0;
padding: 0;
`;

const Review = styled.div`
  background-color: white;
  box-shadow: 5px 5px #888888;
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  margin 1% auto 1% auto;
  padding: 8px;
`;

export default ReviewList