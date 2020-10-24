import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.header};
  color: black;
`;

function Home() {
  return <Heading>Home Page Content</Heading>;
}

export default Home;
