import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Switcher = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;
export const Left = styled.div`
  padding: 25px 20px;
  border: 1px solid ${COLORS.GRAY_DARK};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  gap: 20px;
  svg {
    transform: rotate(90deg);
    path {
      stroke: ${COLORS.GRAY_DARK};
    }
  }
  :hover {
    svg {
      path {
        stroke: ${COLORS.PINK};
      }
    }
    div {
      p {
        color: ${COLORS.PINK};
      }
    }
  }
  @media (max-width: 1439px) {
    display: none;
  }
`;
export const Right = styled.div`
  padding: 25px 20px;
  border: 1px solid ${COLORS.GRAY_DARK};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  gap: 20px;
  svg {
    transform: rotate(-90deg);
    path {
      stroke: ${COLORS.GRAY_DARK};
    }
  }
  :hover {
    svg {
      path {
        stroke: ${COLORS.PINK};
      }
    }
    div {
      p {
        color: ${COLORS.PINK};
      }
    }
  }
`;
