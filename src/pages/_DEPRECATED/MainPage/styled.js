import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Wrapper = styled.div`
  padding: 0px 200px 45px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1366px) {
    padding: 60px 200px 80px 200px;
  }

  @media (max-width: 1439px) {
    padding: 20px 50px 80px 50px;
  }

  @media (max-width: 767px) {
    padding: 22px 53px 141px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 68px;
  line-height: 86px;
  color: ${COLORS.WHITE};
  font-weight: bold;

  @media (max-width: 1366px) {
    font-size: 60px;
  }

  @media (max-width: 1439px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    font-size: 34px;
    line-height: 38px;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 60px;
  line-height: 74px;
  text-align: center;
  color: ${COLORS.WHITE};
  font-weight: bold;

  @media (max-width: 1366px) {
    font-size: 48px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

export const IntroduceTitle = styled(Title)`
  margin-bottom: 40px;

  @media (max-width: 1439px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const IntroduceSubTitle = styled.div`
  font-size: 35px;
  line-height: 54px;
  text-align: center;
  color: ${COLORS.WHITE};
  font-weight: bold;
  margin-bottom: 40px;
`;

export const HowItWorksTitle = styled(SubTitle)`
  margin-bottom: 28px;

  @media (max-width: 1439px) {
    margin-bottom: 50px;
  }

  @media (max-width: 767px) {
    margin-bottom: 48px;
  }
`;

export const ListName = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 100px;

  @media (max-width: 1366px) {
    margin-bottom: 110px;
  }

  @media (max-width: 1439px) {
    gap: 30px;
    margin-bottom: 45px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin-bottom: 64px;
  }
`;

export const Headlines = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${COLORS.WHITE};
  font-size: 28px;
  line-height: 32px;

  @media (max-width: 1366px) {
    gap: 8px;
    font-size: 24px;
  }

  @media (max-width: 1366px) {
    gap: 8px;
    font-size: 18px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Mobile = styled.img`
  width: 160%;
  height: 130%;
`;

export const Statistics = styled.div`
  padding: 35px 200px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) -17.42%,
    rgba(0, 0, 0, 0.4) 50.96%,
    rgba(0, 0, 0, 0) 112.58%
  );

  @media (max-width: 1366px) {
    padding: 75px 100px;
    .grid {
      gap: 94px;
    }
  }

  @media (max-width: 1439px) {
    padding: 75px 50px;
    .grid {
      gap: 21px;
    }
  }

  @media (max-width: 767px) {
    padding: 64px 40px;

    .grid {
      gap: 48px 32px;
    }
  }
`;

export const HowItWorks = styled.div`
  padding: 160px 200px 128px 200px;

  @media (max-width: 1366px) {
    padding: 160px 50px 170px 50px;
  }

  @media (max-width: 1439px) {
    padding: 100px 50px 700px 50px;
  }

  @media (max-width: 767px) {
    padding: 64px 24px 0;
  }
`;

export const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  min-height: 60px;
  color: ${COLORS.DARK_BLUE};
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 14px;
  text-align: center;

  .animated-container {
    justify-content: center;
  }

  @media (max-width: 1366px) {
    min-height: 44px;
    font-size: 36px;
  }

  @media (max-width: 1439px) {
    min-height: 26px;
    font-size: 24px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    margin-bottom: 6px;
    font-size: 30px;
    line-height: 37px;
  }
`;
export const Subtitle = styled.div`
  color: ${COLORS.WHITE};
  font-size: 24px;
  text-align: center;

  @media (max-width: 1366px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Laptop = styled.img``;

export const LaptopWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Stylish = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1439px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    gap: 50px;
    flex-direction: column;
    padding-bottom: 397px;
  }
`;

export const FaqWrapper = styled.div`
  position: relative;
  padding: 160px 200px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) -17.42%,
    rgba(0, 0, 0, 0.4) 50.96%,
    rgba(0, 0, 0, 0) 112.58%
  );

  @media (max-width: 1439px) {
    padding: 100px 50px 160px 50px;
  }

  @media (max-width: 767px) {
    padding: 64px 24px;
  }
`;

export const FaqTitle = styled(SubTitle)`
  margin-bottom: 64px;

  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
`;
