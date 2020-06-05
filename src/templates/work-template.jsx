import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import SEO from "../components/SEO";
import WorkPageHero from "../components/WorkPageHero";
import config from "../../data/SiteConfig";

// const Title = styled.h1`
//   padding-top: var(--var-padding-m);
//   font-family: var(--font-primary);
// `;

const WorkWrapper = styled(Boxed)`
  max-width: var(--page-container-m);
`;

const MDX = styled(MDXRenderer)`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-primary);
  }
`;

const WorkPageTemplate = ({ pageContext, data }) => {
  const path = "work" + pageContext.slug;
  const postEdges = data.mdx.frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{`${data.mdx.frontmatter.title} | ${config.siteTitleAlt}`}</title>
      </Helmet>
      <SEO postPath={path} postNode={data.mdx} postSEO />
      <WorkPageHero data={postEdges} />
      <WorkWrapper>
        <MDX>{data.mdx.body}</MDX>
      </WorkWrapper>
    </Layout>
  );
};

export default WorkPageTemplate;

export const pageQuery = graphql`
  query WorkPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        subtitle
        path
        tags
        color
        cover {
          publicURL
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
