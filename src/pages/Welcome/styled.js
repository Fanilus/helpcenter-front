import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import ComplicatedGradientRedirect from '../../components/Icons/ComplicatedGradientRedirect/ComplicatedGradientRedirect.svg';

export const Welcome = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  padding: 30px 0 180px 0;
  @media (max-width: 1439px) {
    padding: 70px 60px 100px 60px;
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 70px 15px 100px 15px;
  }
`;

export const Banner = styled.div`
  background-image: url(${ComplicatedGradientRedirect});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    padding: 30px 20px;
    margin-bottom: 60px;
  }
`;

export const Logo = styled.div`
  margin-bottom: 96px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  @media (max-width: 767px) {
    h1 {
      font-size: 47px;
      line-height: 90%;
      letter-spacing: -0.94px;
    }
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableItem = styled.div`
  display: flex;
  gap: 30px;
  width: fit-content;
  border-top: 1px solid ${COLORS.GRAY};

  padding: 30px 0 80px 0;

  :first-child {
    border-top: none;
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 0;
  }
  @media (max-width: 1439px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    border-top: none;
    gap: 40px;
  }
`;

export const Title = styled.div`
  width: 420px;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    width: 220px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: ${({ width }) => width || 'fit-content'};
  @media (max-width: 1439px) {
    width: fit-content;
    flex-basis: auto;
    flex-grow: 1;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const Formula = styled.div`
  margin-bottom: 80px;
  p {
    color: ${COLORS.GRAY};
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 80px;
  width: 100%;
  button {
    width: 419px;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    button {
      width: 345px;
    }
  }
`;
export const Description = styled.div`
  display: flex;
  p {
    flex-basis: 640px;
  }
`;

export const TableWrapper = styled.div`
  p {
    border-bottom: 1px solid ${COLORS.GRAY};
    margin-bottom: 30px;
    padding-bottom: 30px;
    :last-child {
      border-bottom: none;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
  }
`;

export const TableWrapperArticles = styled.div`
  width: 100%;
  flex-basis: 645px;

  p {
    border-bottom: 1px solid ${COLORS.GRAY};
    margin-bottom: 30px;
    padding-bottom: 30px;
    :last-child {
      margin-bottom: 0px;
      padding-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-basis: auto;
    p {
      border-bottom: 1px solid ${COLORS.GRAY};

      :last-child {
        border-bottom: none;
      }
    }
  }
`;
