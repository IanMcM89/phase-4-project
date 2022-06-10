import React, { useState, useEffect } from "react";
import styled from "styled-components";

function BodyMap({ filterWorkouts }) {
  const [body, setBody] = useState(null);
  const [source, setSource] = useState("/images/body/default.png");
  const [muscles, setMuscles] = useState([]);

  useEffect(() => {
    setBody(document.getElementById("default"))
  }, []);

  useEffect(() => {
    fetch("/api/muscles")
      .then((r) => r.json())
      .then(setMuscles)
  }, []);

  const handleMouseOver = (e) => {
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
    body.src = source;
  };

  const handleClick = (e) => {
    setSource(`/images/body/${e.target.id}.png`);
    filterWorkouts(e.target.id);
  }

  return (
    <Wrapper>
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
              onClick={handleClick}
              onMouseOver={handleMouseOver}
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
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Figure = styled.figure`
  margin: 0;
  animation: appear 1.8s ease forwards;
`;

const Img = styled.img`
  border: 0, 
  width: "640px", 
  height: "640px", 
  orgWidth: "640px", 
  orgHeight: "640px"
`;

export default BodyMap;