import styled from 'styled-components';
import { COLORS } from '../../../../../models/colors';

export const Collapse = styled.div`
  height: ${({ heightSum }) => `${heightSum + 1}px`};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  p {
    line-height: 140%;
    color: ${COLORS.LIGHT};
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

export const Trigger = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LEMON)};
  cursor: pointer;
  &:hover {
    color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LIME_LEMON)};
  }
  @media (max-width: 1439px) {
    margin-bottom: 30px;
  }
`;
