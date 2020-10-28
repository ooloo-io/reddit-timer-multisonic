import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`

`;

export const InfoLink = styled(Link)`
  color: ${(props) => props.theme.color.link};
`;
