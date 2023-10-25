import styled from 'styled-components';
import { COLORS } from '../../../../../../models/colors';

export const AccordionCases = styled.div``;

export const Body = styled.div`
  p {
    line-height: 140%;
    color: ${COLORS.LIGHT};
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;
export const AccordionItem = styled.div`
  @media (max-width: 1439px) {
    padding: 20px 0 30px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Collapse = styled.div`
  height: ${({ heightSum }) => `${heightSum + 1}px`};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
export const Quation = styled.div`
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

export const Question = styled.div``;

export const Content = styled.div``;
