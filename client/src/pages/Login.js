import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Header } from "../styles";
import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Header/>
      <Wrapper>
        <Logo>
          <img src="/images/logo_1.png" style={{width: "100px"}} alt="App Logo"/>
          <Title>Fitness App</Title>
        </Logo>
        {
          showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <p>
                Don't have an account? &nbsp;
                <Button onClick={() => setShowLogin(false)}>
                  Sign Up
                </Button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm onLogin={onLogin} />
              <p>
                Already have an account? &nbsp;
                <Button onClick={() => setShowLogin(true)}>
                  Login
                </Button>
              </p>
            </>
          )
        }
      </Wrapper>
    </>
  )
}

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20%;
  margin: 8px 0 16px;
`;

const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: royalblue;
`;

const Wrapper = styled.main`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  height: 90vh;
  margin: auto;
  padding: 2%;
`;

export default Login