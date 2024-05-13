import styled from 'styled-components';
import { COLORS } from '../../../../../../models/colors';

export const SliderCard = styled.a`
  background: ${COLORS.RICH_BLACK};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 308px;
  height: 332px;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IMG = styled.img`
  user-select: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  gap: 10px;
`;
