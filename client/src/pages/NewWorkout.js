import React, { useState } from "react";
import { useHistory } from "react-router";

function NewWorkout() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    description: "",
    is_weighted: false,
    sets: 3,
    reps: 12
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      setLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Workout </h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="image_url">Image URL:</label>
        <input
          type="url"
          id="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="description">Method</label>
        <input
          type="textarea"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="is_weighted">Weighted</label>
        <input
          type="checkbox"
          id="is_weighted"
          value={formData.is_weighted}
          onChange={(e) => {setFormData(
            {...formData, [e.target.id]: !formData.is_weighted}
            );
          }}
        />
        <br/>
        <label htmlFor="sets">Sets</label>
        <input
          type="number" 
          id="sets" 
          min="1" 
          max="10"
          value={formData.sets}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="reps">Reps</label>
        <input
          type="number" 
          id="reps"  
          min="1" 
          max="100"
          value={formData.reps}
          onChange={handleChange}
        />
        <br/>
        <button type="submit">
          {loading ? "Loading..." : "Submit"}
        </button>
        <br/>
        {errors.map((error) => 
          <p key={error} style={{ color: 'red' }}>{error}</p>
        )}
      </form>
    </>
  )
}

export default NewWorkout