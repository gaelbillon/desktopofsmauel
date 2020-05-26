import React, { Component } from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Commento from "./Commento";

const Container = styled.main`
  h1 {
    margin-top: 1em;
    text-align: center;
  }
`;

class PostTemplate extends React.Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;

    return (
      <div>
        <Container>
          <Img sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
          <h1>{post.title}</h1>
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </Container>
        <Commento />
      </div>
    );
  }
}

export default PostTemplate;
