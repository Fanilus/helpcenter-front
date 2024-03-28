import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Related = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 60px;
  @media (max-width: 1439px) {
    margin-bottom: 40px;
  }
`;

export const MiniCardWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  background-color: ${COLORS.LIGHT_BRIGHT};

  height: 300px;
  flex-basis: 420px;
  @media (max-width: 1439px) {
    flex-basis: 338px;
    padding: 30px 20px;
    &:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 767px) {
    flex-basis: 345px;
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div``;

export const Header = styled.div`
  margin-bottom: 20px;
`;
export const Date = styled.div``;
export const Content = styled.div`
  display: flex;
  margin-bottom: 20px;

  h2 {
    flex-basis: 360px;
    color: ${COLORS.BLACK};
  }

  @media (max-width: 1439px) {
    h2 {
      flex-basis: auto;
    }
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 40px;
      line-height: 110%;
    }
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    path {
      fill: ${({ color }) => (color ? color : COLORS.BLACK)};
    }
    circle {
      fill: ${({ color }) => (color ? color : COLORS.BLACK)};
    }
  }
`;
export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
