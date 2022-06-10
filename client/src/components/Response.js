import React from "react";
import { Button } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Response({ response }) {
  return (
    <Wrapper>
      <H1>⚠️</H1>
      <H2>{response.status}</H2>
      <h3>{response.statusText}</h3>
      <Button as={Link} to="/">Home</Button>
    </Wrapper>
  )
}

const H1 = styled.h1`
  font-size: 4rem;
`;

const H2 = styled(H1)`
  font-size: 4rem;
  margin: 0;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 90vh;
  margin: auto;
  padding: 2%;
`;

export default Response