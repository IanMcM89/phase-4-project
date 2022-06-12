import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../pages/Login";
import NavBar from "./NavBar";
import ExerciseList from "../pages/ExerciseList";
import ExercisePage from "../pages/ExercisePage";
import NewExercise from "../pages/NewExercise";
import styled,{css} from "styled-components";

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
    <Wrapper>
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
    </Wrapper>
  );
}

const commonStyles=css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background: url("/images/background.png") repeat;
  background-size: 400px;
`;

const Main = styled.main`
  ${commonStyles}
  align-items: center;
  height: 90vh;
`;

export default App;
