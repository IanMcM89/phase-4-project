import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Login from "../pages/Login";
import WorkoutList from "../pages/WorkoutList";
import Workout from "../pages/Workout";
import NewWorkout from "../pages/NewWorkout";
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
      <Wrapper>
        <Switch>
          <Route path="/create">
            <NewWorkout user={user} />
          </Route>
          <Route path="/workouts/:id">
            <Workout user={user}/>
          </Route>
          <Route path="/">
            <WorkoutList/>
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin: auto;
  overflow: hidden;
`;

export default App;
