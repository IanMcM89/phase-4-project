import React, { useState, useEffect } from "react";
import Workout from "../components/Workout";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

  return (
    <>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <Workout key={workout.id} workout={workout}/>
        ))
      ) : (
        <>
          <h2>No workouts Found</h2>
          <button>
            Create a New Workout
          </button>
        </>
      )}
    </>
  )
}

export default WorkoutList