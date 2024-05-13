import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Media = styled.div`
  padding: 180px 0 0;

  @media (max-width: 1439px) {
    padding: 100px 0 0 30px;
  }

  @media (max-width: 767px) {
    padding: 100px 0 0 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${COLORS.GRAY};

  @media (max-width: 1439px) {
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    margin-right: 15px;
    h2 {
      text-transform: uppercase;
      font-size: 47px;
      line-height: 90%;
      letter-spacing: -0.94px;
    }
  }
`;
