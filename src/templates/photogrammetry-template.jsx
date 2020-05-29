// This page is not used at the moment.
// If need to use, uncomment corresponding 
// code in gatsby-node.js, lines ~119 and ~216
// This file will create pages for each photogrammetry project
// eg: gaelbillon.com/photogrammetry/valpreveyre

import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import styled from "styled-components";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

const Cover = styled(Img)`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const PhotogrammetryLayout = styled.div`
  max-width: var(--page-container-m);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: var(--var-padding-m);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 3;
  padding: var(--var-padding-l) var(--var-padding-m);
  width: 100%;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: var(--color-white-300);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: calc(48px + (64 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 100%;
  text-align: center;
  margin-bottom: 0;
`;

const MDX = styled(MDXRenderer)`
  p {
    text-align: center;
  }
`;

export default class PhotogrammetryPageTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const path = "photogrammetry" + `${slug}`;
    const photogrammetryNode = this.props.data.mdx;
    const photogrammetry = this.props.data.mdx.frontmatter;

    return (
      <Layout>
        <Helmet>
          <title>{`${photogrammetry.title} | ${config.siteTitleAlt}`}</title>
        </Helmet>
        <SEO postPath={path} postNode={photogrammetryNode} postSEO />
        <PhotogrammetryLayout>
          <Header>
            <Overlay />
            <Cover
              fluid={photogrammetry.cover.childImageSharp.fluid}
              durationFadeIn={1000}
            />
            <TitleWrapper>
              <Title>{photogrammetry.title}</Title>
            </TitleWrapper>
          </Header>

          <MDX>{photogrammetryNode.body}</MDX>
        </PhotogrammetryLayout>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query PhotogrammetryPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        path
        title
        cover {
          publicURL
          size
          childImageSharp {
            fluid(maxWidth: 2440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
        date(formatString: "MMM DD, YYYY", locale: "en")
      }
    }
  }
`;
