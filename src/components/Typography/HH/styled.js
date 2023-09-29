import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const HH = styled.h1`
  font-size: ${({ mobile }) => (mobile ? '50px' : '90px')};
  font-weight: 500;
  line-height: ${({ mobile }) => (mobile ? '50px' : '90px')};
  color: ${({ color }) => (color ? color : COLORS.LIGHT)};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 50px;
  }
`;
