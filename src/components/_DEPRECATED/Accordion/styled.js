import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Chevron = styled.div`
  border-style: solid;
  border-width: 0.125rem 0.125rem 0 0;
  height: 1rem;
  width: 1rem;
  transition: all 0.25s ease-in-out;

  transform: ${(p) => p.direction === 'top' && 'rotate(-45deg)'};
  transform: ${(p) => p.direction === 'right' && 'rotate(45deg)'};
  transform: ${(p) => p.direction === 'bottom' && 'rotate(135deg)'};
  transform: ${(p) => p.direction === 'left' && 'rotate(-135deg)'};
`;

export const Container = styled.div`
  color: ${COLORS.WHITE};
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const Title = styled.div`
  padding: 3rem 0;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.875rem;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding: 1.5rem 0;
  }
`;

export const ContentWrapper = styled.div`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 0 0 3rem;
  color: ${COLORS.WHITE};
  font-size: 1.5rem;
  line-height: 2.25rem;

  @media (max-width: 1366px) {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Layout = styled.div`
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;
