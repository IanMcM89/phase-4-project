import styled from "styled-components";

function Title({ variant = "logo", ...props }) {
  let Component;
  if (variant === "post") {
    Component = TitleBase;
  } else if (variant === "logo") {
    Component = LogoTitle;
  }

  return <Component {...props} />;
}

const TitleBase = styled.h1`
  color: royalblue;
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  margin: 0;
`;

const LogoTitle = styled(TitleBase)`
  ::after {
    content:'/365';
    color: orange;
  }
`;

export default Title;