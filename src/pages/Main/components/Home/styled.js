import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Home = styled.div`
  position: relative;
  background: linear-gradient(180deg, #1c0b41, #260f5d, #2e185b);
  z-index: 0;
  padding: 83px 60px 30px 60px;
  span {
    color: ${COLORS.LEMON};
  }

  @media (max-width: 1919px) {
    background: linear-gradient(180deg, #191130, #2b1b4c);
  }

  @media (max-width: 1439px) {
    padding: 70px 30px 40px 30px;
    background: linear-gradient(180deg, #191130, #21173e, #2e1b4f);
  }

  @media (max-width: 767px) {
    padding: 75px 15px 287px 15px;
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
  top: 0;
  right: 0;
  height: 100%;
  z-index: -1;
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
    width: 340px;
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
  margin: 200px 0 30px 0;

  @media (max-width: 1919px) {
    margin: 260px 0 30px 0;
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
