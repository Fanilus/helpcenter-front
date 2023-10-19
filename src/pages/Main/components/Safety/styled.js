import styled from 'styled-components';
import CardGradient from '../../../../img/card-gradient.svg';
import { COLORS } from '../../../../models/colors';

export const Safety = styled.div`
  padding: 180px 60px 0;

  @media (max-width: 1439px) {
    padding: 100px 30px 0;
  }

  @media (max-width: 767px) {
    padding: 100px 15px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }
  h2 {
    color: rgba(215, 203, 250, 0.25);
    width: 420px;
  }

  @media (max-width: 1439px) {
    gap: 30px;

    h2 {
      width: auto;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-image: url(${CardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: ${COLORS.PINK};
  }
  p {
    line-height: 140%;
  }

  @media (max-width: 1439px) {
    flex-basis: 216px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
    flex-basis: 300px;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
  gap: 20px;

  h2 {
    line-height: 100%;
  }

  svg {
    margin-top: 3px;
    flex-shrink: 0;
  }

  @media (max-width: 1439px) {
    margin-bottom: 30px;
    svg {
      margin-top: 0;
    }
  }
`;
