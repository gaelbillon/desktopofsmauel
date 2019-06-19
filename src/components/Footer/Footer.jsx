import React, { Component } from "react";
import Link from "../GatsbyLink/GatsbyLink";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faCog, faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const FooterItem = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-right: 2rem;
color: var(--color-secondary-500);
border-bottom: 0;
text-align: center;
&:last-child {
  margin-right: 0;
`;

const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  border-bottom: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(32px + (40 - 32) * ((100vw - 320px) / (1600 - 320)));
  font-family: var(--secondary-font);
  font-weight: 400;
  text-align: center;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  min-height: 30vh;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const Main = styled.footer`
  max-width: 60vw;
  padding: 0 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 70vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0 1rem;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Main>
        <Container>
          <FooterItem to="/rss.xml">
            <FooterIcon icon={faRss} />
            <FooterText>RSS</FooterText>
          </FooterItem>
          <FooterItem to="/about">
            <FooterText>About</FooterText>
          </FooterItem>
          <FooterItem to="/blog">
            <FooterText>Blog</FooterText>
          </FooterItem>
          <FooterItem to="https://pins.desktopofsamuel.com">
            <FooterText>Pins</FooterText>
          </FooterItem>
          <FooterItem to="https://photo.desktopofsamuel.com">
            <FooterText>Photo</FooterText>
          </FooterItem>
          <FooterItem to="/changelog">
            <FooterText>Changelog</FooterText>
          </FooterItem>
        </Container>
      </Main>
    );
  }
}
