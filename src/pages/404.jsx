import React from "react";
import styled from "styled-components";
import Layout from "../layout";

const Container = styled.div`
  text-align: center;
`

const NotFoundPage = () => (
  <Layout title="404 - Page not found">
    <Container>
      <h1>404 - Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;