import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Boxed from "elements/Boxed";
import Column from "elements/Column";
import ReadOn from "elements/ReadOn";
import Link from "../components/common/GatsbyLink";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import WorkIndex from "../components/WorkIndex";
import CTAButton from "../components/common/MajorButton";
import BlogListing from "../components/BlogListing";
import WorkIcon from "../../static/SVG/Work.svg";
import BlogIcon from "../../static/SVG/Blog.svg";
import Now from "../components/Now";
// import Profile from "../../static/images/Profile.webp";
import IndexHero from "../components/IndexHero";
import IndexPhoto from "../components/IndexPhoto";

const Box = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: white;
`;

const More2Button = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  border: 0;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--color-brand-500);
    color: var(--color-black-500);
  }
`;

const ColumnSpaced = styled(Column)`
  grid-gap: 3rem;
`;

const UnevenColumn = styled(ColumnSpaced)`
  grid-template-columns: 7fr 3fr;
`;

const GreyRow = styled(Row)`
  background: var(--color-white-300);
`;

const ContactButton = styled.button`
  border: none;
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    background: var(--color-brand-500);
    color: var(--color-black-500);
  }
`;
const StickyBox = styled.div`
  height: 100%;
`;

const RightStickyBox = styled.div`
  @media only screen and (min-width: 600px) {
    order: 1;
  }
`;

const StickyWrapper = styled.div`
  position: relative;
  padding: var(--var-padding-m) 0;

  @media only screen and (min-width: 600px) {
    position: sticky;
    top: 3rem;
  }
`;

const AboutIcon = styled.div`
  justify-self: flex-end;
`;

const HalfBox = styled.div``;

// const ProfileImage = styled.div`
//   width: 100%;

//   img {
//     box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
//   }
// `;

const Subtitle = styled.p`
  font-size: 1.025rem;
  font-family: var(--font-secondary);
  font-weight: 500;
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const Blog = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  align-items: flex-start;

  & > div:nth-child(2) {
    grid-column: span 4;
  }

  & > div:nth-child(3) {
    grid-column: span 4;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 10%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  z-index: 1000;
`;

const BlogIntro = styled.div`
  margin-bottom: var(--var-padding-m);
  p {
    color: var(--color-secondary-700);
  }
`;

const Contact = styled.div`
  display: inline-block;

  small {
    font-family: var(--font-secondary);
  }

  h2 {
    color: var(--color-secondary-700);
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2px;
  }
`;

const PhotoIntro = styled.div`
  padding: var(--var-padding-m);
  h2 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    grid-column: span 2;
  }
`;
const IndexPage = ({ data }) => {
  const workEdges = data.Work.edges;
  const blogEdges = data.Blog.edges;
  const photo1Edges = data.Photo1.edges;
  const photo2Edges = data.Photo2.edges;
  return (
    <Layout title="Home">
      <Row>
        <IndexHero />
      </Row>
      <GreyRow className="full-bleed" id="experience-designer">
        <Box>
          <ColumnSpaced>
            <StickyBox>
              <StickyWrapper>
                <small>01.</small>
                <h2 className="no-margin">Web developer and marketer</h2>

                <p>
                  I'm a multi-disciplinary developer with 10 years of experience
                  in delivering apps &  websites that user wants to use.
                </p>
                <ReadOn text="View My Work" href="/work" />
              </StickyWrapper>
            </StickyBox>
            <WorkIndex postEdges={workEdges} />
          </ColumnSpaced>
        </Box>
      </GreyRow>
      <Row id="blog">
        <Box>
          <UnevenColumn>
            <RightStickyBox>
              <StickyWrapper>
                <BlogIntro>
                  <small>02.</small>
                  <h2 className="no-margin">Notes on Web development & Technology</h2>
                  <Subtitle>
                    I write about web development, technology and drones.
                  </Subtitle>
                  <ReadOn text="Read All Blog Posts" href="/blog" />
                </BlogIntro>
              </StickyWrapper>
            </RightStickyBox>
            <Blog>
              <BlogListing postEdges={blogEdges} />
            </Blog>
          </UnevenColumn>
        </Box>
      </Row>
      <Row className="full-bleed full-content" id="photography">
        <PhotoGrid>
          <IndexPhoto postEdges={photo1Edges} />
          <PhotoIntro>
            <h6>03.</h6>
            <h2>Photography</h2>
            <Subtitle>
              Photos of places I've been to.
            </Subtitle>
            <ReadOn text="More Photos" href="/photo" />
          </PhotoIntro>
          <IndexPhoto postEdges={photo2Edges} />
        </PhotoGrid>
      </Row>
    </Layout>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    Work: allMdx(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            subtitle
            path
            color
            cover {
              publicURL
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    Blog: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Static" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            title
            path
            tags
            category
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date
          }
        }
      }
    }
    Photo1: allMdx(
      filter: {
        frontmatter: { 
          draft: { ne: true }, 
          posttype: { eq: "photo" } 
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 70)
          frontmatter {
            title
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    Photo2: allMdx(
      filter: {
        frontmatter: { 
          draft: { ne: true }, 
          posttype: { eq: "photo" } 
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 7
      skip: 4
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 70)
          frontmatter {
            title
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
