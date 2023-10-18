import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import AmbassadorsCardGradient from '../../img/AmbassadorsCardGradient.svg';

export const Ambassadors = styled.div`
  padding: 120px 300px 180px;
  h1 {
    color: rgba(215, 203, 250, 0.3);
  }

  @media (max-width: 1919px) {
    padding: 120px 60px 180px;
  }
  @media (max-width: 1439px) {
    padding: 85px 30px 100px;
  }
  @media (max-width: 767px) {
    padding: 75px 15px 100px;
  }
`;
export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
  display: flex;
  gap: 142px;
  h2 {
    flex-basis: 533px;
  }
  @media (max-width: 1439px) {
    margin-top: 30px;
    margin-bottom: 60px;
    display: block;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1439px) {
    margin-top: 60px;
    flex-direction: row;
    gap: 30px;
  }
`;

export const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 1439px) {
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 395px;
  svg {
    flex-shrink: 0;
  }
  p {
    line-height: 110%;
  }
  @media (max-width: 1439px) {
    font-size: 17px;
    width: 335px;
  }
`;

export const AmbassadorsCard = styled.div`
  border-radius: 14px;
  background-image: url(${AmbassadorsCardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1439px) {
    h2 {
      width: 90px;
    }
    gap: 95px;
    justify-content: flex-start;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  width: 533px;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    flex-basis: 345px;
    flex-shrink: 0;
  }
`;
