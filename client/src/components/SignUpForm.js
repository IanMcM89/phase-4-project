import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username, 
        password: password, 
        password_confirmation: passwordConfirmation
      }),
    });

    const newUserData = await response.json();
    setLoading(false);
    if (response.ok) {
      onLogin(newUserData);
    } else {
      setErrors(newUserData.errors);
    }
  }

  return (
    <main className="App">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <button type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <br/>
        {errors.map((error) => 
          <p key={error} style={{ color: 'red' }}>{error}</p>
        )}
      </form>
    </main>
  )
}

export default SignUpForm