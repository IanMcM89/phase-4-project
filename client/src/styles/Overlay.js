import styled from "styled-components";

function Overlay({ variant = "right", ...props }) {
  let Component;
  if (variant === "right") {
    Component = OverlayRight;
  } else if (variant === "left") {
    Component = OverlayLeft;
  } else if (variant === "up") {
    Component = OverlayUp;
  } else if (variant === "down") {
    Component = OverlayDown;
  }

  return <Component {...props} />;
}

const OverlayBase = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  height: auto;
  z-index: 9;
  background-color: orange;
`;

const OverlayRight = styled(OverlayBase)`
  animation: swoopRight 0.3s ease-in-out forwards .15s;
`;

const OverlayLeft = styled(OverlayBase)`
  animation: swoopLeft 0.3s ease-in-out forwards .15s;
`;

const OverlayUp = styled(OverlayBase)`
  animation: swoopUp 0.3s ease-in-out forwards .15s;
`;

const OverlayDown = styled(OverlayBase)`
  animation: swoopDown 0.3s ease-in-out forwards .15s;
`;

export default Overlay;
