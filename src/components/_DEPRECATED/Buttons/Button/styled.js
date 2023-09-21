import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Button = styled.button`
  font-weight: bold;
  background: ${({ main }) =>
    main
      ? COLORS.LAUNCH_PINK_RED
      : `linear-gradient(${COLORS.PURPLE_DARK}, ${COLORS.PURPLE_DARK}) padding-box, linear-gradient(90deg, #FE4C69 -8.65%, #A72174 108.02%) border-box`};
  box-shadow: ${({ main }) =>
    main
      ? '0px 0px 40px rgba(254, 76, 105, 0.6)'
      : '0px 0px 30px rgba(254, 76, 105, 0.5)'};
  border-radius: 50px;
  padding: ${({ small }) => (small ? '14px 72px' : '16px 86px')};
  font-size: ${({ small }) => (small ? '22px' : '28px')};
  cursor: pointer;
  line-height: 1em;
  color: ${({ active }) => (active ? COLORS.COLOR_HEX : COLORS.WHITE)};

  opacity: ${({ disabled }) => disabled && '0.7'};

  border: ${({ main, active }) => {
    if (!main) {
      if (active) {
        return `2px solid ${COLORS.WHITE}`;
      } else {
        return '2px solid transparent';
      }
    }
    return 'none';
  }};

  &:hover {
    background: ${({ main }) => (main ? 'none' : COLORS.PURPLE_DARK)};
    background-image: ${({ main }) =>
      main ? COLORS.WHITE_LINER_GRADIENT : 'none'};
    color: ${({ main }) => (main ? COLORS.COLOR_HEX : COLORS.WHITE)};
    box-shadow: ${({ main }) =>
      main ? '0px 0px 25px #fe4c69' : '0px 0px 30px rgba(255, 255, 255, 0.5)'};
    border: ${({ main }) => (main ? 'none' : `2px solid ${COLORS.WHITE}`)};
  }

  @media (max-width: 1366px) {
    padding: 12px 70px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 12px 60px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    padding: 12px 48px;
    font-size: 16px;
    font-weight: 700;
    max-width: ${({ size }) => size === 'small' && '300px'};

    border: ${({ main, active }) => {
      if (!main) {
        if (active) {
          return `1px solid ${COLORS.WHITE}`;
        } else {
          return '1px solid transparent';
        }
      }
      return 'none';
    }};
    box-shadow: 0px 0px 20px rgba(254, 76, 105, 0.5);
  }
`;
