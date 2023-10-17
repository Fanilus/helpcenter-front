import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const DropDownContainer = styled('div')`
  width: fit-content;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const DropDownHeader = styled('div')`
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid ${({ isOpen }) => (isOpen ? COLORS.LIGHT : COLORS.GRAY)};
  background: ${({ isOpen }) => (isOpen ? COLORS.DARK : COLORS.RICH_BLACK)};
  padding: 11.5px 15px 11.5px 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.18px;
  line-height: 100%;
  color: ${({ isOpen, valueSelected }) =>
    isOpen || valueSelected !== 'Country' ? COLORS.LIGHT : COLORS.PURPLE_GRAY};
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
  svg {
    transition: all 0.3s ease-in-out;
  }
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 100%;
  top: 40px;
`;

export const DropDownList = styled('ul')`
  margin: 0;
  background: ${COLORS.BLACK};
  border-radius: 0px 0px 5px 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 213px;
  overflow-y: scroll;

  border-right: 1px solid ${COLORS.LIGHT_BRIGHT};
  border-bottom: 1px solid ${COLORS.LIGHT_BRIGHT};
  border-left: 1px solid ${COLORS.LIGHT_BRIGHT};
  background: ${COLORS.DARK};
  user-select: none;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid ${COLORS.DARK};
    background-color: ${COLORS.PURPLE_GRAY};
    border-radius: 16px;
  }
`;

export const ListItem = styled('li')`
  list-style: none;
  color: ${COLORS.LIGHT};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.39px;
  text-transform: capitalize;
  padding: 5px;

  &:hover {
    border-radius: 5px;
    background: ${COLORS.PURPLE_GRAY};
    color: ${COLORS.BLACK};
    cursor: pointer;
  }
`;
