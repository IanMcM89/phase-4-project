import React, { useState } from "react"
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

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
            <SignUpForm onLogin={onLogin}/>
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