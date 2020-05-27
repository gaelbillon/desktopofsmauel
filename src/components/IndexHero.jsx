import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import Boxed from "../elements/Boxed";
import Profile from "../../static/images/Profile.jpg";
import Link from "./common/GatsbyLink";
import Column from "../elements/Column";
import Emoji from "./common/Emoji";

const Container = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const IntroWrapper = styled.div``;

const LinkWrapper = styled.div`
  padding: 2rem;
  background: white;
  border: 1px var(--color-black-500) solid;
  box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
`;

const Image = styled.div`
  width: 200px;
  height: 200px;

  img {
    box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Subtitle = styled.p``;

const IndexHero = () => {
  return (
    <Container>
      <Image>
        <img src={Profile} alt="Samuel W." />
      </Image>
      <Title>Gaël B.</Title>
      <Column>
        <IntroWrapper>
          <Subtitle>
            I am a{" "}
            <Link to="/#web-developer">web developer</Link>,{" "}
            <Link to="/#blog">blogger</Link> and{" "}
            <Link to="/#photography">photographer</Link>.
          </Subtitle>
          <Subtitle>
            I worked as a Proxy Product Owner at Schneider Electric. 
            Before that, I co-founded Escadrone, a UAV pilot training 
            center. I'm now freelancing.
          </Subtitle>
        </IntroWrapper>
        <LinkWrapper>
          <small>Contact</small>
          <div>
            <Emoji symbol="📬" />{" "}
            <Link to="mailto:gael.billon&#64;gmail.com" target="_blank">
              gael.billon&#64;gmail.com
            </Link>
          </div>
          <div>
            <Emoji symbol="🎤" />{" "}
            <Link
              to="https://www.linkedin.com/in/gaelbillon/"
              target="_blank"
            >
              Linkedin
            </Link>{" "}
            /{" "}
            <Link to="https://www.twitter.com/gaelbillon" target="_blank">
              Twitter
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.instagram.com/gael_billon"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </LinkWrapper>
      </Column>
    </Container>
  );
};

export default IndexHero;
