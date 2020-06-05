import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostList from "../components/BlogListWide";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import PageTitle from "elements/PageTitle";
import Boxed from "elements/Boxed";

const Container = styled.section`
  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

const Hero = styled.div`
  padding: var(--padding-m) 0 var(--padding-m) 0;
`;

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;
    return (
      <Layout>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitleAlt}`} />
        <Boxed>
          <Hero>
            <PageTitle subtitle={`Discover Post tagged`} title={`${tag}`} />
          </Hero>
          <Container>
            <PostList postEdges={postEdges} />
          </Container>
        </Boxed>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            tags
            path
            category
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1080) {
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
            date
          }
        }
      }
    }
  }
`;
