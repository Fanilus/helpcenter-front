import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const TableOfContents = styled.div``;

export const TableOfContentsTitle = styled.div`
  margin-bottom: 30px;
`;

export const TableOfContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    border-bottom: 1px solid ${COLORS.GRAY};
    padding-bottom: 10px;
    margin-bottom: 10px;
    :last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;
