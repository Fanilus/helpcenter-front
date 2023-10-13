import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const H1 = styled.h1`
  font-size: 176px;
  font-weight: 500;
  line-height: 176px;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: ${(color) => (!color ? color : COLORS.LIGHT)};
  margin: 0;
  @media (max-width: 1439px) {
    font-size: 90px;
    line-height: 81px;
    letter-spacing: -1.8px;
  }
  @media (max-width: 375px) {
    font-size: 47px;
    line-height: 47px;
    letter-spacing: -0.94px;
  }
`;
