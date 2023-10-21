import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';
import BoardGradient from '../../../../img/board-gradient.svg';
import BoardGradientSm from '../../../../img/board-gradient_sm.svg';

export const UseCases = styled.div`
  padding: 180px 0 0;
  h1 {
    color: rgba(215, 203, 250, 0.25);
    margin-bottom: 100px;
  }

  @media (max-width: 1439px) {
    padding: 100px 30px 0;
    h1 {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 767px) {
    padding: 100px 15px 0;
  }
`;

export const Board = styled.div`
  background-image: url(${BoardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  h2 {
    margin: 44px 0;
    span {
      color: ${COLORS.RED};
    }
  }

  @media (max-width: 1439px) {
    gap: 30px;
    h2 {
      margin: 0;
    }
  }

  @media (max-width: 767px) {
    background-image: url(${BoardGradientSm});
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    h2 {
      font-size: 16px;
      line-height: 140%;
    }
  }
`;

export const Desc = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    flex-basis: 71%;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const Badge = styled.div`
  @media (max-width: 1439px) {
    flex-basis: 29%;
    div {
      width: fit-content;
    }
  }

  @media (max-width: 767px) {
    flex-basis: 100%;

    p {
      font-size: 13px;
      line-height: 13px;
    }
  }
`;
