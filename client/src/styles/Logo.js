import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20%;
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

export default Logo;