import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Footer = styled.footer`
  padding: 80px 200px 64px 200px;
  background: #000000;

  @media (max-width: 1366px) {
    padding: 60px 200px 60px 200px;
  }

  @media (max-width: 768px) {
    padding: 60px 50px 60px;
  }

  @media (max-width: 576px) {
    padding: 64px 24px 64px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @media (max-width: 576px) {
    margin-bottom: 62px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 24px;
  svg {
    width: 46px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    gap: 24px;

    svg {
      width: 35px;
    }
  }

  @media (max-width: 576px) {
    gap: 32px;

    svg {
      width: 32px;
    }
  }
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin-bottom: 12px;

  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

export const FooterTerms = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.WHITE};
  font-size: 18px;
  .red {
    color: ${COLORS.COLOR_HEX};
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 15px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
    align-items: center;

    .red {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
