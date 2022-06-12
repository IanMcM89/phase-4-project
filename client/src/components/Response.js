import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import styled, { css } from "styled-components";

function Response({ response }) {
  return (
    <Wrapper>
      <Section>
        <H1>⚠️</H1>
        <H2>{response.status}</H2>
        <h3>{response.statusText}</h3>
        <Button as={Link} to="/">Home</Button>
      </Section>
    </Wrapper>
  )
}

const commonStyles = css`
  display: flex;
  height: 90vh;
`;

const Wrapper = styled.div`
  ${commonStyles}
  width: 100vw;
  background: url("/images/background.png") repeat;
  background-size: 400px;
`;

const Section = styled.section`
  ${commonStyles}
  background-color: white;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
  padding: 2%;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

const H2 = styled(H1)`
  font-size: 4rem;
  margin: 0;
`;

export default Response;