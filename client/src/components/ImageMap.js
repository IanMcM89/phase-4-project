import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ImageMap() {
  const [bodyImg, setBodyImg] = useState(null);
  const [bodyImgSrc, setBodyImgSrc] = useState("/images/body/default.png");

  useEffect(() => {
    setBodyImg(document.getElementById("body_image"));
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
    setBodyImgSrc(`/images/body/${e.target.id}.png`)
  }

  return (
    <Figure>
      <Img
        id="body_image"
        src={bodyImgSrc}
        useMap="#body_image_map"
        alt=""
      />
      <map name="body_image_map" id="body_image_map">
        <area
          shape="rect"
          coords="638,638,640,640"
          alt="Image Map"
        />
        <area
          id="chest"
          title="Chest"
          alt="Chest"
          shape="poly"
          coords="160,186,132,197,115,213,115,145,160,141,206,145,208,210,186,195"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="abs"
          title="Abs"
          alt="Abs"
          shape="poly"
          coords="161,328,116,284,116,210,160,189,204,209,435,250,523,250,524,276,435,276,435,250,204,209,204,283"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="back_neck"
          title="Back/Neck"
          alt="Back/Neck"
          shape="poly"
          coords="452,270,428,190,434,132,480,91,520,132,530,191,505,270,481,285,196,135,126,135,145,109,176,109,196,135"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="upper_arms_shoulders"
          title="Upper Arms/Shoulders"
          alt="Upper Arms/Shoulders"
          shape="poly"
          coords="99,233,72,216,92,133,126,134,199,133,225,230,256,215,234,133,120,134,408,132,392,214,416,233,443,132,406,132,517,131,544,240,572,225,546,131,125,134"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="forearms"
          title="Forearms"
          alt="Forearms"
          shape="poly"
          coords="49,301,71,218,98,237,68,301,252,303,220,238,256,216,280,303,362,305,385,225,418,240,388,305,568,307,540,243,573,225,593,307"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="upper_legs_glutes"
          title="Upper Legs/Glutes"
          alt="Upper Legs/Glutes"
          shape="poly"
          coords="107,283,110,423,212,423,212,282,427,279,426,431,532,432,532,278"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
        <area
          id="lower_legs"
          title="Lower Legs"
          alt="Lower Legs"
          shape="poly"
          coords="109,433,120,541,203,540,209,433,423,435,435,553,521,553,532,435"
          onClick={(e) => handleClick(e)}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}
        />
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