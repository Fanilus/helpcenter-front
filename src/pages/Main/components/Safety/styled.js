import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';
import CardGradient from '../../../../img/card-gradient.svg';

export const Safety = styled.div`
  padding: 180px 60px 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }
  h2 {
    color: rgba(215, 203, 250, 0.25);
    width: 420px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const Card = styled.div`
  background-image: url(${CardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
  border-radius: 10px;
  p {
    line-height: 140%;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
