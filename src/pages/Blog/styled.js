import styled from 'styled-components';

export const Blog = styled.div`
  padding: 120px 60px 180px;
  margin-bottom: -1px;

  @media (max-width: 1439px) {
    padding: 85px 30px 100px;
  }
  @media (max-width: 767px) {
    padding: 85px 15px 100px;
  }
`;

export const Container = styled.div`
  padding: 0 112px 0 112px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;

  @media (max-width: 1439px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 0;
  }
`;
