import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import PageTitle from "elements/PageTitle";
import Resume from "../components/Resume";
import Link from "../components/common/GatsbyLink";
import Layout from "../layout";

const AboutBoxed = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: white;
`;

const ShortBoxed = styled(Boxed)`
  max-width: 50vw;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 80vw;
  }
`;

const AltRow = styled(Row)`
  background: var(--color-white-700);
`;

const InvertRow = styled(Row)`
  background: var(--color-secondary-700);
`;
const PhotoFrame = styled.figure`
  grid-area: Photo;
  width: 100%;
  margin: 0;
  padding: 2rem 0;
`;

const WrapperIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: -100px;
  padding-bottom: 100px;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
    display: block;
  }
`;

const WrapperNav = styled.div`
  > * {
    display: inline-block;
    margin-right: 2rem;
  }
`;

const GridBio = styled.div`
  display: grid;
  grid-template-columns: auto [P2] minmax(auto, 45ch);
`;

const GridSkill = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 7fr);
  grid-gap: var(--var-padding-m);
  width: 100%;
  margin: var(--var-padding-m) 0;
`;

const Intro = styled.div`
  grid-column: span 5 / 8;
  background: var(--color-background-500);
  padding: 2rem;
  z-index: 1000;
  @media only screen and (max-width: 768px) {
    padding: 0;
    background: none;
  }
`;

const P1 = styled.div`
  grid-area: P1;
  max-width: 60ch;
`;
const P2 = styled.div`
  grid-area: P2;
`;

const DesignPart = styled.div`
  h3 {
    margin: 0;
  }
`;
const DesignContent = styled.div``;
const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    font-family: var(--font-primary);
    font-size: 1.2rem;
    color: var(--color-secondary-500);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--var-padding-m);
  }
`;

const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;

const PassionPart = styled.div`
  h3 {
    margin: 0;
  }
`;
const PassionContent = styled.div``;

const ProjectWrapper = styled.div`
  background: var(--color-white-700);
  align-content: space-between;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectContent = styled.div``;

const ProjectBottom = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  justify-self: flex-end;
`;

const ProjectIcon = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3``;

const ProjectBlurb = styled.p`
  font-size: 0.975rem;
`;

const ProjectYear = styled.small`
  margin-bottom: 0;
`;

const ProjectLink = styled(Link)``;

const ProjectBox = ({ img, title, blurb, year, url }) => (
  <ProjectWrapper>
    <ProjectIcon>
      <img src={img} alt={title} width="50px" />
    </ProjectIcon>
    <ProjectContent>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectBlurb>{blurb}</ProjectBlurb>
    </ProjectContent>
    <ProjectBottom>
      <ProjectYear>{year}</ProjectYear>
      <ProjectLink className="noeffect" to={url} target="blank">
        ↗
      </ProjectLink>
    </ProjectBottom>
  </ProjectWrapper>
);

const AboutPage = ({ data }) => {
  return (
    <Layout title="About">
      <Row>
        <AboutBoxed>
          <PageTitle title="About Me" subtitle="Little things about myself" />
          <PhotoFrame>
            <Img
              fluid={data.cover.childImageSharp.fluid}
              width="100%"
              alt="About Cover Photo"
            />
          </PhotoFrame>
          <WrapperIntro>
            <Intro>
              <small>Hi! My name is Gaël.</small>
              <p>
                Hi, I’m Gaël, born and raised in the world wide web. Web developper 
                since 1998, business analyst, mobile web apps developer, search 
                optimizer & webmarketing specialist, webperformance activist, 
                user experience & customer satisfaction zealot.<br />
                <br />
                I like designing web applications, increasing pageviews and 
                crafting a perfect user experience from search engine result 
                pages to after sale customer service.
              </p>
              <WrapperNav>
                <Link to="#bio">
                  <small>01. Bio </small>
                </Link>
                <Link to="#resume">
                  <small>02. Resume </small>
                </Link>
                <Link to="#skills">
                  <small>03. Skills </small>
                </Link>
              </WrapperNav>
            </Intro>
          </WrapperIntro>
        </AboutBoxed>
      </Row>
      <AltRow id="bio" className="full-bleed">
        <Boxed>
          <P1>
            <small>01. Bio</small>
            <h2 className="no-margin">Journey to web development</h2>
            <p>
              Having a computer at home since I whas a kid, I quickly began 
              poking at it. I did not enjoy compulsory education too much. 
              After high school, I taught myself some web development 
              and started freelancing. 
            </p>
          </P1>
          <PhotoFrame>
            <Img
              fluid={data.bio.childImageSharp.fluid}
              width="100%"
              alt="About Cover Photo"
            />
          </PhotoFrame>
          <GridBio>
            <P2>
              <p>
                In 2004 I co-founded a company (escadrone.com) with a friend 
                for the next 3 years years and in 2017 got back before to web 
                application and UX design at Schneider Electric as a Business Analyst.
                <br />
                <br />I'm now working as a freelance web developer.
                <br />
                <br />
                {/* Currently, I work as the Principal Designer at Hyperair, a
                start-up that aims to reinvent travel experiences. */}
              </p>
            </P2>
          </GridBio>
        </Boxed>
      </AltRow>
      <InvertRow id="resume" className="full-bleed">
        <ShortBoxed>
          <small>02. Resume</small>
          <Resume />
        </ShortBoxed>
      </InvertRow>

      <AltRow id="skills" className="full-bleed">
        <Boxed>
          <small>03. Skills</small>
          <h2 className="no-margin">Web development, User Experience, Photography</h2>
          <GridSkill>
            <DesignPart>
              <h3>Design</h3>
            </DesignPart>
            <DesignContent>
              <p>
                I've always been interested in web development.
                Since I built my first website in 1998, I never stopped learning.{" "}
              </p>
              <SkillList>
                <li>Frontend Development</li>
                <li>Web performance</li>
                <li>Web marketing</li>
                <li>Prototyping</li>
                <li>Web & App UI Design</li>
                <li>User Experience Design</li>
              </SkillList>
            </DesignContent>
          </GridSkill>
          <GridSkill>
            <PassionPart>
              <h3>Passion</h3>
            </PassionPart>
            <PassionContent>
              <p>
                Although I like spending my spare time in front of a computer
                I am fortunate enough to have occupations that require going outside.
              </p>
              <SkillList>
                <li>Photogrametry</li>
                <li>Photography</li>
                <li>Cartography</li>
              </SkillList>
            </PassionContent>
          </GridSkill>
        </Boxed>
      </AltRow>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "images/About-Cover.jpg" }) {
      ...fluidImage
    }
    bio: file(relativePath: { eq: "images/Bio.jpg" }) {
      ...fluidImage
    }
  }
`;
