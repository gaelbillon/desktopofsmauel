import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "elements/PageTitle";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import PhotogrammetryMagazine from "../components/PhotogrammetryMagazine";

const PhotogrammetryBoxed = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-s) 0;
  background: white;
`;

const PageHeader1 = styled.div`
  border-top: 3px solid var(--color-black-500);
  margin-bottom: 8px;
`;

const PageHeader2 = styled.div`
  border-top: 1px solid var(--color-black-500);
`;

const Grid = styled.section``;

const Title = styled(PageTitle)``;

const PhotogrammetryPage = ({ data }) => {
  const postEdges = data.photogrammetry.edges;

  return (
    <Layout
      title="Photogrammetry"
      description="Photogrammetry Portfolio of Gaël B."
      keywords="Photogrammetry, 3D, SFM, Sketchfab, Pix4D, Photoscan, Metashape, Reality Capture"
    >
      <PhotogrammetryBoxed>
        <Grid>
          <Row>
            <Title title="Photogrammetry" />
          </Row>
          <Row>
            <PageHeader1 />
            <PageHeader2 />
          </Row>
          <Row>
            <PhotogrammetryMagazine postEdges={postEdges} />
          </Row>
        </Grid>
      </PhotogrammetryBoxed>
    </Layout>
  );
};

export default PhotogrammetryPage;

/* eslint no-undef: "off" */

export const pageQuery = graphql`
  query PhotogrammetryQuery {
    photogrammetry: allMdx(
      filter: {
        frontmatter: { 
          draft: { ne: true }, 
          posttype: { eq: "photogrammetry" } 
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
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
            photocount
            camera
            polycount
            texture
            processingsoftware
            sketchfablink
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