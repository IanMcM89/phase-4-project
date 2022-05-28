import React, { useState } from "react";
import { useHistory } from "react-router";

function NewWorkout() {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    description: "",
    is_weighted: false,
    sets: 3,
    reps: 12
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const r = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newWorkout = await r.json();
    setLoading(false);
    if (r.ok) {
      history.push("/");
    } else {
      setErrors(newWorkout.errors);
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Workout </h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="image_url">Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="description">Method</label>
        <input
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="is_weighted">Weighted</label>
        <input
          type="checkbox"
          name="is_weighted"
          value={formData.is_weighted}
          onChange={handleChange}
        />
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