import React, { useState } from "react";

function NavBar({ setUser }) {
  const [] = useState();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default NavBar