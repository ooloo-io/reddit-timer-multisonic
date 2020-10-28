import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
export const CTAButton = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  border: 0;
  border-radius: 4px;
  width: 217px;
  height: 36px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.font.size.small};
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const Header = styled.h1`
  margin-top: 18px;
  margin-bottom: 0px;
  display: block;
  letter-spacing: .85px;
`;

export const HeroLink = styled(Link)`
  color: ${(props) => props.theme.color.grayBase};
  text-decoration: none;
  &.active {
    text-decoration: none;
  }
`;

export const SubredditLabel = styled.p`
  margin-bottom: 32px;
  font-weight: 500;
  letter-spacing: 0.95px;
`;

export const Subtitle = styled.h2`
  margin-top: 7px;
  margin-bottom: 41px;
  font-family: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.color.grayBase};
  font-size: ${(props) => props.theme.font.size.default};
`;

export const TableImage = styled.img`
  width: 100%;
  /* padding: 0 20px; */
  height: auto;
  max-width: 1114px;
`;
