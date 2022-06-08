import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Header } from "../styles";
import { Button, Logo, Overlay } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <Wrapper>
        <Section>
          <Logo>
            <img src="/images/logo_1.png" style={{ width: "100px" }} alt="App Logo" />
            <Title>Fitness App</Title>
          </Logo>
          {
            showLogin ? (
              <>
                <LoginForm onLogin={onLogin} />
                <p>
                  Don't have an account? &nbsp;
                  <Button variant="blue" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </Button>
                </p>
              </>
            ) : (
              <>
                <SignUpForm onLogin={onLogin} />
                <p>
                  Already have an account? &nbsp;
                  <Button variant="blue" onClick={() => setShowLogin(true)}>
                    Login
                  </Button>
                </p>
              </>
            )
          }
        </Section>
      </Wrapper>
      <Overlay variant="down" />
    </>
  )
}

const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: royalblue;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin: 0;
  background: url("/images/background.png") repeat;
  background-size: 400px;
`;

const Section = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  height: 100%;
  margin: auto;
  padding: 2%;
`;

export default Login