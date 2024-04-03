import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const LeftContent = styled.div`
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 645px 1fr;
  margin-bottom: 80px;
  @media (max-width: 1439px) {
    display: flex;
    justify-content: center;

    margin-bottom: 100px;
  }
  @media (max-width: 767px) {
    margin-bottom: 80px;
  }
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1439px) {
    flex-basis: 462px;
  }
  @media (max-width: 768px) {
    gap: 40px;
  }
  a {
    color: ${COLORS.PINK};
    text-decoration: none;
    cursor: pointer;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const MobileAdaptive = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: block;
  }
`;

export const BigHeader = styled.div`
  @media (max-width: 767px) {
    padding: 20px 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? '8px' : '0px')};
`;

export const TitleList = styled.div`
  display: flex;
  gap: 10px;
`;
export const ListIcon = styled.div`
  color: ${COLORS.BLACK};
`;

export const ListWrapper = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
