import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Blog = styled.div`
  padding: 120px 0 180px;
  margin-bottom: -1px;

  @media (max-width: 1439px) {
    padding: 85px 30px 100px;
  }
  @media (max-width: 767px) {
    padding: 75px 15px 100px;
  }
`;
