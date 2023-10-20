import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Menu = styled.div`
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  width: fit-content;
  background-color: ${({ light, scroll }) =>
    scroll
      ? 'rgb(43, 28, 77, 0.9)'
      : light
      ? 'rgba(215, 203, 250, 0.9)'
      : 'rgba(28, 16, 47, 0.9)'};
`;
export const MenuItem = styled.button`
  padding: 14.5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  p {
    color: ${({ light }) => (light ? COLORS.GRAY_DARK : COLORS.PURPLE_GRAY)};
    font-weight: 500;
  }
  &:hover {
    p {
      color: ${({ light }) => (light ? COLORS.RICH_BLACK : COLORS.LIGHT)};
      font-weight: 500;
    }
  }
  &:focus {
    padding: 13.5px 9px;
    border-radius: 5px;
    border: 1px solid ${({ light }) => (light ? COLORS.BLACK : COLORS.LIGHT)};
    box-shadow: ${({ light }) =>
      light
        ? `0px 0px 3px 0px ${COLORS.BOX_SHADOW_DARK}`
        : `0px 0px 3px 0px ${COLORS.BOX_SHADOW}`};
  }
`;
