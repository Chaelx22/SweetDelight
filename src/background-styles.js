import styled from "styled-components";

const FullscreenVideoWrap = styled.div`
  position: auto;
  top: -10
  min-height: 300px;
  min-width: 2000px;

`;

const ImgFull = styled.div`
  position: fixed;
  z-index: -1;
`;

const backgroundFinalStyle = {
  fullscreenVideoWrap: { ...FullscreenVideoWrap },
  imageFull: { ...ImgFull },
};

export default backgroundFinalStyle;
