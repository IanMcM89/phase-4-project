import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Login from "../pages/Login";
import WorkoutList from "../pages/WorkoutList";
import '../styles/App.css';
import NewWorkout from "../pages/NewWorkout";

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
      <main className="App">
        <BrowserRouter>
          <NavBar setUser={setUser}/>
          <Switch>
            <Route path="/create">
              <NewWorkout user={user}/>
            </Route>
            <Route path="/">
              <p>Welcome {user.username}</p>
              <WorkoutList/>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
