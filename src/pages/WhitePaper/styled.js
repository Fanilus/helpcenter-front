import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const WhitePaper = styled.div`
  background-color: ${COLORS.LIGHT};
  padding: 120px 60px 180px;
  h1 {
    color: ${COLORS.GRAY};
    margin-bottom: 60px;
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 60px;
  h2 {
    color: ${COLORS.BLACK};
    margin-bottom: 30px;
  }
  p {
    color: ${COLORS.BLACK};
  }
`;

export const Container = styled.div`
  border-top: 0.1px solid ${COLORS.GRAY};
  margin-bottom: 80px;
`;

export const SubContainer = styled.div`
  border-top: 0.1px solid ${COLORS.GRAY};
  margin-bottom: 40px;
`;
export const Content = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  h2 {
    color: ${COLORS.BLACK};
  }
  p {
    color: ${COLORS.BLACK};
  }
`;
export const Description = styled.div`
  flex-basis: 645px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  p {
    color: ${COLORS.BLACK};
    line-height: 140%;
  }
`;

export const Card = styled.div`
  background-color: ${COLORS.LIGHT_BRIGHT};
  padding: 30px;
  border-radius: 10px;
`;
