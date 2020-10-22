import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const Wrapper = styled.header`
  display: flex;
  padding: 32px 80px;
  align-items: center;
`;

const Navigation = styled.nav`
  margin-left: auto;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.grayBase};
  text-decoration: none;
  margin-left: 26px;
`;

const StyledLogo = styled(Logo)`
  display: block;
`;

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <StyledLogo />
      </Link>
      <Navigation>
        <StyledLink to="/search/javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </Navigation>
    </Wrapper>
  );
}

export default Header;
