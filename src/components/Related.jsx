import React from "react";
import styled from "styled-components";
import Boxed from "../elements/Boxed";
import Link from "./common/GatsbyLink";

const Container = styled.section`
  margin-top: var(--var-padding-l);
  background-color: var(--color-white-300);
`;

const Wrapper = styled(Boxed)`
  padding: var(--padding-m) 0;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Related = ({ node }) => {
  return (
    <Container className="full-bleed">
      <Wrapper size="small">
        <small>Read Next</small>
        <Link to={node.path}>
        <h3>{node.title}</h3>
        <p>{node.excerpt}</p>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Related;
