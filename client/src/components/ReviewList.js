import React, { useEffect, useState } from "react";
import { Button, WrapperUl, Ul, Nav } from "../styles";
import Review from "../components/Review";

function ReviewList({ workout, user }) {
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

  const handleDelete = (id) => {
    fetch(`/api/reviews/${id}`, {
      method: "DELETE"
    }).then(setReviews(reviews.filter((review) => {
      return review.id !== id
    })))
  };

  return (
    <WrapperUl>
      <Ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Review 
              key={review.id} 
              review={review} 
              user={user}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <>
            <h2>No Reviews</h2>
          </>
        )}
      </Ul>
      <Nav>
        <Button variant="orange">Leave Review</Button>
      </Nav>
    </WrapperUl>
  )
}

export default ReviewList