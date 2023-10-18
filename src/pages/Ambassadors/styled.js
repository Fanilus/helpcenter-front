import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import AmbassadorsCardGradient from '../../img/AmbassadorsCardGradient.svg';

export const Ambassadors = styled.div`
  padding: 120px 60px 180px;
  h1 {
    color: rgba(215, 203, 250, 0.3);
  }
`;
export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
  display: flex;
  gap: 142px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Check = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  p {
    line-height: 110%;
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
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
