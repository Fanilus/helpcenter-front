import styled from 'styled-components';
import bigCardGradient from '../../../../img/big-card-gradient.svg';
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
  cursor: pointer;
  margin-bottom: 60px;
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
      height: 330px; 
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      padding: 30px;
      @media (max-width: 1439px) {
        height: auto; 
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
  margin-bottom: ${({ big }) => (big ? '50px' : '0')};
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
  @media (max-width: 1439px) {
    margin-bottom: 20px;
  }

  ${({ color }) =>
    ` 
  h2 {
    color: ${color ? color : COLORS.BLACK};
  }

  @media (max-width: 1439px) {
    h2 {
      display: none;
    }
  }
  `}

  ${({ big }) =>
    big &&
    ` 
    h1 {
      flex-basis: 755px;
      flex-shrink: 0;
      margin-bottom: 10px;
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
    ${({ color, big }) =>
      ` path {
      fill: ${color && !big ? color : COLORS.BLACK}
    }
    circle {
      fill: ${color && !big ? color : COLORS.BLACK}
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
export const TopWrapper = styled.div`
  @media (max-width: 1439px) {
    margin-bottom: 50px;
  }
`;

export const MobileH2Wrapper = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: ${({ big }) => (big ? 'none' : 'block')};
    h2 {
      display: block;
    }
  }
`;
