import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Cubes_375 from '../../../../assets/video/375_6sec.mp4';
import Cubes_768 from '../../../../assets/video/768_6sec.mp4';
import Cubes_1440 from '../../../../assets/video/1440_6sec.mp4';
import Cubes_1920 from '../../../../assets/video/1920_6sec.mp4';

import CheckCircle from '../../../../components/Icons/CheckCircle/CheckCircle';
import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { Grid, GridElem } from '../../../../components/_DEPRECATED';

const videos = {
  375: Cubes_375,
  768: Cubes_768,
  1440: Cubes_1440,
  1920: Cubes_1920,
};

const Home = () => {
  const windowWidth = useRef(window.innerWidth);
  const [video, setVideo] = useState(videos['375']);

  useEffect(() => {
    if (windowWidth.current >= 1920) return setVideo(videos['1920']);
    if (windowWidth.current >= 1440) return setVideo(videos['1440']);
    if (windowWidth.current >= 768) return setVideo(videos['768']);
    if (windowWidth.current >= 375) return setVideo(videos['375']);
  }, [windowWidth]);

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
            <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
              Earn up to XX annualized on your USDC/ETH/BTC by being ready to
              sell above market price or to buy below market price. Powered by
              options.
            </UI.Paragraph>
          </Styled.Description>
          <UI.Button>
            <UI.Paragraph color={COLORS.BLACK}>Start earning</UI.Paragraph>
          </UI.Button>
          <Styled.Checks>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
                Instant
              </UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
                Fixed yield
              </UI.Paragraph>
            </Styled.Check>
            <Styled.Check>
              <CheckCircle />
              <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
                Flexible terms
              </UI.Paragraph>
            </Styled.Check>
          </Styled.Checks>
        </Styled.Content>
        {video && <Styled.Video src={video} autoPlay loop muted />}
      </Styled.Top>
      <Styled.HR />
      <Styled.Bot>
        <Grid
          columns={5}
          mdColumns={4}
          xsColumns={2}
          gap={'30px'}
          mdGap={'15px'}
        >
          <GridElem
            column={1}
            row={1}
            mdColumn={1}
            mdRow={1}
            textAlign={'left'}
          >
            <Styled.Card>
              <UI.HH mobile={true}>$3.7M</UI.HH>
              <UI.Paragraph type={'large'}>Total TradedVolume</UI.Paragraph>
            </Styled.Card>
          </GridElem>
          <GridElem
            column={2}
            row={1}
            mdColumn={2}
            mdRow={1}
            textAlign={'left'}
          >
            <Styled.Card>
              <UI.HH mobile={true}>$93.1K</UI.HH>
              <UI.Paragraph type={'large'}>Total ValueLocked</UI.Paragraph>
            </Styled.Card>
          </GridElem>
          <GridElem
            column={3}
            row={1}
            mdColumn={3}
            mdRow={1}
            textAlign={'left'}
          >
            <Styled.Card>
              <UI.HH mobile={true}>751</UI.HH>
              <UI.Paragraph type={'large'}>Total orders</UI.Paragraph>
            </Styled.Card>
          </GridElem>
          <GridElem
            column={4}
            row={1}
            mdColumn={4}
            mdRow={1}
            textAlign={'left'}
          >
            <Styled.Card>
              <UI.HH mobile={true}>50.2%</UI.HH>
              <UI.Paragraph type={'large'}>Average APR</UI.Paragraph>
            </Styled.Card>
          </GridElem>
          <GridElem
            column={5}
            row={1}
            mdColumn={'span 4'}
            mdRow={2}
            textAlign={'left'}
          >
            <Styled.Card>
              <UI.HH mobile={true}>$40.5K</UI.HH>
              <UI.Paragraph type={'large'}>Total Premium Generaed</UI.Paragraph>
            </Styled.Card>
          </GridElem>
        </Grid>
      </Styled.Bot>
    </Styled.Home>
  );
};

export default Home;
