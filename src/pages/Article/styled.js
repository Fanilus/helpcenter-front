import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Article = styled.div`
  margin-top: 107px;
  margin-bottom: 160px;

  @media (max-width: 1439px) {
    margin-top: 85px;
    margin-bottom: 100px;
  }
`;

export const ContainerContent = styled.div`
  width: 645px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: auto;
  }
`;

export const Markdown = styled.div`
  color: ${COLORS.BLACK};
  padding-bottom: 40px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0.4px;
    padding: 0 0 30px 0;
    margin: 0;
  }
  h2 {
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0.4px;
    padding: 30px 0;
    margin: 0;
  }
  h3 {
    padding-left: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.18px;
    padding: 15px 0 15px 20px;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.18px;
    padding: 15px 0;
    margin: 0;
  }
  a {
    color: ${COLORS.BLACK};
    font-family: 'PP Neue Montreal';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.18px;
    text-decoration-line: underline;
    margin: 0;
  }
  ol {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.18px;
    padding: 15px 0 15px 40px;
    margin: 0;

    li {
      font-weight: 400;
    }
  }
  ul {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.18px;
    padding: 15px 0 15px 40px;
    margin: 0;

    li {
      font-weight: 400;
    }
  }

  /* p {
    img {
      display: block;
      margin: 0 auto;
      border: 30px solid rgba(130, 122, 149, 0.2);
      border-radius: 10px;
      max-width: 100%;
    }
  } */
`;

export const Content = styled.div`
  display: flex;
  gap: 53px;
`;

export const DesktopWrapper = styled.div`
  height: 25px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 285px 1fr;
  grid-column-gap: 53px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const DesktopMenu = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const SwitcherWrapper = styled.div`
  padding-top: 100px;
  position: absolute;
  right: 30px;
  top: 0;
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
