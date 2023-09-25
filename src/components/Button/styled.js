import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { BUTTON_TYPE } from '../../models/types';

export const Button = styled.button`
  padding: 14.5px 20px 12px 20px;
  border-radius: 5px;
  background: ${({ type }) => {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return COLORS.GRADIENT_RED_PINK;
      case BUTTON_TYPE.SECONDARY:
        return COLORS.PURPLE_BRIGHT;
      default:
        return COLORS.GRADIENT_RED_PINK;
    }
  }};
  text-transform: ${({ common }) => !common && 'uppercase'};
  border: none;
  backdrop-filter: blur(2px);

  &:hover {
    cursor: pointer;
    background: ${({ type }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.PINK;
        case BUTTON_TYPE.SECONDARY:
          return COLORS.PURPLE_DARK;
        default:
          return COLORS.PINK;
      }
    }};
  }

  &:focus {
    box-shadow: ${`0px 0px 3px 0px ${COLORS.BOX_SHADOW}`};
    border: 1.5px solid ${COLORS.LIGHT};
    padding: 13.5px 19px 11px 19px;
    background: ${({ type }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.GRADIENT_RED_PINK;
        case BUTTON_TYPE.SECONDARY:
          return COLORS.PURPLE_BRIGHT;
        default:
          return COLORS.GRADIENT_RED_PINK;
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
    background: ${({ type }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.GRADIENT_RED_PINK;
        default:
          return COLORS.GRADIENT_RED_PINK;
      }
    }};
  }
`;
