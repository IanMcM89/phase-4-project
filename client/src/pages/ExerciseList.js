import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BodyMap from "../components/BodyMap";
import ExerciseSpan from "../components/ExerciseSpan";
import SearchBar from "../components/SearchBar";
import { Button, Overlay } from "../styles";
import styled,{css} from "styled-components";

function ExerciseList({ muscles }) {
  const [exercises, setExercises] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = (group) => {
    fetch("/api/exercises").then((r) => {
      r.json().then((exercises) => {
        const filtered = exercises.filter((exercise) => (
          exercise.muscle.group === group
        ));

        let results;

        if (group && group !== "default") {
          results = filtered
        } else {
          results = exercises
        }

        setExercises(results);
        setSearchResults(results);
        setSearchValue('');
      })
    });
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const keys = ["title", "posted_by", "muscle"];

    setSearchValue(e.target.value);
    setSearchResults(exercises.filter((exercise) => {
      for (let key of keys) {
        const objKey = exercise[key];

        if ((!objKey.group) && (objKey.toLowerCase().includes(value))) {
          return true;
        } else if ((objKey.group) && objKey.group.includes(value)) {
          return true;
        }
      }
      return false;
    }));
  };

  return (
    <Wrapper>
      <BodyMap
        muscles={muscles}
        getExercises={getExercises}
      />
      <Section>
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
          <SearchBar
            searchValue={searchValue}
            handleSearch={handleSearch}
          />
          <Button as={Link} to="/create" variant="orange">Create Exercise</Button>
        </Nav>
      </Section>
      <Overlay variant="right" />
    </Wrapper>
  )
}

const commonStyles=css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: lightgray;
  overflow: hidden;
`;

const Section = styled.div`
  ${commonStyles}
  flex-direction: column;
  width: 40%;
`;

const Ul = styled.ul`
  ${commonStyles}
  flex-direction: column;
  height: 90%;
  margin: 0 0 1% 0;
  padding: 0;
  overflow-y: auto;
`;

const Nav = styled.nav`
  ${commonStyles}
  background-color: darkblue;
  justify-content: center;
  height: 10%;
`;

export default ExerciseList;