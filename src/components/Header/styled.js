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
`;

export const Header = styled.header`
  position: absolute;
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
    padding: 15px 30px;
  }

  @media (max-width: 576px) {
    padding: 15px 15px;
  }
`;
