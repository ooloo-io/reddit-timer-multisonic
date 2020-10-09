import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const HeaderWrapper = styled.header`
  display: flex;
  padding: 32px 80px;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  display: block;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <StyledLogo />
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
