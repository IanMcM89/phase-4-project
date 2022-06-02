import React from "react";

function Workout({ workout, onDelete }) {
  return (
    <>
      <h2>{workout.title}</h2>
      <h3>Muscle Group: {workout.muscle.group}</h3>
      <img src={workout.image_url} style={{ width: "200px" }} alt="" />
      <p>Description: {workout.description}</p>
      <span>Weighted: {workout.is_weighted ? 'Yes' : 'No'}</span>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <p>Posted By: {workout.posted_by}</p>
      <ul>Reviews:
        {workout.reviews.map((review) => 
          <li key={review.id}>{review.comment} {review.rating}</li>
        )}
      </ul>
      <button onClick={() => onDelete(workout)} style={{ border: "none" }}>🚮</button>
    </>
  )
}

export default Workout