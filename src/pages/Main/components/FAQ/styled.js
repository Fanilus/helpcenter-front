import styled from 'styled-components';

export const FAQ = styled.div`
  padding: 180px 0 180px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }

  @media (max-width: 1439px) {
    padding: 100px 30px 100px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    padding: 100px 15px 100px;
    flex-direction: column;
    gap: 60px;
  }
`;

export const H1Wrapper = styled.div`
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;

  @media (max-width: 1439px) {
    flex-basis: 33%;
    height: fit-content;
  }

  @media (max-width: 767px) {
    flex-basis: auto;
  }
`;

export const FaqQuestions = styled.div`
  flex-basis: 50%;

  @media (max-width: 1439px) {
    flex-basis: 67%;
    flex-shrink: 1;
    flex-grow: 0;
  }
`;
