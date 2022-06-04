import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ImageMap({ filterWorkouts }) {
  const [bodyImg, setBodyImg] = useState(null);
  const [bodyImgSrc, setBodyImgSrc] = useState("/images/body/default.png");
  const [muscles, setMuscles] = useState([]);

  useEffect(() => {
    fetch("/api/muscles")
    .then((r) => r.json())
    .then(setMuscles)
    .then(setBodyImg(document.getElementById("default")))
  }, []);

  const handleMouseOver = (e) => {
    const src = `/images/body/${e.target.id}.png`;
    switch (e.target.id) {
      case "chest":
        bodyImg.src = src;
        break;
      case "abs":
        bodyImg.src = src;
        break;
      case "back_neck":
        bodyImg.src = src;
        break;
      case "upper_arms_shoulders":
        bodyImg.src = src;
        break;
      case "forearms":
        bodyImg.src = src;
        break;
      case "upper_legs_glutes":
        bodyImg.src = src;
        break;
      case "lower_legs":
        bodyImg.src = src;
        break;
      default:
        bodyImg.src = bodyImgSrc;
    }
  };

  const handleMouseOut = () => {
    bodyImg.src = bodyImgSrc;
  };

  const handleClick = (e) => {
    setBodyImgSrc(`/images/body/${e.target.id}.png`);
    filterWorkouts(e.target.id);
  }

  return (
    <Figure>
      <Img
        id="default"
        src={bodyImgSrc}
        useMap="#body_image_map"
        alt="Muscle Man"
        onClick={(e) => handleClick(e)}
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
            onClick={(e) => handleClick(e)}
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
          />
        )}
      </map>
    </Figure>
  );
}

const Figure = styled.figure`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0;
`;

const Img = styled.img`
  border: 0, 
  width: "640px", 
  height: "640px", 
  orgWidth: "640px", 
  orgHeight: "640px"
`;

export default ImageMap;