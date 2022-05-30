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
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create Workout</button>
        </Link>
        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default NavBar