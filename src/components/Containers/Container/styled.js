import styled from 'styled-components';
// import defaultBg from '../../../../img/background.svg';
// import mobileBg from '../../../../img/mobile-background.svg';
import { COLORS } from '../../../models/colors';

export const Container = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  background-color: ${COLORS.BLACK};
  &.cache {
    height: 0;
    width: 0;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1439px) {
  }
`;
