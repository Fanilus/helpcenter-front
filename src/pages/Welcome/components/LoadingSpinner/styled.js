import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const StyledSpinner = styled.div`
  width: ${80 + Math.ceil(80 / 2)}px;
  height: ${80 + Math.ceil(80 / 2)}px;
  margin: ${({ noMargin }) => (noMargin ? '0' : '0 auto')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: ' ';
    display: block;
    width: ${(props) => 80}px;
    height: ${(props) => 80}px;
    border-radius: 50%;
    border: 6px solid ${COLORS.LIGHT_BLUE};
    border-color: ${COLORS.LIGHT_BLUE} transparent ${COLORS.LIGHT_BLUE}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: ${55 + Math.ceil(55 / 2)}px;
    height: ${55 + Math.ceil(55 / 2)}px;
    &:after {
      width: ${55}px;
      height: ${55}px;
    }
  }
`;
