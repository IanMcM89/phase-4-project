import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Title, Form, FormField, Input, Textarea, Label, Error, Button, Overlay } from "../styles";
import styled from "styled-components";

function NewWorkout({ user }) {
  const history = useHistory();
  const [muscles, setMuscles] = useState([]);
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
    posted_by: user.username
  });

  useEffect(() => {
    fetch("/api/muscles")
      .then((r) => r.json())
      .then(setMuscles)
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
      history.push(`/workouts/${newWorkout.id}`)
    } else {
      setErrors(newWorkout.errors);
    }
  }

  return (
    <Wrapper>
      <PostLogo>
        <img src="/images/logo_1.png" style={{ width: "100px" }} alt="App Logo" />
        <Title>Create Workout</Title>
      </PostLogo>
      <PostForm onSubmit={handleSubmit}>
        <Section1>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Push Ups..."
              value={formData.title}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="image_url">Image URL:</Label>
            <Input
              type="url"
              id="image_url"
              placeholder="https://..."
              value={formData.image_url}
              onChange={handleChange}
            />
          </FormField>
          <FormField style={{ height: "100%" }}>
            <Label htmlFor="description">Method</Label>
            <Textarea
              type="textarea"
              id="description"
              placeholder="Maximum 500 characters..."
              value={formData.description}
              onChange={handleChange}
              style={{ height: "80%" }}
            />
          </FormField>
        </Section1>
        <Section2>
          <FormField>
            <Label htmlFor="muscle_id">Muscle Group</Label>
            <Select id="muscle_id" onChange={handleChange}>
              {muscles.map(muscle => (
                <option key={muscle.id} value={muscle.id}>
                  {muscle.title}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField>
            <Label htmlFor="is_weighted">Weights Required ?</Label>
            <Input
              type="checkbox"
              id="is_weighted"
              value={formData.is_weighted}
              onChange={(e) => {
                setFormData(
                  { ...formData, [e.target.id]: !formData.is_weighted }
                );
              }}
              style={{ width: "auto" }}
            />
          </FormField>
          <FormField>
            <RangeLabel htmlFor="sets">
              Sets
              {
                <Output id="amount" htmlFor="sets">
                  {formData.sets}
                </Output>
              }
            </RangeLabel>
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
            <RangeLabel htmlFor="reps">
              Reps
              {
                <Output id="amount" htmlFor="reps">
                  {formData.reps}
                </Output>
              }
            </RangeLabel>
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
              <Error key={error}>{error}</Error>
            )}
          </FormField>
        </Section2>
      </PostForm>
      <Overlay variant="up" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: auto;
`;

const PostLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0;
  animation: appear 0.8s ease forwards;
`;

const PostForm = styled(Form)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 2% 0 2%;
`;

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0;
  padding 0 2% 0 2%;
`;

const Section2 = styled(Section1)`
  width: 40%;
`;

const Select = styled.select`
  color: orange;
  font-family: "Permanent Marker", cursive;
  border: none
`;

const RangeLabel = styled(Label)`
  display: flex;
  justify-content: space-between;
`;

const Output = styled.output`
  color: orange;
`;

export default NewWorkout