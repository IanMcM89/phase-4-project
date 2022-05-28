import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setUser }) {
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
      <button as={Link} to="/create">
        Create a New Workout
      </button>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default NavBar