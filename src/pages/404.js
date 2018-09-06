import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFoundPage = () => (
  <NotFoundWrapper>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFoundWrapper>
);

export default NotFoundPage;
