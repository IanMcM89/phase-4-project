import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../pages/Login";
import NavBar from "./NavBar";
import ExerciseList from "../pages/ExerciseList";
import ExercisePage from "../pages/ExercisePage";
import NewExercise from "../pages/NewExercise";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login user
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Main>
        <Switch>
          <Route path="/create">
            <NewExercise user={user} />
          </Route>
          <Route path="/exercises/:id">
            <ExercisePage user={user} />
          </Route>
          <Route path="/">
            <ExerciseList />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin: 0;
  overflow: hidden;
`;

export default App;
