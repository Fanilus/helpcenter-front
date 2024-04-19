import styled from 'styled-components';

export const Blog = styled.div`
  margin-bottom: -1px;
  max-width: 1320px;
  margin: 0px auto;
  padding: 120px 0 120px;

  @media (max-width: 1439px) {
    max-width: auto;
    margin: 0px;
    padding: 85px 30px 40px;
  }
  @media (max-width: 767px) {
    padding: 85px 15px 40px;
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
