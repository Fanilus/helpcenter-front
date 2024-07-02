import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import bigCardGradient from '../../img/big-card-gradient.svg';

export const Main = styled.div``;

export const Link = styled.div`
  cursor: pointer;
`;

export const CategoryTreeWrapper = styled.div`
  width: 870px;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 53px;
  padding-top: 486px;
  padding-bottom: 100px;
  @media (max-width: 1439px) {
    gap: 60px;
    flex-direction: column;
    padding-top: 210px;
  }

  @media (max-width: 767px) {
    padding-top: 180px;
    padding-bottom: 40px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 426px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: block;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 100%;
  }
`;
export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
