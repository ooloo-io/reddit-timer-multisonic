import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

/* export const HeaderWrapper = styled.header`
  display: flex;
  height: 100px;
  padding: 0px 80px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.grayBase};
  margin-left: 26px;
  text-decoration: none;
`;
 */

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
`;

export const StyledLink = styled(Link)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.grayBase};
`;
