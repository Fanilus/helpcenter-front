import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const HowItWork = styled.div`
  padding: 180px 60px 0;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }

  @media (max-width: 1439px) {
    padding: 60px 30px 0;
  }

  @media (max-width: 767px) {
    padding: 40px 15px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin: 60px 0 60px;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    margin: 20px 0 60px;
    video {
      width: 339px;
    }
  }
`;

export const MobileOnly = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-bottom: ${({ mb }) => mb};
    margin-top: ${({ mt }) => mt};

    img {
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-right: 30px;
  p {
    line-height: 140%;
  }
  @media (max-width: 1439px) {
    margin: 0;
    p {
      br {
        display: none;
      }
    }
  }
`;

export const HR = styled.div`
  background-color: ${COLORS.GRAY};
  height: 0.5px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 767px) {
    gap: 0;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;

    img {
      width: 50%;
      margin-left: auto;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
    img {
      display: none;
    }
  }
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: start;
  gap: 72px;
  h1 {
    line-height: 132px;
  }
  div {
    h2 {
      margin-bottom: 30px;
    }
    p {
      line-height: 140%;
    }
  }

  @media (max-width: 1439px) {
    width: 50%;
    gap: 60px;
    br {
      display: none;
    }
    h1 {
      font-size: 47px;
      line-height: 38px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
