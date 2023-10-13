import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const AccordionFAQ = styled.div``;

export const Body = styled.div`
  border-radius: 10px;
  padding: 0 112px 30px 0;
  p {
    line-height: 140%;
    color: ${COLORS.LIGHT};
  }

  @media (max-width: 1439px) {
    padding: 0 0 30px 0;
  }
`;
export const AccordionFAQItem = styled.div`
  margin-bottom: 30px;
  border-bottom: 0.5px ${COLORS.GRAY} solid;
  display: flex;
  justify-content: space-between;
`;

export const Collapse = styled.div`
  height: ${({ isOpen, itemRef }) =>
    isOpen ? `${itemRef.current.scrollHeight}px` : '0px'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
export const Quation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  color: ${({ expanded }) => (expanded ? COLORS.LEMON : COLORS.LIGHT)};
  cursor: pointer;
  margin-bottom: 30px;
  svg {
    flex-shrink: 0;
    transition: all 0.3s ease-in-out;
    path {
      stroke: ${({ expanded }) => (expanded ? COLORS.LEMON : COLORS.GRAY)};
    }
  }
`;

export const Question = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
  user-select: none;

  @media (max-width: 1439px) {
    font-size: 17px;
  }
`;

export const Content = styled.div``;
