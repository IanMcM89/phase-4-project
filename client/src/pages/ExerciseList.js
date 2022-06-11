import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Overlay } from "../styles";
import BodyMap from "../components/BodyMap";
import ExerciseSpan from "../components/ExerciseSpan";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

function ExerciseList({ muscles }) {
  const [exercises, setExercises] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    filterExercises();
  }, []);

  const filterExercises = (group) => {
    fetch("/api/exercises").then((r) => {
      if (r.ok && group && group !== "default") {
        r.json().then((exercises) => {
          setExercises(exercises.filter((exercise) => (
            exercise.muscle.group === group
          )));
        });
      } else {
        r.json()
          .then((exercises) => {
            setSearchResults(exercises)
            setExercises(exercises)
        })
      }
    });
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    setSearchResults(exercises.filter((exercise) => (
      exercise.title.toLowerCase().includes(value)
    )));
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <BodyMap
        muscles={muscles}
        filterExercises={filterExercises}
      />
      <Section>
        <SearchBar
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
        <Ul>
          {exercises.length > 0 ? (
            searchResults.map((exercise) => (
              <ExerciseSpan key={exercise.id} exercise={exercise} />
            ))
          ) : (
            <h2 style={{ color: "gray" }}>No exercises found</h2>
          )}
        </Ul>
        <Nav>
          <Button as={Link} to="/create" variant="orange">Create Exercise</Button>
        </Nav>
      </Section>
      <Overlay variant="right" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  margin: 0;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 0 0 1% 0;
  padding: 0;
  overflow-y: auto;
`;

const Nav = styled.nav`
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export default ExerciseList