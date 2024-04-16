import styled from 'styled-components';

export const BlogArticle = styled.div`
  padding: 90px 0 180px;
  margin-bottom: -1px;
  max-width: 1320px;
  margin: 0px auto;

  @media (max-width: 1439px) {
    max-width: auto;
    padding: 85px 30px 100px;
  }
  @media (max-width: 767px) {
    padding: 85px 15px 100px;
  }
`;
