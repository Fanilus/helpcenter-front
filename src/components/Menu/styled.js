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
  padding: ${({active}) => active ? '13.5px 9px' : '14.5px 10px'};
  border-radius: ${({active}) => active && '5px'};
  border: ${({active, light}) => {
      if (active) {
        if (light) return `1px solid ${COLORS.BLACK}`
        return `1px solid ${COLORS.LIGHT}`
      }
      return 'none'
    }
  };
  box-shadow: ${({ active, light }) => {
      if (active) {
        if (light) return `0px 0px 3px 0px ${COLORS.BOX_SHADOW_DARK}`
        return `0px 0px 3px 0px ${COLORS.BOX_SHADOW}`
      }
      return 'none'
    }
  };
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;

  p {
    color: ${({ light }) => {
      if (light) return COLORS.GRAY_DARK
      return COLORS.PURPLE_GRAY
    }};
    font-weight: 500;
  }

  &:hover {
    p {
      color: ${({ light }) => (light ? COLORS.RICH_BLACK : COLORS.LIGHT)};
      font-weight: 500;
    }
  }
`;
