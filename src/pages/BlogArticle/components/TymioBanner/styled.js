import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const EarningBanner = styled.div`
  padding: 30px;
  width: 100%;
  background-color: ${COLORS.PURPLE_LIGHT};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
