import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const RoutingMenu = styled.div`
  background-color: ${COLORS.LIGHT_BRIGHT};
  box-shadow: 0px 4px 6px 0px rgba(43, 28, 77, 0.25);
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  width: 345px;
  gap: 30px;
`;

export const LinkWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${COLORS.GRAY};
  &:first-child {
    padding-top: 0px;
  }
  &:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const LinksWrapper = styled.div``;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 100%;
  }
`;
