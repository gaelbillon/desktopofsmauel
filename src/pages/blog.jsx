import React from "react";
import { graphql } from "gatsby";
import Boxed from "elements/Boxed";
import PageTitle from "elements/PageTitle";
import styled from "styled-components";
import Layout from "../layout";
import BlogList from "../components/BlogList";
import Link from "../components/common/GatsbyLink";

const Row = styled.section`
  padding: var(--var-padding-s) 0;
  background: white;
`;

const Box = styled(Boxed)`
  max-width: var(--page-container-s);
`;

const Main = styled.div`
  /*   display: grid;
  grid-template-columns: [left] 30% [right] 70%;
  grid-gap: var(--grid-gap);

  @media only screen and (max-width: 768px) {
    display: block;
  }

  h1 {
    font-family: var(--font-primary);
  } */
`;

const Left = styled.aside`
  grid-area: left;
`;

const Right = styled.main`
  grid-area: right;
`;

const CategoryBlock = styled.div`
@media only screen and (max-width: 768px) {
  display: none;
}
`; 

const BlogPage = ({ data }) => {
  const postEdges = data.allMdx.edges;

  return (
    <Layout
      title="Design Blog"
      description="Hi! My name is Gaël. I write about web development, photogrammetry and drones."
      keywords="Webdev,Blog,Web,Mobile Apps,UI,UX, Drone, Photogrammetry"
    >
      <Row>
        <Box>
          <PageTitle
            title="Blog"
            subtitle="Article"
            description="A collection of posts I wrote about about 
            web development, photogrammetry and drones."
          />
          <Main>
            <Left>
              <Row>
                <CategoryBlock>
                  <small>Top Categories</small>
                  <h3>
                    <Link to="/categories/mobile-apps">Mobile applications</Link>
                  </h3>
                  <h3>
                    <Link to="/categories/webperf">Web performance</Link>
                  </h3>
                  <h3>
                    <Link to="/categories/static">Static websites</Link>
                  </h3>
                  <h3>
                    <Link to="/categories/uav">UAV</Link>
                  </h3>
                </CategoryBlock>
              </Row>
            </Left>
            <Right>
              <Row id="latest">
                <small>Latest</small>
                <BlogList postEdges={postEdges} />
              </Row>
            </Right>
          </Main>
        </Box>
      </Row>
    </Layout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */

export const bloglisting = graphql`
  fragment bloglisting on Mdx {
    fields {
      slug
      date(formatString: "MMM DD, YYYY", locale: "en")
    }
    excerpt(pruneLength: 300)
    timeToRead
    frontmatter {
      title
      tags
      category
      cover {
        publicURL
        size
        childImageSharp {
          sizes(maxWidth: 1140) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`;
export const pageQuery = graphql`
  query BlogQuery {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            category
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1200) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`;
