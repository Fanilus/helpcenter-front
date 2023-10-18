import styled, { keyframes } from 'styled-components';
import { COLORS } from '../models/colors';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  z-index: 1;

  @media (max-width: 1439px) {
    margin-bottom: 32px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const Cards = styled.div`
  padding: ${({ border, noPadding, ptOnly }) => {
    if (border) return '8px';
    if (noPadding) return '0';
    if (ptOnly) return '100px 0';
    return '30px';
  }};
  display: ${({ flex }) => (flex ? 'flex' : 'grid')};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  width: 578px;
  height: 585px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 60px rgb(98 126 235 / 10%);
  border-radius: 20px;
`;
export const TitleSell = styled.div`
  color: ${COLORS.DARK_BLUE};
  font-size: 48px;
  margin-bottom: 32px;
  text-align: center;
  font-weight: bold;
  line-height: 1em;

  @media (max-width: 1366px) {
    font-size: 36px;
  }

  @media (max-width: 1439px) {
    font-size: 30px;
    line-height: 29px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 14px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  gap: 10px;
  color: ${COLORS.WHITE};
  font-weight: ${({ font }) => (font === 'small' ? 'bold' : 'normal')};
  font-size: ${({ font }) => (font === 'small' ? '16px' : '24px')};
  text-align: left;

  @media (max-width: 1366px) {
    font-size: 18px;
  }

  @media (max-width: 1439px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 32px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
`;
export const ListTitle = styled.div`
  width: 100%;
  gap: 25px;
  padding: 12px 24px;
  display: flex;
  border: 1px solid ${COLORS.WHITE};
  border-radius: 45px;
  color: ${COLORS.WHITE};
  font-size: 24px;
  text-align: left;
  font-weight: ${({ font }) => (font === 'small' ? 'bold' : 'normal')};
  margin-bottom: 41px;
  align-items: center;

  @media (max-width: 1366px) {
    font-size: 18px;
  }

  @media (max-width: 1439px) {
    font-size: 18px;
    line-height: 20px;
    gap: 10px;
    padding: 6px 12px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 20px;
    padding: 6px 12px;
    gap: 8px;
    margin-bottom: 14px;
  }
`;

export const Exemple = styled.div`
  align-items: center;
  color: ${COLORS.WHITE};
  font-size: 24px;
  border-bottom: 1px dashed #ffffff;
`;

export const Portal = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -20px;
  z-index: 0;

  @media (max-width: 1366px) {
    bottom: -40px;
  }

  @media (max-width: 1439px) {
    bottom: -650px;
  }

  @media (max-width: 767px) {
    bottom: 20px;
  }
`;

export const PortalInnerPosition = styled.div`
  position: relative;
`;

const PortalAnimation = keyframes`
  0% { transform: translate(-50%, 0); }
  100% { transform: translate(-50%, 60px); }
`;

const PortalMobileAnimation = keyframes`
  0% { transform: translate(-50%, 20px); }
  100% { transform: translate(-50%, 60px); }
`;

export const PortalLayout = styled.img`
  @media (max-width: 767px) {
    width: 226px;
  }
`;

export const LogoIcon = styled.img`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${PortalAnimation} 1.5s infinite alternate-reverse;

  @media (max-width: 767px) {
    width: 90px;
    animation: ${PortalMobileAnimation} 1.5s infinite alternate-reverse;
  }
`;
