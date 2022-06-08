import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20%;
  margin: 8px 0 16px;
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

export default Logo;