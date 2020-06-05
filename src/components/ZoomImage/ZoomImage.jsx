import React from "react";
import Zoom from "react-medium-image-zoom";
import styled from "styled-components";
import Img from "gatsby-image";
import "react-medium-image-zoom/dist/styles.css";

const FigureContainer = styled.figure`
  /* margin: var(--var-padding-xl) 0; */
`;

const StyledFigcaption = styled.figcaption`
  font-family: var(--font-secondary);
  text-align: center;
  font-size: 0.9em;
  /* padding: 0.25em 0; */
  color: var(--color-black-500);
`;

const ZoomImage = ({ src, alt, caption, width }) => {
  const text = alt || caption;
  return (
    <Zoom>
      <FigureContainer>
        <img src={src} alt={text} width={width} />
        {text && <StyledFigcaption>{text}</StyledFigcaption>}
      </FigureContainer>
    </Zoom>
  );
};

export default ZoomImage;
