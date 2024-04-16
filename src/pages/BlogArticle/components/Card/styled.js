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
      @media (max-width: 767px) {
          margin-bottom: 30px;
          padding: 30px 20px;
      }
      
    `}
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
export const ContentWrapper = styled.div`
  button {
    box-shadow: ${({ color }) =>
      color ? `0px 0px 0px 1px ${color}` : `0px 0px 0px 1px ${COLORS.BLACK}`};
    margin-bottom: 30px;
    &:hover {
      box-shadow: ${({ color }) =>
        color ? `0px 0px 2px 1px ${color}` : `0px 0px 0px 1px ${COLORS.BLACK}`};
    }
  }
  @media (max-width: 767px) {
    button {
      padding: 10px 20px;
      margin-bottom: 20px;
    }
  }

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
      p {
        color: ${color ? color : COLORS.BLACK};
      }
      h1 {
        color: ${color ? color : COLORS.BLACK};
      }
      
      
      @media (max-width: 767px) {
        padding: 30px 20px;
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

  h1 {
    flex-basis: 1084px;
    color: ${({ color }) => (color ? color : COLORS.BLACK)};
  }

  @media (max-width: 1439px) {
    margin-bottom: 20px;
    h1 {
      line-height: 110%;
      font-size: 40px;
      letter-spacing: 0.4px;

      flex-basis: 638px;
    }
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
