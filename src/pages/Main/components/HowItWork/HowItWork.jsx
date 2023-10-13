import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

import Currency from '../../../../assets/video/Currency.mp4';
import SellHightChart from '../../../../img/SellHightChart.svg';
import BuyLowChart from '../../../../img/BuyLowChart.svg';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const HowItWork = () => {
  return (
    <Styled.HowItWork>
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
        <UI.Card>
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
        <UI.Card>
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
      </Styled.Cards>
    </Styled.HowItWork>
  );
};

export default HowItWork;
