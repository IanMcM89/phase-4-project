import React from "react";
import { Header, Logo, Button } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ user, setUser }) {
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
    <Header>
      <Logo style={{justifyContent: "left"}}>
        <img
          src="/images/logo_2.png"
          style={{
            display: "flex",
            width: "60px",
            justifyContent: "center",
            alignItems: "center"
          }}
          alt="App Logo" />
        <Link style={{textDecoration: "none"}} to="/">
          <Title>Fitness App</Title>
        </Link>
      </Logo>
      <Nav>
        <Message>Welcome {user.username}!</Message>
        <Button variant="orange" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Header>
  )
}

const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  color: white;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 49%;
  height: 100%;
  margin: 0 1% 0 auto;
`;

const Message = styled.p`
  font-family: cursive;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin: auto 2% auto 2%;
`;

export default NavBar