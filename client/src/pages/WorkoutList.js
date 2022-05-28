import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Workout from "../components/Workout";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  const handleDelete = workout => {
    fetch(`/api/workouts/${workout.id}`, {
      method: "DELETE"
    }).then(
      setWorkouts(workouts.filter((element) => element.id !== workout.id))
    );
  };

  useEffect(() => {
    fetch("/api/workouts")
      .then((r) => r.json())
      .then(setWorkouts)
  }, []);

  return (
    <>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <Workout key={workout.id} workout={workout} onDelete={handleDelete}/>
        ))
      ) : (
        <>
          <h2>No workouts Found</h2>
          <button as={Link} to="/create">
            Create a New Workout
          </button>
        </>
      )}
    </>
  )
}

export default WorkoutList