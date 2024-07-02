import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const RoutingMenu = styled.div`
  background-color: ${COLORS.LIGHT_BRIGHT};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 285px;
  gap: 30px;
  height: fit-content;
  flex-shrink: 0;
`;

export const LinkWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLORS.GRAY};
  &:first-child {
    border-top: 1px solid ${COLORS.GRAY};
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

export const Title = styled.div`
  height: 11px;
  text-transform: uppercase;
`;
