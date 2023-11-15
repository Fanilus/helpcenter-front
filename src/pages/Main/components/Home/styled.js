import styled from 'styled-components';
import screen from '../../../../assets/img/icons/home-bg.svg';
import { COLORS } from '../../../../models/colors';

export const Home = styled.div`
  position: relative;
  background-image: url(${screen});
  background-repeat: no-repeat;
  background-size: cover;
  height: 1076px;
  z-index: 0;
  padding: 83px 0 30px 0;

  span {
    color: ${COLORS.LEMON};
  }

  @media (max-width: 1919px) {
    height: 950px;
  }

  @media (max-width: 1439px) {
    height: 820px;
    padding: 70px 30px 40px 30px;
  }

  @media (max-width: 767px) {
    height: auto;
    padding: 75px 15px 287px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1919px) {
    margin: unset;
    max-width: unset;
    position: unset;
  }
`;

export const Content = styled.div`
  flex-basis: 784px;

  @media (max-width: 1439px) {
    flex-basis: 345px;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const Video = styled.video`
  position: absolute;
  top: -18px;
  right: 0;
  z-index: -1;
  height: 826px;

  @media (max-width: 1919px) {
    top: -19px;
    right: 0;
    height: 702px;
  }

  @media (max-width: 1439px) {
    top: 0px;
    right: 45px;
    height: 402px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Frame = styled.canvas`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    height: 287px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bot = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${COLORS.RICH_BLACK};
  h1 {
    color: ${COLORS.PURPLE_GRAY};
    margin-bottom: 15px;
    line-height: 100%;
  }
  p {
    color: ${COLORS.PURPLE_GRAY};
    line-height: 100%;
  }

  @media (max-width: 1439px) {
    padding: 20px;
    h1 {
      margin-bottom: 10px;
      line-height: 110%;
      font-size: 28px;
    }
    p {
      line-height: 100%;
      font-size: 13px;
    }
  }
`;

export const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.GRAY};
  margin-bottom: 30px;

  @media (max-width: 1439px) {
    position: absolute;
    width: 350px;
    right: 30px;
    top: 402px;
  }

  @media (max-width: 767px) {
    top: unset;
    right: unset;
    bottom: 0;
    margin: 0;
    left: 0;
    width: 100%;
  }
`;

export const Checks = styled.div`
  display: flex;
  gap: 30px;
  margin: 326px 0 30px 0;

  @media (max-width: 1919px) {
    margin: 201px 0 30px 0;
  }

  @media (max-width: 1439px) {
    margin: 95px 0 40px 0;
    gap: 19px;
  }

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1439px) {
    gap: 5px;
    white-space: nowrap;
    p {
      padding-top: 2px;
    }
  }

  @media (max-width: 767px) {
    svg {
      width: 18px;
      height: 18px;
    }
    p {
      padding-top: 1px;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 43px;

  @media (max-width: 1439px) {
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  margin-bottom: 30px;
  width: 419px;

  @media (max-width: 1439px) {
    width: auto;
  }
`;
