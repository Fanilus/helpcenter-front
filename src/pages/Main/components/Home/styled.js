import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Home = styled.div`
  background: linear-gradient(
    293deg,
    #17112f 4.47%,
    #3e2467 46.12%,
    #17112f 98.44%
  );
  padding: 83px 60px 30px 60px;
  span {
    color: ${COLORS.LEMON};
  }
`;

export const Content = styled.div`
  flex-basis: 784px;
`;

export const Image = styled.div`
  img {
    width: 538px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bot = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const Card = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${COLORS.RICH_BLACK};
  H1 {
    color: ${COLORS.PURPLE_GRAY};
    margin-bottom: 5px;
  }
  p {
    color: ${COLORS.PURPLE_GRAY};
  }
`;

export const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.GRAY};
  margin-bottom: 30px;
`;

export const Checks = styled.div`
  display: flex;
  gap: 30px;
  margin: 200px 0 30px 0;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.div`
  margin-bottom: 43px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
  width: 419px;
  p {
    line-height: 140%;
  }
`;
