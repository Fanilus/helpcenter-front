import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import ComplicatedGradientRedirect from '../../components/Icons/ComplicatedGradientRedirect/ComplicatedGradientRedirect.svg';

export const Redirect = styled.div`
  padding: 30px 0 180px 0;
`;

export const Banner = styled.div`
  background-image: url(${ComplicatedGradientRedirect});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 80px;
`;

export const Logo = styled.div`
  margin-bottom: 96px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableItem = styled.div`
  display: flex;
  gap: 30px;
  width: fit-content;
  border-top: 1px solid ${COLORS.GRAY};

  padding: 30px 0 80px 0;

  :first-child {
    border-top: none;
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 0;
  }
`;

export const Title = styled.div`
  width: 420px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  width: ${({ width }) => width || 'fit-content'};
`;

export const Formula = styled.div`
  margin-bottom: 80px;
  p {
    color: ${COLORS.GRAY};
  }
`;

export const Description = styled.div`
  padding-top: 80px;
  display: flex;
  p {
    flex-basis: 640px;
  }
`;

export const TableWrapper = styled.div`
  p {
    border-bottom: 1px solid ${COLORS.GRAY};
    margin-bottom: 30px;
    padding-bottom: 30px;
    :last-child {
      border-bottom: none;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
  }
`;

export const TableWrapperArticles = styled.div`
  p {
    border-bottom: 1px solid ${COLORS.GRAY};
    margin-bottom: 30px;
    padding-bottom: 30px;
    :last-child {
      margin-bottom: 0px;
      padding-bottom: 30px;
    }
  }
`;
