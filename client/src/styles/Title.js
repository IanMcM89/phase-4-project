import styled from "styled-components";

const Title = styled.h1`
  color: royalblue;
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  margin: 0;

  ::after {
    content:'/365';
    color: orange;
  }
`;

export default Title;