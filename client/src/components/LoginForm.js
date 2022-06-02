import React, { useState } from "react";
import { Button, Error, Input, Form, FormField, Label } from "../styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const r = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const userData = await r.json();
    setLoading(false);
    if (r.ok) {
      onLogin(userData);
    } else {
      setErrors(userData.errors);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">
          {loading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((error) =>
          <Error key={error}>{error}</Error>
        )}
      </FormField>
    </Form>
  )
}

export default LoginForm