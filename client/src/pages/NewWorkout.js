import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Input, Textarea, FormField, Label, Error, Overlay } from "../styles";
import styled from "styled-components";

function NewWorkout({ user }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    description: "",
    is_weighted: false,
    sets: 3,
    reps: 12,
    muscle_id: 1,
    target_muscles: [],
    posted_by: user.username
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
        r.json().then((newWorkout) => history.push(`/workouts/${newWorkout.id}`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Wrapper>
        <H1>Create Workout </H1>
        <Form onSubmit={handleSubmit}>
          <Section>
            <FormField>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormField>
            <FormField>
              <Label htmlFor="image_url">Image URL:</Label>
              <Input
                type="url"
                id="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </FormField>
            <FormField>
              <Label htmlFor="description">Method</Label>
              <Textarea
                type="textarea"
                id="description"
                value={formData.description}
                onChange={handleChange}
              />
            </FormField>
          </Section>
          <Section>
            <FormField>
              <Label htmlFor="is_weighted">Weighted</Label>
              <Input
                type="checkbox"
                id="is_weighted"
                value={formData.is_weighted}
                onChange={(e) => {
                  setFormData(
                    { ...formData, [e.target.id]: !formData.is_weighted }
                  );
                }}
              />
            </FormField>
            <FormField>
              <Label htmlFor="sets" style={{ display: "flex", justifyContent: "space-between" }}>
                Sets
                {
                  <Output id="amount" for="sets">
                    {formData.sets}
                  </Output>
                }
              </Label>
              <Input
                type="range"
                id="sets"
                min="1"
                max="10"
                value={formData.sets}
                onChange={handleChange}
              />
            </FormField>
            <FormField>
              <Label htmlFor="sets" style={{ display: "flex", justifyContent: "space-between" }}>
                Sets
                {
                  <Output id="amount" for="reps">
                    {formData.reps}
                  </Output>
                }
              </Label>
              <Input
                type="range"
                id="reps"
                min="1"
                max="100"
                value={formData.reps}
                onChange={handleChange}
              />
            </FormField>
            <FormField>
              <Button type="submit">
                {loading ? "Loading..." : "Submit"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((error) =>
                <Error key={error} style={{ color: 'red' }}>{error}</Error>
              )}
            </FormField>
          </Section>
        </Form>
      </Wrapper>
      <Overlay variant="up" />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin: 0;
  background: url("/images/background.png") repeat;
  background-size: 400px;
`;

const H1 = styled.h1`
  background-color: white;
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  color: royalblue;
  text-align: center;
  width: 50%;
  margin: 0;
  padding: 2%
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0;
  animation: appear 1.4s ease forwards;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  margin: 0;
  padding: 2%;
`;

const Output = styled.output`
  color: orange;
`;

export default NewWorkout