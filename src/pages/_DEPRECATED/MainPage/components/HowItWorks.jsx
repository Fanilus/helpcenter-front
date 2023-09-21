import React, { useEffect } from 'react';
import * as Styled from '../styled';
import { BuyLow, SellHigh, Portal } from '../../../../shared';
import { useRef } from 'react';

const HowItWorks = ({ setRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      setRef(ref);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <Styled.HowItWorks ref={ref}>
      <Styled.HowItWorksTitle>How it works</Styled.HowItWorksTitle>
      <Styled.Stylish>
        <SellHigh />
        <Portal />
        <BuyLow />
      </Styled.Stylish>
    </Styled.HowItWorks>
  );
};

export default HowItWorks;
