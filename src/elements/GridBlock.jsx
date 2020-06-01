import React from "react";
import styled from "styled-components";



const GridContainer = styled.div`
  margin: var(--var-padding-m) 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--var-padding-s);
`;

const StyledGridCaption = styled.figcaption`
  font-family: var(--font-secondary);
  text-align: center;
  font-size: 0.9em;
  padding: 0.25em 0;
  color: var(--color-black-500);
`;

const GridBlock = ({ children, className, gridCaption }) => (
	<GridContainer>
  		<Grid className={className}>{children}</Grid>
  		<StyledGridCaption>{gridCaption}</StyledGridCaption>
  	</GridContainer>
);

export default GridBlock;
