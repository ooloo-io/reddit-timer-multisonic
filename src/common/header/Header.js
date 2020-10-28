import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderWrapper, StyledLink, Logo,
} from './Header.style';
import config from '../../config/config';

function Header() {
  const { defaultSubreddit } = config;
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <StyledLink to={`/search/${defaultSubreddit}`}>Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
