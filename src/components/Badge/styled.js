import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.LEMON};
  border-radius: 10px;
  width: 30px;
  height: 30px;
  p {
    font-weight: 500;
    color: ${COLORS.BLACK};
  }
`;
