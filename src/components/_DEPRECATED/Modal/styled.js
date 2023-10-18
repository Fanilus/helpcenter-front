import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const ModalWrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: #0a131f;
  backdrop-filter: blur(28px);
`;

export const ModalBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a131f;
  backdrop-filter: blur(28px);

  @media (max-width: 992px) {
    display: none;
  }
`;

export const ModalCardWrapper = styled.div`
  z-index: 1;
  width: 900px;
  top: 0;
  position: fixed;
  margin: 24px 0;

  @media (max-width: 992px) {
    padding: 24px;
    width: 100%;
    background: #0a131f;
    backdrop-filter: blur(28px);
    margin: 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #131823;
  border-radius: 10px;
  padding: 32px;

  @media (max-width: 767px) {
    padding: 24px;
  }
`;

export const CardHeader = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${COLORS.WHITE};

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

export const CardBody = styled.div`
  padding: 0 0 30px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .m-0 {
    margin: 0 !important;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};

  button {
    width: 50%;
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`;
