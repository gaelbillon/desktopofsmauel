import React from "react"; // import React, { Component } from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
// import PageTitle from "elements/PageTitle";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaExternalLinkAlt } from "react-icons/fa";


const Grid = styled.div`
  display: block;

  .intro {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  align-items: center;
  margin-bottom: 5em;
`;

const PhotogrametryProjectDetails = styled.div`
  grid-row: 1; 
  z-index: 2;
  background-color: white;
  border: 1px solid #eaeaea;
  text-align: right;
  padding: 1rem 1rem 1.5rem 1rem;

  grid-column: span 2 / 7;
  @media only screen and (max-width: 850px) {
    grid-column: span 3 / 7;
  }
  @media only screen and (max-width: 767px) {
    grid-column: span 4 / 7;
  }
  
  h2 {
    word-break: break-word;
  }
`;

const PhotogrametryProjectPhoto = styled.div`
  grid-column: 1 / 6; 
  grid-row: 1; 
  z-index: 2;
`;

// const GridHeading = styled.h3`
//   font-weight: var(--font-weight-bold);
//   font-size: var(--font-size-l);
// `;

// const GridSeparator = styled.div`
//   display: block;
//   border-right: 1px solid var(--color-grey-300);
//   width: 0rem;
//   height: 2rem;
// `;

const GridPhotogrammetry = styled(Img)`
  margin-bottom: 0.5rem;
  height: 80vh;
`;

const GridTitle = styled.h2`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  margin-top: 0;
  margin-bottom: 0;
`;

const GridContentWrapper = styled.div``;

const PhotogrammetryProjectList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  color: var(--color-grey-300);
`;

const GridButton = styled.small`
  display: inline;
  border-bottom: 0;
  margin: 0 auto;
  opacity: 0;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: #b6aa8e;
  color: var(--color-white-300);
  transition: var(--transition);

  @media only screen and (max-width: 767px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .photo-item:hover & {
    opacity: 1;
  }
`;

// const LinkIcon = styled.span`
//   margin-left: 1rem;
//   font-size: 1em;
//   border-bottom: none;
// `;



class PhotogrammetryMagazine extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: "/photogrammetry" + postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        // excerpt: postEdge.node.frontmatter.tldr || postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        photocount: postEdge.node.frontmatter.photocount,
        camera: postEdge.node.frontmatter.camera,
        polycount: postEdge.node.frontmatter.polycount,
        texture: postEdge.node.frontmatter.texture,
        processingsoftware: postEdge.node.frontmatter.processingsoftware,
        sketchfablink: postEdge.node.frontmatter.sketchfablink,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Grid>
        <GridItem className="intro">
          {/* <GridHeading>On Photogrammetry</GridHeading> 
          <GridSeparator /> */}
          <p>
            Photogrammetry softwares are incredible. They can turn a bunch of
            pictures into a 3D model. Although I do that only for fun,
            photogrammetry is used by surveyors, architects, civil engineers,
            disaster relief coordinators, video game creators, cinema and in a
            lot of other fields. Pictures can be taken from the ground, from the
            air (with a drone), or both. They can also be enhanced with RTK GPS
            (like a standard GPS but with centimeter accuracy) and with LiDAR
            (like a laser rangefinder but rotating on 360° and capturing
            hundreds of thousands of points per second). Measurement can
            subsequently be taken with great precision. But to get started, a
            smartphone is more than enough. Browse more 3D models on my{" "}
            <a href="https://sketchfab.com/gael.billon">Sketchfab</a> page.
          </p>
        </GridItem>
        {/* Your post list here. */
        postList.map(post => (
          <GridItem className="photo-item noeffect" key={post.title}>
            <PhotogrametryProjectPhoto>
              {/* <Link to={post.path} className="noeffect"> */}
              <GridPhotogrammetry sizes={post.cover.childImageSharp.sizes} />
              {/* </Link> */}
            </PhotogrametryProjectPhoto>
            <PhotogrametryProjectDetails>
              {/* <Link to={post.path} className="noeffect"> */}
              <GridTitle>{post.title}</GridTitle>
              {/* </Link>  */}
              <GridContentWrapper>
                <PhotogrammetryProjectList>
                  <li>Number of photos: {post.photocount}</li>
                  <li>Camera: {post.camera}</li>
                  <li>Number of polygons: {post.polycount}</li>
                  <li>Texture size: {post.texture}</li>
                  <li>Software: {post.processingsoftware}</li>
                  {/* {post.excerpt && <li>{post.excerpt}</li>} */}
                </PhotogrammetryProjectList>
                <a
                  href={post.sketchfablink}
                  className="noeffect"
                  target="_blank"
                  rel="noopener noreferrer"
                  classname="outgoingLink"
                >
                  <GridButton>
                    View 3D model
                    {" "}
                    <FaExternalLinkAlt />
                  </GridButton>
                </a>
              </GridContentWrapper>
            </PhotogrametryProjectDetails>
          </GridItem>
        ))}
      </Grid>
    );
  }
}

export default PhotogrammetryMagazine;
