import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../models/colors';

export const LogoLink = styled(NavLink)`
  line-height: 0;
`;

export const Fixed = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  right: 0;
  top: 0;
  width: 100%;
  padding: 20px 30px;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.header`
  position: absolute;
  z-index: 1;
  /* position: fixed;
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
  }}; */
  padding: 20px 60px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }

  @media (max-width: 576px) {
    padding: 15px 15px;
  }
`;

export const Flex = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const MobileActions = styled(Flex)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Burger = styled.div`
  padding: 13px;
  border-radius: 5px;
  background: ${COLORS.PURPLE_BRIGHT};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const BurgerLine = styled.div`
  width: 20px;
  height: 2px;
  background: ${COLORS.BLACK};
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? '0' : '-100%')};
  height: 100vh;
  z-index: 10;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all 0.3s;
  width: ${({ active }) => active && '100%'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 50%;
  position: relative;
  background-color: ${COLORS.DARK};
  height: 100%;
  padding: 85px 30px 0 30px;
  transition: all 0.6s;
  z-index: 10;

  button {
    margin-top: 45px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    padding: 75px 15px 0 15px;
  }
`;

export const Routes = styled.ul`
  list-style-type: none;
  max-width: 462px;
  padding: 0;
  margin-left: auto;
`;

export const Route = styled.li`
  position: relative;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.28px;
  cursor: pointer;

  a {
    color: ${COLORS.LIGHT};
    text-decoration: none;
  }

  &:hover {
    a {
      color: ${COLORS.PINK};
    }
  }
`;

export const HR = styled.div`
  margin-top: 15px;
  height: 1px;
  background: ${COLORS.GRAY};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  opacity: 0.75;
  z-index: 5;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;
  padding: 10px 13px;
  border-radius: 5px;
  background: ${COLORS.BLACK};
  height: 41px;
  cursor: pointer;

  @media (max-width: 576px) {
    right: 15px;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 30px;
  top: 15px;

  @media (max-width: 576px) {
    left: 15px;
  }
`;
