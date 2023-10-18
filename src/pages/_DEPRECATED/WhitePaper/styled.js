import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 40px auto;
  max-width: 100%;
  padding: 0px 80px;
  overflow-y: hidden;
  color: white;
  font-size: 18px;
  @media (max-width: 1439px) {
    padding: 0;
  }
`;
export const Image = styled.img`
  width: 500px;
  @media (max-width: 767px) {
    width: 300px;
  }
`;
export const Link = styled.a`
  text-decoration: underline;
`;
export const P = styled.p`
  text-align: center;
`;

export const H2Center = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const H4Center = styled.h4`
  text-align: center;
  font-size: 18px;
`;
