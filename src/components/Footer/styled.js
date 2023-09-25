import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Footer = styled.footer`
  padding: 20px 60px 60px 60px;
  background: ${({ light }) =>
    light ? COLORS.GRADIENT_DARK_PURPLE_LIGHT : COLORS.GRADIENT_DARK_PURPLE};
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
`;

export const FooterContent = styled.div`
  img {
    margin-bottom: 20px;
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  gap: 140px;
`;
export const FooterButton = styled.div``;

export const RoutesLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  height: 100px;
`;

export const MediaRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Route = styled.div`
  margin-left: 60px;
`;
