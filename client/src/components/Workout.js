import React from "react";
import { useHistory } from "react-router";
import { Icon } from "../styles";
import styled from "styled-components";

function Workout({ workout, user }) {
  const history = useHistory();

  const handleDelete = () => {
    fetch(`/api/workouts/${workout.id}`, {
      method: "DELETE"
    }).then(history.push("/"));
  };

  return (
    <Wrapper>
      <Section>
        <Info>
          <H1>{workout.title}</H1>
          <H2>{workout.muscle.title}</H2>
          <P>Requires Weights:&ensp;<Span>{workout.is_weighted ? 'Yes' : 'No'}</Span></P>
          <P>Sets:&ensp;<Span>{workout.sets}</Span></P>
          <P>Reps:&ensp;<Span>{workout.reps}</Span></P>
        </Info>
        <Figure>
          <Img src={workout.image_url} alt={workout.title} />
        </Figure>
      </Section>
      <Section>
        <Method>
          <h3>Method:</h3>
          <Description>{workout.description}</Description>
          <Nav>
            <p style={{ color: "gray" }}>Posted By: <Span>{workout.posted_by}</Span> {workout.created_at}</p>
            {workout.posted_by === user.username ? (
              <Icon style={{ fontSize: "1.5rem" }} onClick={handleDelete}>🗑️</Icon>
            ) : (
              null
            )}
          </Nav>
        </Method>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 1%;
`;

const Section = styled.section`
  border: solid 1px gray;
  display: flex;
  width: 100%;
  height: 50%;
  animation: appear 1.8s ease forwards;
`;

const Info = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2%;
`;

const H1 = styled.h1`
  color: darkblue;
  font-family: cursive;
  font-size: 2rem;
  margin: 0 0 10px 0;
`;

const H2 = styled(H1)`
  color: orange;
  fontWeight: bold;
  font-size: 1.5rem;
`;

const Span = styled.span`
  color: orangered;
  font-size: 1rem;
`;

const P = styled.p`
  font-weight: bold;
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: flex;
  width: cover;
  position: center;
`;

const Method = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  overflow: hidden;
  padding: 2%;
`;

const Description = styled.p`
  display: flex;
  font-family: cursive;
  height: 100%;
  margin: 0;
  overflow-y: auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  margin: 0;
`;

export default Workout