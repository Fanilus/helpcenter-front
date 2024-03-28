import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const EarningBanner = styled.div`
  padding: 30px 20px;
  width: 100%;
  background-color: ${COLORS.PURPLE_LIGHT};
  border-radius: 10px;
  position: relative;

  h2 {
    margin-bottom: 30px;
  }

  button {
    width: 100%;
  }
  svg {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @media (max-width: 1439px) {
    h2 {
      width: 346px;
    }
  }
  @media (max-width: 767px) {
    h2 {
      width: 280px;
    }
  }
`;
