import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.4px;
  margin: 0;
  color: ${({ color }) => (color ? color : COLORS.LIGHT)};
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0.28px;
  }
`;
