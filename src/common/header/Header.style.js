import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: ${(props) => props.theme.size.headerHeight};
  margin: 0 auto;
  display: flex;
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
`;

export const StyledLink = styled(Link)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.grayBase};
`;
