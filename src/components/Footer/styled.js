import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Footer = styled.footer`
  padding: 20px 60px 40px 60px;
  background: ${({ light }) =>
    light
      ? 'linear-gradient(180deg, rgba(230, 226, 238, 0.00) 0%, #A180FF 350%)'
      : 'linear-gradient(rgba(28, 16, 47, 0) 0%, rgb(161, 128, 255) 350%)'};
  background-color: ${({ light }) => (light ? COLORS.LIGHT : 'transparent')};

  @media (max-width: 1439px) {
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 30px 15px;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 200px;
  @media (max-width: 1439px) {
    gap: 0;
    justify-content: space-between;
  }
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

  @media (max-width: 767px) {
    p {
      padding-bottom: 4px;
    }
  }
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
  height: 131px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const MediaRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  @media (max-width: 1439px) {
    margin: 0;
  }
`;

export const Route = styled.div`
  margin-left: 60px;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    margin-left: 20px;
  }
`;
