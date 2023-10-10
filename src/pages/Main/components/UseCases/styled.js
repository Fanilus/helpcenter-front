import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';
import BoardGradient from '../../../../img/board-gradient.svg';

export const UseCases = styled.div`
  padding: 180px 60px 0;
  h1 {
    color: rgba(215, 203, 250, 0.25);
    margin-bottom: 100px;
  }
`;

export const Board = styled.div`
  background-image: url(${BoardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 44px 75px;
    span {
      color: ${COLORS.RED};
    }
  }
`;
