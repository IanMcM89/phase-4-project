import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Login from "../pages/Login";
import '../styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login user
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar setUser={setUser}/>
      <main className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <p>Welcome {user.username}</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
