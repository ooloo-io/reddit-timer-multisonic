import React from 'react';

import {
  DivLeft, DivRight, FooterContainer, FooterLink, FooterLogo,
} from './Footer.style';

function Footer() {
  return (
    <FooterContainer>
      <DivLeft>
        <FooterLink as="a" href="https://ooloo.io/employers">ooloo.io</FooterLink>
      </DivLeft>
      <div>
        <FooterLink to="/"><FooterLogo /></FooterLink>
      </div>
      <DivRight>
        <FooterLink to="/terms">Terms & Privacy</FooterLink>
      </DivRight>
    </FooterContainer>
  );
}

export default Footer;
