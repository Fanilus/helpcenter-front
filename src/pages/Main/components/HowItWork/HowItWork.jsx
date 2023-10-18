import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Currency from '../../../../assets/video/Currency.mp4';
import SellHightChart from '../../../../img/SellHightChart.svg';
import BuyLowChart from '../../../../img/BuyLowChart.svg';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import Checks from '../Home/Checks';
import Stats from '../Home/Stats';

const HowItWork = () => {
  return (
    <Styled.HowItWork>
      <Styled.MobileOnly mb={'100px'}>
        <Checks />
        <Stats />
      </Styled.MobileOnly>

      <UI.H1 color={'rgba(215, 203, 250, 0.25)'}>
        <UI.Animation type={'text'}>How it works</UI.Animation>
      </UI.H1>

      <Styled.Content>
        <UI.Animation delay={2.8} type={'opacity'}>
          <video src={Currency} autoPlay loop muted />
        </UI.Animation>
        <Styled.Description>
          <UI.Animation delay={1.5}>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Set your price
            </UI.Paragraph>

            <Styled.HR />
          </UI.Animation>
          <UI.Animation delay={1.7}>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Set contract time period for lock up
            </UI.Paragraph>

            <Styled.HR />
          </UI.Animation>
          <UI.Animation delay={1.9}>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Check yield and agreement
            </UI.Paragraph>
            <Styled.HR />{' '}
          </UI.Animation>
          <UI.Animation delay={2.1}>
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Receive fixed yield and either ETH / BTC or USDC <br /> back
              directly to your wallet
            </UI.Paragraph>

            <Styled.HR />
          </UI.Animation>
        </Styled.Description>
      </Styled.Content>
      <Styled.Cards>
        <UI.Animation>
          <UI.Card xsRadius={'10px 10px 0 0'}>
            <Styled.CardContent>
              <Styled.CardDescription>
                <UI.H1
                  color={'rgba(215, 203, 250, 0.25)'}
                  style={{ width: '100px' }}
                >
                  1
                </UI.H1>
                <div>
                  <UI.Animation delay={0.5}>
                    <UI.H2>↑ Sell high</UI.H2>
                  </UI.Animation>
                  <UI.Animation delay={0.7}>
                    <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                      You have ETH or BTC and ready <br /> to sell it above the
                      market price
                    </UI.Paragraph>
                  </UI.Animation>
                </div>
              </Styled.CardDescription>
              <UI.Animation delay={1}>
                <img src={SellHightChart} alt="chart" />
              </UI.Animation>
            </Styled.CardContent>
          </UI.Card>
        </UI.Animation>
        <Styled.MobileOnly mb={'30px'} mt={'-5px'}>
          <UI.Animation>
            <img src={SellHightChart} alt="chart" />
          </UI.Animation>
        </Styled.MobileOnly>
        <UI.Animation>
          <UI.Card xsRadius={'10px 10px 0 0'}>
            <Styled.CardContent>
              <Styled.CardDescription>
                <UI.H1
                  color={'rgba(215, 203, 250, 0.25)'}
                  style={{ width: '100px' }}
                >
                  2
                </UI.H1>
                <div>
                  <UI.Animation delay={0.5}>
                    <UI.H2>↓ Buy low</UI.H2>
                  </UI.Animation>
                  <UI.Animation delay={0.7}>
                    <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                      You have USDC and ready to buy <br />
                      ETH or BTC below the market <br />
                      price
                    </UI.Paragraph>
                  </UI.Animation>
                </div>
              </Styled.CardDescription>
              <UI.Animation delay={1}>
                <img src={BuyLowChart} alt="chart" />
              </UI.Animation>
            </Styled.CardContent>
          </UI.Card>
        </UI.Animation>
        <Styled.MobileOnly mt={'-5px'}>
          <UI.Animation>
            <img src={BuyLowChart} alt="chart" />
          </UI.Animation>
        </Styled.MobileOnly>
      </Styled.Cards>
    </Styled.HowItWork>
  );
};

export default HowItWork;
