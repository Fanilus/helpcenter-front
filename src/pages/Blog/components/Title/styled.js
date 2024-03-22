import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 1px;
    button {
      flex: 0 0 auto;
    }
  }
`;

export const Blur = styled.div`
  position: absolute;
  width: 61px;
  height: 100%;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(230, 226, 238, 0) 0%, #e6e2ee 100%);
`;

export const TitleWrapper = styled.div`
  position: relative;
`;
