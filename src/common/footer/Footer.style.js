import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo-small.svg';

export const DivLeft = styled.div`
    flex: 1;
    text-align: left;
  `;
export const DivRight = styled.div`
    flex: 1;
    text-align: right;
  `;
export const FooterContainer = styled.footer`
  display: flex;
  height: ${(props) => props.theme.size.footerHeight};
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
  `;
export const FooterLink = styled(Link)`
    color: ${(props) => props.theme.color.grayBase};
    font-size: ${(props) => props.theme.font.size.small};
    text-decoration: none;
  `;
export const FooterLogo = styled(UnstyledLogo)`
  display: block;
  `;
