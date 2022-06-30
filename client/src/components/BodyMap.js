import React, { useState, useEffect } from "react";
import styled,{css} from "styled-components";

function BodyMap({ getExercises }) {
  const [body, setBody] = useState(null);
  const [source, setSource] = useState("/images/body/default.png");
  const [muscles, setMuscles] = useState([]);
  const [spanStatic, setSpanStatic] = useState(null);
  const [spanDynamic, setSpanDynamic] = useState(null);

  useEffect(() => {
    setBody(document.getElementById("default"));
  }, []);

  useEffect(() => {
    fetch("/api/muscles")
      .then((r) => r.json())
      .then(setMuscles)
  }, []);

  const handleHover = (e, muscle) => {
    let value1;
    let value2;
    
    if (e.type === "mouseover") {
      value1 = `/images/body/${e.target.id}.png`
      value2 = muscle
    } else if (e.type === "mouseout") {
      value1 = source
      value2 = null
    }

    body.src = value1;
    setSpanDynamic(value2);
  };

  const handleClick = (e, muscle) => {
    setSpanStatic(muscle ? muscle : null);
    setSource(`/images/body/${e.target.id}.png`);
    getExercises(e.target.id);
  }

  const renderSpan = () => {
    let pText;
    
    if (spanDynamic) {
      pText = spanDynamic
    } else if (spanStatic) {
      pText = spanStatic
    } else {
      pText = null
    }

    return (
      <>
        <P1>{pText ? pText.title : null}</P1>
        <P2>{pText ? pText.sub_groups.join(", ") : null}</P2>
      </>
    )
  }

  return (
    <Wrapper>
      <Span>
        {renderSpan()}
      </Span>
      <Figure>
        <Img
          id="default"
          src={source}
          useMap="#body_image_map"
          alt="Muscle Man"
          onClick={handleClick}
        />
        <map name="body_image_map" id="body_image_map">
          <area
            shape="rect"
            coords="638,638,640,640"
            alt="Image Map"
          />
          {muscles.map((muscle) =>
            <area
              key={muscle.id}
              id={muscle.group}
              title={muscle.title}
              alt={muscle.title}
              shape="poly"
              coords={muscle.coords}
              onClick={(e) => handleClick(e, muscle)}
              onMouseOver={(e) => handleHover(e, muscle)}
              onMouseOut={(e) => handleHover(e, muscle)}
            />
          )}
        </map>
      </Figure>
    </Wrapper>
  );
}

const commonStyles=css`
  display: flex;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1023px) {
    width: 100%;
    height: 50%;
  }
`;

const Figure = styled.figure`
  ${commonStyles}
  animation: appear 1.8s ease forwards;
`;

const Span = styled.span`
  position: absolute;
  top: 12%;
  left: 2%;
  margin: 0;
  z-index: 1;
`;

const P1 = styled.p`
  color: darkblue;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
`;

const P2 = styled(P1)`
  color: goldenrod;
  font-size: 1rem;
  overflow-wrap;
  width: 50%;
`;

const Img = styled.img`
  border: 0, 
  width: 600px; 
  height: 600px;
  orgWidth: 600px;
  orgHeight: 600px;

  @media (max-width: 1023px) {
    width: 500px; 
    height: 500px;
    orgWidth: 500px;
    orgHeight: 500px;
  }
`;

export default BodyMap;