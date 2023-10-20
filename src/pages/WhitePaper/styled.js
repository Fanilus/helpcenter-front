import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const WhitePaper = styled.div`
  background-color: ${COLORS.LIGHT};
  padding: 120px 0 180px;
  h1 {
    color: ${COLORS.GRAY};
    margin-bottom: 60px;
  }
  @media (max-width: 1439px) {
    padding: 85px 30px 100px;
    h1 {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    padding: 75px 15px 100px;
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 80px;
  h2 {
    color: ${COLORS.BLACK};
    margin-bottom: 30px;
  }
  p {
    color: ${COLORS.BLACK};
  }
  @media (max-width: 1439px) {
    margin-bottom: 60px;
  }
  @media (max-width: 767px) {
    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const Container = styled.div`
  border-top: 0.1px solid ${COLORS.GRAY};
  margin-bottom: 80px;
  :last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }
`;

export const SubContainer = styled.div`
  border-top: 0.1px solid ${COLORS.GRAY};
  margin-bottom: 40px;
`;
export const Content = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.div`
  h2 {
    color: ${COLORS.BLACK};
  }
  p {
    color: ${COLORS.BLACK};
    font-weight: 500;
    line-height: 140%;
  }
  img {
    margin-top: 20px;
  }
`;
export const Description = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-shrink: 0;
  p {
    color: ${COLORS.BLACK};
    line-height: 140%;
    a {
      color: ${COLORS.PINK};
      text-decoration: none;
      text-transform: uppercase;
    }
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media (max-width: 1439px) {
    flex-basis: 70%;
  }
`;

export const Card = styled.div`
  background-color: ${COLORS.LIGHT_BRIGHT};
  padding: 30px;
  border-radius: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 5px;
`;

export const ItemDesc = styled.div``;

export const DesktopImg = styled.img`
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const MobileImg = styled.img`
  display: none;
  @media (max-width: 1439px) {
    display: block;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;
