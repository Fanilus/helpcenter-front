import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Shield from '../../../../components/Icons/Shield/Shield';
import Lock from '../../../../components/Icons/Lock/Lock';
import Coins from '../../../../components/Icons/Coins/Coins';

const Safety = () => {
  return (
    <Styled.Safety>
      <Styled.Title>
        <UI.H1>Safety</UI.H1>
        <UI.H2>Safety of users funds are our first priority</UI.H2>
      </Styled.Title>
      <Styled.CardContainer>
        <Styled.Card>
          <Styled.CardHeader>
            <UI.H2>No market risk</UI.H2>
            <Shield />
          </Styled.CardHeader>
          <UI.Paragraph size={'large'}>
            Our protocol model does not involve any market risk. We do not trade
            or expose ourself to market in any other ways. We just collect fixed
            option premium and transfer it to our users.
          </UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <Styled.CardHeader>
            <UI.H2>Own liquidity</UI.H2>
            <Lock />
          </Styled.CardHeader>
          <UI.Paragraph size={'large'}>
            User funds do not leave smart-contract, they only serve as a
            guarantee for the deal settlement. We use our own liquidity to
            generate yield. Therefore, if 3rd party liquidity provider goes
            insolvent, we take a hit, not customers. You can check
            smart-contract at any time to ensure your funds are there.
          </UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <Styled.CardHeader>
            <UI.H2>Reserve fund</UI.H2>
            <Coins />
          </Styled.CardHeader>
          <UI.Paragraph size={'large'}>
            We have a reserve fund of 100,000 USDC to cover any loss or theft
            from our smart-contract.
          </UI.Paragraph>
        </Styled.Card>
      </Styled.CardContainer>
    </Styled.Safety>
  );
};

export default Safety;
