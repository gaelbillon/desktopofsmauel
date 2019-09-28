import React, { Component } from "react";
import Link from "../GatsbyLink/GatsbyLink";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
  border: ${props =>
    props.invert ? `none` : `1px solid var(--color-brand-500)`};

  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-brand-500);
    color: var(--color-black-500);
  }
`;
const Text = styled.small`
  text-decoration: none;
  margin-bottom: 0;
`;
class CTAButton extends React.Component {
  render() {
    const props = this.props;
    const { invert } = this.props;
    return (
      <Link to={props.href} class="noeffect">
        <Wrapper invert={invert}>
          <Text>{props.text}</Text>
        </Wrapper>
      </Link>
    );
  }
}
export default CTAButton;

CTAButton.propTypes = {
  invert: PropTypes.bool
};

CTAButton.defaultProps = {
  invert: false,
  text: "Read On →"
};
