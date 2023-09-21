import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../../models/colors';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  gap: 12px;

  @media (max-width: 1366px) {
    gap: 30px;
  }

  @media (max-width: 576px) {
    gap: 40px;
  }
`;

export const LogoLink = styled(NavLink)`
  line-height: 0;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px;
  z-index: 10;

  backdrop-filter: ${({ background, mobileBackground }) =>
    background && !mobileBackground && 'blur(10px)'};
  box-shadow: ${({ background, mobileBackground }) =>
    background && !mobileBackground && '0 3px 5px rgba(0, 0, 0, .5)'};
  background: ${({ background, mobileBackground }) => {
    if (background && !mobileBackground) return 'rgba(0, 0, 0, .5)';
    if (mobileBackground) return '#000000';
  }};

  @media (max-width: 1920px) {
    padding: 24px 200px 24px 200px;
  }

  @media (max-width: 1366px) {
    padding: 40px 100px;
  }

  @media (max-width: 768px) {
    padding: 20px 50px;
  }

  @media (max-width: 576px) {
    padding: 24px;
  }
`;

export const Actions = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileActions = styled(Flex)`
  grid-column: span 9;
  width: 100%;
  justify-content: flex-end;
  display: none;
  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const Link = styled.div`
  font-size: 24px;
  color: ${COLORS.WHITE};
  padding: 6px 12px;
  background: ${({ active }) => active && COLORS.PINK};

  &:hover {
    color: ${COLORS.PINK};
    cursor: pointer;
  }

  @media (max-width: 1366px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const BurgerLine = styled.div`
  width: ${({ long }) => (long ? '36px' : '30px')};
  height: 3px;
  background: ${COLORS.WHITE};
`;

export const BurgerMenu = styled.div`
  position: fixed;
  top: ${({ active }) => (active ? '0' : '-100%')};
  left: 0;
  height: 100vh;
  z-index: -1;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all 0.3s;
  width: ${({ active }) => active && '100%'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  position: relative;
  background-color: #000000;
  height: 100%;
  padding: 114px 80px 96px;
  transition: all 0.6s;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Routes = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const Route = styled.li`
  position: relative;
  font-weight: 400;
  font-size: 24px;
  color: ${COLORS.WHITE};

  &:hover {
    color: ${COLORS.COLOR_HEX};
  }
`;

export const DesktopActions = styled.div`
  grid-column: span 9;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const ActionIcon = styled.div`
  @media (max-width: 576px) {
    width: 24px;
    height: 24px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
`;
