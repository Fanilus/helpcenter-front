import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Search = styled.label`
position: relative;
  display: flex;
  align-items: center;
  background-color: ${COLORS.LIGHT};
  outline: 1px solid ${COLORS.PURPLE_GRAY};
  gap: 10px;
  padding: 8px 10px;
  border-radius: 5px;
  svg {
    flex-shrink: 0;
  }
  input {
    width: 100%;
    border: none;
    background-color: ${COLORS.LIGHT};
    outline: none;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: 0.39px;
    color: ${COLORS.BLACK};
    height: 24px;
    padding: 0;
  }
  :hover {
    outline: 1px solid ${COLORS.PURPLE_DARK};
  }
  :focus-within {
    outline: none;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 100%;
  }
`;

export const FormErrorText = styled.div`
  background-color: ${COLORS.WARNINGS};
  border-radius: 5px;
  margin: 0 20px;
  padding: 5px;
  position: absolute;
  bottom: -11px;
  left: -3px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.39px;
  color: ${COLORS.BLACK};
`;
