import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../pages/Login"
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

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      body: JSON.stringify({}),
    }).then((response) => {
      if (response.ok) {
        console.log("Logged Out")
      }
    });
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <p>Welcome ${user.username}</p>
            <button onClick={handleLogout}>
              Logout
            </button>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
