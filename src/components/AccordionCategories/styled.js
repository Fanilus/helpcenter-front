import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const AccordionCategories = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
`;

export const Selector = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  p {
    color: ${({ active }) => (active ? COLORS.PURPLE_DARK : COLORS.BLACK)};
    text-transform: uppercase;
  }
  svg {
    transition: transform 0.3s ease;
    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
    path {
      stroke: ${({ active }) => (active ? COLORS.PURPLE_DARK : COLORS.BLACK)};
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 36px;
  z-index: 5;
`;
