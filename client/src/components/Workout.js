import React from "react";

function Workout({ workout, onDelete }) {
  return (
    <>
      <h2>{workout.title}</h2>
      <img src={workout.image_url} style={{ width: "200px" }} alt="" />
      <p>Description: {workout.description}</p>
      <span>Weighted: {workout.is_weighted ? 'Yes' : 'No'}</span>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <span>Posted By: {workout.user.username}</span>
      <button onClick={() => onDelete(workout)} style={{ border: "none" }}>🚮</button>
    </>
  )
}

export default Workout