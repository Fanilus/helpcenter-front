import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 200px;
`;

export const Main = styled.main`
  margin-top: 136px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 576px) {
    margin-top: 88px;
  }
`;
