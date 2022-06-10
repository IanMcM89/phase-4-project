import styled from "styled-components";

const Icon = styled.button`
  cursor: pointer;
  border: none;
  filter: brightness(1.5) grayscale(100%);
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

export default Icon;