import styled from 'styled-components';
import defaultBg from '../../../../img/background.svg';
import mobileBg from '../../../../img/mobile-background.svg';

export const Container = styled.div`
  background-image: url(${defaultBg});
  background-position-x: center;
  background-position-y: top;
  background-size: auto;
  background-repeat-y: repeat;
  min-height: 100vh;
  overflow-y: hidden;
  transition: background 0.7s ease-in-out;

  &.cache {
    height: 0;
    width: 0;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    background-image: url(${mobileBg});
  }
`;
