import React from "react";
import backgroundFinalStyle from "./background-styles";
import i from "./background.png";

const background = (props) => {
  const FullscreenVideoWrap = backgroundFinalStyle.fullscreenVideoWrap;
  const ImgFull = backgroundFinalStyle.imageFull;

  return (
    <FullscreenVideoWrap>
      <ImgFull>
        <img height="100%" width="400%" src={i}></img>
      </ImgFull>
    </FullscreenVideoWrap>
  );
};

export default background;
