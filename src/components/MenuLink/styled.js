import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  p {
    color: ${({ active }) => (active ? COLORS.BLACK : COLORS.GRAY)};
    :hover {
      color: ${COLORS.PURPLE_DARK};
      cursor: pointer;
    }
  }
`;
