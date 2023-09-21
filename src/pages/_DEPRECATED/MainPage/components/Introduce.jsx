import React from 'react';
import * as TymioUI from '../../../../components';
import * as Styled from '../styled';

const Introduce = ({ innerRef }) => {
  const handleClick = () => {
    innerRef && innerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Styled.Wrapper>
      <Styled.IntroduceTitle>
        Earn passive income
        <br />
        on your ETH or USDC
      </Styled.IntroduceTitle>
      <Styled.IntroduceSubTitle>
        by setting limit order with yield
      </Styled.IntroduceSubTitle>
      <Styled.ListName>
        <Styled.Headlines>
          <TymioUI.Check />
          High APY
        </Styled.Headlines>
        <Styled.Headlines>
          <TymioUI.Check />
          Fixed Yield
        </Styled.Headlines>
        <Styled.Headlines>
          <TymioUI.Check />
          Simple
        </Styled.Headlines>
        <Styled.Headlines>
          <TymioUI.Check />
          Secure
        </Styled.Headlines>
      </Styled.ListName>
      <TymioUI.Button onClick={handleClick}>How it works</TymioUI.Button>
    </Styled.Wrapper>
  );
};

export default Introduce;
