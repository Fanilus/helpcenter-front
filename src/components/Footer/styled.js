import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Footer = styled.footer`
  padding: 20px 60px 60px 60px;
  background: ${({ light }) =>
    light ? COLORS.GRADIENT_DARK_PURPLE_LIGHT : COLORS.GRADIENT_DARK_PURPLE};
  background-color: ${({ light }) => (light ? COLORS.LIGHT : 'transparent')};

  @media (max-width: 1439px) {
    padding: 30px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hr = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${COLORS.GRAY};
  margin-bottom: 30px;

  @media (max-width: 1439px) {
    margin-bottom: 15px;
  }
`;

export const FooterContent = styled.div`
  img {
    margin-bottom: 20px;
  }

  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 125px;
      height: 83px;
      margin-bottom: 0;
    }
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  gap: 140px;
`;
export const FooterButton = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const RoutesLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  height: 100px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const MediaRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Route = styled.div`
  margin-left: 60px;
`;
