import React from "react";

function Workout({ workout }) {
  return (
    <>
      <h2>{workout.title}</h2>
      <img src={workout.image_url} style={{ width: "200px" }} alt="" />
      <p>Description: {workout.description}</p>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <span>Posted By: {workout.user.username}</span>
    </>
  )
}

export default Workout