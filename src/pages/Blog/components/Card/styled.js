import styled from 'styled-components';
import bigCardGradient from '../../../../img/big-card-gradient.png';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
  ${({ big }) =>
    big &&
    ` background-image: url(${bigCardGradient});
      background-repeat: no-repeat;
      background-size: cover; 
      border-radius: 10px;
      padding: 30px;
      @media (max-width: 1439px) {
        padding: 30px 20px;
      }
      @media (max-width: 767px) {
          margin-bottom: 30px;
      }
    `}
  margin-bottom: 60px;

  ${({ dataLength }) =>
    dataLength &&
    ` 
    :nth-child(${dataLength - 1}) {
      margin-bottom: 0;
    }
    :nth-child(${dataLength}) {
      margin-bottom: 0;
    }
    @media (max-width: 1439px) {
      :nth-child(${dataLength - 1}) {
      margin-bottom: 60px;
    }
  }
    `}/* @media (max-width: 1439px) {
    display: block;
    padding: 50px 0 0 0;
  } */
`;
export const ContentWrapper = styled.div`
  ${({ big, background, color }) =>
    !big &&
    ` background: ${
      background
        ? background ===
          'linear-gradient(180deg, rgba(28, 16, 47, 0.00) 0%, #A180FF 144.16%);'
          ? `linear-gradient(180deg, rgba(28, 16, 47, 0.00) 0%, #A180FF 144.16%), ${COLORS.BLACK}`
          : background
        : COLORS.PURPLE_BRIGHT
    };
      border-radius: 10px;
      padding: 30px;
      @media (max-width: 1439px) {
        padding: 30px 20px;
      }
      p {
        color: ${color ? color : COLORS.BLACK}
      }
      h1 {
        color: ${color ? color : COLORS.BLACK}
      }
    `}
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;
export const Date = styled.div`
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 30px;

  @media (max-width: 1439px) {
    margin-bottom: 20px;
  }

  ${({ color }) =>
    ` 
    h2 {
      color: ${color ? color : COLORS.BLACK};
    }
    `}

  ${({ big }) =>
    big &&
    ` 
    h1 {
      flex-basis: 755px;
      flex-shrink: 0;
    }
    h2 {
      display: none;
    }
      @media (max-width: 1439px) {
        h1 {
          flex-basis: auto;
          flex-shrink: unset;
          display: none;
        }
        h2 {
          display: block;
        }
        p {
          display: none;
        }
      }
    `}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    ${({ color }) =>
      ` path {
      fill: ${color ? color : COLORS.BLACK}
    }
    circle {
      fill: ${color ? color : COLORS.BLACK}
    }
    `}
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
export const AuthorName = styled.div``;

export const Description = styled.div`
  padding: 30px 30px 0 30px;
  @media (max-width: 1439px) {
    padding: 30px 20px 0 20px;
  }
  ${({ big }) =>
    big &&
    ` 
      padding: 0;
      display: none;
      @media (max-width: 1439px) {
        display: block;
        padding: 50px 0 0 0;
      }
    `}
`;
