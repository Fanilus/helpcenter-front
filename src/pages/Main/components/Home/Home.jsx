import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import Checks from './Checks';
import Stats from './Stats';

import video from '../../../../assets/video/video_low_quality.webm';
import { isMobile } from '../../../../lib/lib';

const APP_LINK = process.env.REACT_APP_APP_LINK;

const Home = ({ loading, statistics }) => {
  const mobile = isMobile();
  const delay = mobile ? 1 : 0;
  const duration = mobile ? 0.4 : 0.5;
  const delayStep = mobile ? 0.4 : 0.2;

  return (
    <Styled.Home>
      <UI.Container>
        <Styled.Top>
          <Styled.Content>
            <UI.Animation delay={delay} duration={duration}>
              <Styled.Title>
                <UI.HH>
                  Turn time into money.{' '}
                  <span>Set a limit order with yield.</span>
                </UI.HH>
              </Styled.Title>
            </UI.Animation>

            <UI.Animation delay={delay + delayStep} duration={duration}>
              <Styled.Description>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Earn up to{' '}
                  {!loading && statistics
                    ? `${Math.floor(statistics.formatted.averageAPY)}%`
                    : 'XX'}{' '}
                  annualized on your USDC, ETH or WBTC by being ready to sell
                  above market price or to buy below market price.
                </UI.Paragraph>
              </Styled.Description>
            </UI.Animation>

            <UI.Animation delay={delay + delayStep * 2} duration={duration}>
              <UI.Button>
                <UI.Paragraph
                  color={COLORS.BLACK}
                  onClick={() => window.open(APP_LINK, '_blank')}
                >
                  Start earning
                </UI.Paragraph>
              </UI.Button>
            </UI.Animation>

            <Styled.Bot>
              <Checks />
            </Styled.Bot>
          </Styled.Content>
          <Styled.Video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            type="video/webm"
            preload="auto"
          />
        </Styled.Top>
        <Styled.HR />

        <Styled.Bot>
          <Stats statistics={statistics} />
        </Styled.Bot>
      </UI.Container>
    </Styled.Home>
  );
};

export default Home;
