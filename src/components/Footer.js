import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Sign } from './sign.svg';

const FooterContainer = styled.footer`
  display: flex;
  padding: 32px 250px;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  `;

const FooterOutboundLink = styled.a`
    color: ${(props) => props.theme.colors.grayBase};
    text-decoration: none;
  `;

const FooterLink = styled(Link)`
    color: ${(props) => props.theme.colors.grayBase};
    text-decoration: none;
  `;

const LeftDiv = styled.div`
    width: 300px;
  `;

const CenterDiv = styled.div`

  `;

const RightDiv = styled.div`
    width: 300px;
    text-align: right;
  `;

const FooterLogo = styled(Sign)`
  display: block;
  /* align-self: center; */
  `;

function Footer() {
  return (
    <FooterContainer>
      <LeftDiv>
        <FooterOutboundLink href="https://ooloo.io/employers">ooloo.io</FooterOutboundLink>
      </LeftDiv>
      <CenterDiv>
      <FooterLink to="/"><FooterLogo /></FooterLink>
      </CenterDiv>
      <RightDiv>
        <FooterLink to="/terms">Terms & Privacy</FooterLink>
      </RightDiv>
    </FooterContainer>
  );
}

export default Footer;
