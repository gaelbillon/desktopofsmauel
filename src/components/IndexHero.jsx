import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram,
//   faMedium,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCube } from "@fortawesome/free-solid-svg-icons";
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
        <img src={Profile} alt="Gaël B" />
      </Image>
      <Title>Gaël B.</Title>
      <Column>
        <IntroWrapper>
          <Subtitle>
            I am a <Link to="/#web-developer">web developer</Link>,{" "}
            <Link to="/#blog">blogger</Link> and{" "}
            <Link to="/#photography">photographer</Link>.
          </Subtitle>
          <Subtitle>
            I worked as a Proxy Product Owner at Schneider Electric. Before
            that, I co-founded Escadrone, a UAV pilot training center. I'm now
            freelancing.
          </Subtitle>
        </IntroWrapper>
        <LinkWrapper>
          <small>Contact</small>
          <div>
            <Emoji symbol="📬" />{" "}
            <Link
              to="mailto:&#103;&#097;&#101;&#108;&#046;&#098;&#105;&#108;&#108;&#111;&#110;+&#103;&#098;&#099;&#111;&#109;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
              target="_blank"
              aria-label="Email"
              rel="noopener"
            >
              &#103;&#097;&#101;&#108;&#046;&#098;&#105;&#108;&#108;&#111;&#110;+&#103;&#098;&#099;&#111;&#109;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </Link>
          </div>
          <div>
            <Emoji symbol="🎤" />{" "}
            <Link
              to="https://www.linkedin.com/in/gaelbillon/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener"
            >
              Linkedin
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.twitter.com/gaelbillon"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              Twitter
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.instagram.com/gael_billon"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
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
