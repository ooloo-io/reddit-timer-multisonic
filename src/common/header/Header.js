import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderWrapper, StyledLink, Logo,
} from './Header.style';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <StyledLink to="/search/javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
