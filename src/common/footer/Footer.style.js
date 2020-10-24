import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Sign } from './sign.svg';

export const DivLeft = styled.div`
    flex: 1;
    font-size: 0.975em
  `;
export const DivRight = styled.div`
    flex: 1;
    text-align: right;
    font-size: 0.975em
  `;
export const FooterContainer = styled.footer`
  display: flex;
  font-size: 14px;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0 20px;

  `;
export const FooterLink = styled(Link)`
    color: ${(props) => props.theme.colors.grayBase};
    text-decoration: none;
  `;
export const FooterLogo = styled(Sign)`
  display: block;
  `;
