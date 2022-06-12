import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

  const handleMouseOver = (e, muscle) => {
    setSpanDynamic(muscle);
    const src = `/images/body/${e.target.id}.png`;
    switch (e.target.id) {
      case "chest":
        body.src = src;
        break;
      case "abs":
        body.src = src;
        break;
      case "back_neck":
        body.src = src;
        break;
      case "arms_shoulders":
        body.src = src;
        break;
      case "legs_glutes":
        body.src = src;
        break;
      default:
        body.src = source;
    }
  };

  const handleMouseOut = () => {
    setSpanDynamic(null);
    body.src = source;
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
              onMouseOver={(e) => handleMouseOver(e, muscle)}
              onMouseOut={handleMouseOut}
            />
          )}
        </map>
      </Figure>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Figure = styled.figure`
  display: flex;
  margin: 0;
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
  font-size: 1rem
`;

const Img = styled.img`
  border: 0, 
  width: 600px; 
  height: 600px;
  orgWidth: 600px;
  orgHeight: 600px;
`;

export default BodyMap;