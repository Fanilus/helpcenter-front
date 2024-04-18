import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Shield from '../../../../components/Icons/Shield/Shield';
import Lock from '../../../../components/Icons/Lock/Lock';
import Coins from '../../../../components/Icons/Coins/Coins';
import { useStep } from '../../../../hooks';

const Safety = () => {
  const step = useStep();

  return (
    <Styled.Safety>
      <UI.Container>
        <Styled.Title>
          <UI.H1>
            <UI.Animation type={'text'}>Safety</UI.Animation>
          </UI.H1>
          <UI.Animation type={'opacity'} delay={step}>
            <UI.H2>
              At TYMIO, the safety of our users' funds is our top priority.
            </UI.H2>
          </UI.Animation>
        </Styled.Title>
        <Styled.CardContainer>
          <Styled.Card>
            <UI.Animation delay={step} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>Non-custodial</UI.H2>
                <Shield />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={step} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                We maintain a reserve fund of 100,000 USDC to cover any
                potential losses or theft from our smart contract. This fund is
                set to grow over time. TYMIO is a non-custodial platform, which
                means users maintain control over their assets. In other words,
                - we do not control your funds; only you do. Open source smart
                contract addresses: [
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
            <UI.Animation delay={step * 2} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>Audited & Insured</UI.H2>
                <Lock />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={step * 2} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                The results of the audit by Pessimistic Security can be found
                here. Additionally, we maintain a reserve fund of 100,000 USDC
                to cover any potential issues. This fund is set to grow over
                time.
              </UI.Paragraph>
            </UI.Animation>
          </Styled.Card>

          <Styled.Card>
            <UI.Animation delay={step * 3} type={'opacity'}>
              <Styled.CardHeader>
                <UI.H2>No Third-Party Risk</UI.H2>
                <Coins />
              </Styled.CardHeader>
            </UI.Animation>
            <UI.Animation delay={step * 3} type={'opacity'}>
              <UI.Paragraph size={'large'}>
                User funds remain within the smart contract and only serve as
                collateral for deal settlements. We use our own liquidity to
                generate yields. Hence, you are shielded from any troubles with
                third-party liquidity providers.
              </UI.Paragraph>
            </UI.Animation>
          </Styled.Card>
        </Styled.CardContainer>
      </UI.Container>
    </Styled.Safety>
  );
};

export default Safety;
