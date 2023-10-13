import styled from 'styled-components';

export const FAQ = styled.div`
  padding: 180px 60px 180px;
  display: flex;
  justify-content: space-between;
  gap: 346px;
  h1 {
    color: rgba(215, 203, 250, 0.25);
  }

  @media (max-width: 1439px) {
    padding: 100px 30px 100px;
    gap: 30px;

    h1 {
      width: 216px;
      flex-grow: 1;
      flex-shrink: 0;
      height: fit-content;
    }
  }

  @media (max-width: 767px) {
    padding: 100px 15px 100px;
    flex-direction: column;
    gap: 60px;

    h1 {
      width: auto;
    }
  }
`;
