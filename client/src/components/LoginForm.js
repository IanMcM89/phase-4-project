import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const userData = await response.json();
    setLoading(false);
    if (response.ok) {
      onLogin(userData);
    } else {
      setErrors(userData.errors);
    }
  }

  return (
    <main className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">
          {loading ? "Loading..." : "Login"}
        </button>
        <br/>
        {errors.map((error) => 
          <p key={error} style={{ color: 'red' }}>{error}</p>
        )}
      </form>
    </main>
  )
}

export default LoginForm