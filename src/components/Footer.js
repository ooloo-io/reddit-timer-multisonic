import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Sign } from './sign.svg';

function Footer() {
  const FooterLogo = styled(Sign)`
    display: block;
  `;

  const FooterWrapper = styled.footer`
    display: flex;
    padding: 32px 250px;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <FooterWrapper>
      ooloo.io
      <FooterLogo />
      Terms & Privacy
    </FooterWrapper>
  );
}

export default Footer;
