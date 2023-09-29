import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const HowItWork = styled.div`
  padding: 180px 60px 0;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin: 60px 0 60px;
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
`;

export const HR = styled.div`
  background-color: ${COLORS.GRAY};
  height: 0.5px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
