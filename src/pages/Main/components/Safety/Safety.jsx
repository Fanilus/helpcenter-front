import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Shield from '../../../../components/Icons/Shield/Shield';
import Lock from '../../../../components/Icons/Lock/Lock';
import Coins from '../../../../components/Icons/Coins/Coins';
import { ANIMATION } from '../../../../models/enum';

const Safety = () => {
  return (
    <Styled.Safety>
      <UI.Container>
        <Styled.Title>
          <UI.H1>
            <UI.Animation type={'text'}>Safety</UI.Animation>
          </UI.H1>
          <UI.Animation type={'opacity'} delay={ANIMATION.STEP}>
            <UI.H2>
              At TYMIO, the safety of our users' funds is our top priority.
            </UI.H2>
          </UI.Animation>
        </Styled.Title>
        <Styled.CardContainer>
          <Styled.Card>
            <UI.Animation delay={ANIMATION.STEP * 2} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>Our Smart Contract is Insured</UI.H2>
                <Shield />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={ANIMATION.STEP * 3} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                We maintain a reserve fund of 100,000 USDC to cover any
                potential losses or theft from our smart contract. This fund is
                set to grow over time.
              </UI.Paragraph>
            </UI.Animation>
          </Styled.Card>

          <Styled.Card>
            <UI.Animation delay={ANIMATION.STEP * 4} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>No Third-Party Risk</UI.H2>
                <Lock />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={ANIMATION.STEP * 5} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                User funds remain within the smart contract and only serve as
                collateral for deal settlement. We use our own liquidity to
                generate yields. Hence, if a third-party liquidity provider
                becomes insolvent, the burden falls on us, not our customers.
                You can always review our smart contracts to ensure your funds'
                presence: [
                <a
                  href="https://etherscan.io/address/0x0D0C69c9E31923712f2D51d994950D08Ed9b2958"
                  rel="noreferrer"
                  target="_blank"
                >
                  Mainnet
                </a>
                ,{' '}
                <a
                  href="https://arbiscan.io/address/0x0D0C69c9E31923712f2D51d994950D08Ed9b2958"
                  rel="noreferrer"
                  target="_blank"
                >
                  Arbitrum
                </a>
                ].
              </UI.Paragraph>
            </UI.Animation>
          </Styled.Card>

          <Styled.Card>
            <UI.Animation delay={ANIMATION.STEP * 6} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>Secure & Transparent Transactions</UI.H2>
                <Coins />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={ANIMATION.STEP * 7} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                The result of your transaction is binary, with both potential
                outcomes clearly detailed in the contract text. After assessing
                and accepting both scenarios, rest assured that there will be no
                unexpected outcomes.
              </UI.Paragraph>
            </UI.Animation>
          </Styled.Card>
        </Styled.CardContainer>
      </UI.Container>
    </Styled.Safety>
  );
};

export default Safety;
