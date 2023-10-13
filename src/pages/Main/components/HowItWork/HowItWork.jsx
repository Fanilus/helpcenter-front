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
      <UI.H1>How it works</UI.H1>
      <Styled.Content>
        <video src={Currency} autoPlay loop muted />
        <Styled.Description>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Set your price
          </UI.Paragraph>
          <Styled.HR />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Set contract time period for lock up
          </UI.Paragraph>
          <Styled.HR />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Check yield and agreement
          </UI.Paragraph>
          <Styled.HR />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Receive fixed yield and either ETH / BTC or USDC <br /> back
            directly to your wallet
          </UI.Paragraph>
          <Styled.HR />
        </Styled.Description>
      </Styled.Content>
      <Styled.Cards>
        <UI.Card xsRadius={'10px 10px 0 0'}>
          <Styled.CardContent>
            <Styled.CardDescription>
              <UI.H1>1</UI.H1>
              <div>
                <UI.H2>↑ Sell high</UI.H2>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  You have ETH or BTC and ready <br /> to sell it above the
                  market price
                </UI.Paragraph>
              </div>
            </Styled.CardDescription>
            <img src={SellHightChart} alt="chart" />
          </Styled.CardContent>
        </UI.Card>
        <Styled.MobileOnly mb={'30px'} mt={'-5px'}>
          <img src={SellHightChart} alt="chart" />
        </Styled.MobileOnly>
        <UI.Card xsRadius={'10px 10px 0 0'}>
          <Styled.CardContent>
            <Styled.CardDescription>
              <UI.H1>2</UI.H1>
              <div>
                <UI.H2>↓ Buy low</UI.H2>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  You have USDC and ready to buy <br />
                  ETH or BTC below the market <br />
                  price
                </UI.Paragraph>
              </div>
            </Styled.CardDescription>
            <img src={BuyLowChart} alt="chart" />
          </Styled.CardContent>
        </UI.Card>
        <Styled.MobileOnly mt={'-5px'}>
          <img src={BuyLowChart} alt="chart" />
        </Styled.MobileOnly>
      </Styled.Cards>
    </Styled.HowItWork>
  );
};

export default HowItWork;
