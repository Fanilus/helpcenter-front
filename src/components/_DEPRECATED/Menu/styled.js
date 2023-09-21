import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Menu = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  color: ${COLORS.GRAY};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 8px;
  &:hover {
    cursor: pointer;
  }
  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${({ active }) => active && 'rotateZ(-180deg)'};
  }
`;
export const Submenu = styled.ul`
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? '1' : '0')};
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  background: ${COLORS.WHITE};
  border-radius: 12px;
`;
export const SubmenuItem = styled.li`
  padding: 6px;
  &:first-child {
    border-radius: 12px 12px 0 0;
  }
  &:last-child {
    border-radius: 0 0 12px 12px;
  }
  &:hover {
    background: ${COLORS.GRAY};
    cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  }
`;
