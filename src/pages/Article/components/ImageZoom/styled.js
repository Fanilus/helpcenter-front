import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ZoomedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border: none !important;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: rgba(130, 122, 149, 0.2);
  border-radius: 10px;
  img {
    border-radius: 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    max-width: 585px;
    width: fit-content;
    margin: 0 auto;
  }
  span {
    color: ${COLORS.GRAY_DARK};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.18px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    img {
      max-width: 305px;
    }
  }
`;
