import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Table = styled.table`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  background: ${({ color }) => color || COLORS.BLACK};
  border-radius: 10px;
  padding: ${({ padding }) => padding || '30px'};
  margin-bottom: 20px;
  &:hover {
    cursor: default;
  }

  @media (max-width: 576px) {
    padding: ${({ padding }) => padding || '20px'};
  }
`;

export const Thead = styled.thead`
  margin: 0;
`;

export const Tbody = styled.tbody`
  display: grid;
  margin: 0;
`;

export const TFooter = styled.tfoot`
  margin: 0 auto;
`;

export const HeadTr = styled.tr`
  display: grid;
  grid-template-columns: ${({ columns, grid_template_columns }) =>
    grid_template_columns ||
    (columns ? '1fr '.repeat(columns) : '1fr 2fr 2fr 1fr')};
  border-bottom: 0.5px solid ${COLORS.GRAY};
  padding-bottom: 20px;
  @media (max-width: 768px) {
    grid-template-columns: ${({ mobile_grid_template_columns }) =>
      mobile_grid_template_columns};
  }
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: ${({ columns, grid_template_columns }) =>
    grid_template_columns ||
    (columns ? '1fr '.repeat(columns) : '1fr 2fr 2fr 1fr')};
  align-items: center;
  padding: 20px 0px;
  /* gap: 10px; */
  width: 100%;
  border-bottom: 0.5px solid ${COLORS.GRAY};
  background: ${({ user }) =>
    user
      ? 'linear-gradient(90deg, rgba(252, 7, 122, 0.40) 0%, rgba(219, 63, 248, 0.40) 110.75%);'
      : 'transparent'};

  @media (max-width: 768px) {
    grid-template-columns: ${({ mobile_grid_template_columns }) =>
      mobile_grid_template_columns};

    padding: 17px 0px 15px 10px;
    gap: 5px;
  }
`;

export const Th = styled.th`
  width: 100%;
  text-align: ${({ align }) => align || 'center'};
  padding: 0;
  padding-right: ${({ pr }) => pr || 0};
  text-transform: capitalize;
`;

export const Td = styled.td`
  position: ${({ position }) => position};
  font-family: ${({ mono }) => mono && 'monospace !important'};
  width: 100%;
  text-align: ${({ align }) => align || 'center'};
  vertical-align: top;
  text-transform: capitalize;
  color: ${({ color }) => color || COLORS.LIGHT};
  font-size: 40px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0.4px;
  padding: 0;

  svg {
    margin-right: 10px;
  }

  ${({ adaptive }) =>
    adaptive &&
    `
		@media (max-width: 767px) {
			font-size: 13px;
			font-weight: 400;
			letter-spacing: 0.39px;
		}
	`}
`;
