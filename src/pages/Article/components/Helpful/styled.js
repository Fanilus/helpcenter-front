import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Helpful = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
  p {
    text-transform: uppercase;
  }
  @media (max-width: 1439px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
