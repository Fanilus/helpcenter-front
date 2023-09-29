import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import cubes from '../../../../img/cubes-3D.svg';
import CheckCircle from '../../../../components/Icons/CheckCircle/CheckCircle';

const Home = () => {
  return (
    <Styled.Home>
      <Styled.Top>
        <Styled.Content>
          <Styled.Title>
            <UI.HH>
              Turn time into money.{' '}
              <span>By setting limit order with yield.</span>
            </UI.HH>
          </Styled.Title>
          <Styled.Description>
            <UI.Paragraph type={'large'}>
              Earn up to XX annualized on your USDC/ETH/BTC by being ready to
              sell above market price or to buy below market price. Powered by
              options.
            </UI.Paragraph>
          </Styled.Description>
          <UI.Button>Start earning</UI.Button>
          <Styled.Checks>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph type={'large'}>Instant</UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph type={'large'}>Fixed yield</UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph type={'large'}>Flexible terms</UI.Paragraph>
            </Styled.Check>
          </Styled.Checks>
        </Styled.Content>
        <Styled.Image>
          <img src={cubes} alt="" />
        </Styled.Image>
      </Styled.Top>
      <Styled.HR />
      <Styled.Bot>
        <Styled.Card>
          <UI.HH mobile={true}>$3.7M</UI.HH>
          <UI.Paragraph type={'large'}>Total TradedVolume</UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <UI.HH mobile={true}>$93.1K</UI.HH>
          <UI.Paragraph type={'large'}>Total ValueLocked</UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <UI.HH mobile={true}>751</UI.HH>
          <UI.Paragraph type={'large'}>Total orders</UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <UI.HH mobile={true}>50.2%</UI.HH>
          <UI.Paragraph type={'large'}>Average APR</UI.Paragraph>
        </Styled.Card>
        <Styled.Card>
          <UI.HH mobile={true}>$40.5K</UI.HH>
          <UI.Paragraph type={'large'}>Total Premium Generaed</UI.Paragraph>
        </Styled.Card>
      </Styled.Bot>
    </Styled.Home>
  );
};

export default Home;
