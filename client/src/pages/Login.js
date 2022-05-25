import React, { useState } from "react"
import LoginForm from "../components/LoginForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {
        showLogin ? (
          <>
            <LoginForm onLogin={onLogin}/>
            <p>
              Don't have an account? &nbsp;
              <button onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <p>
              Already have an account? &nbsp;
              <button onClick={() => setShowLogin(true)}>
                Login
              </button>
            </p>
          </>
        )
      }
    </div>
  )
}

export default Login