import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Cubes_375 from '../../../../assets/video/375_6sec.mp4';
import Cubes_768 from '../../../../assets/video/768_6sec.mp4';
import Cubes_1440 from '../../../../assets/video/1440_6sec.mp4';
import Cubes_1920 from '../../../../assets/video/1920_6sec.mp4';

import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import Checks from './Checks';
import Stats from './Stats';

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
            <UI.Paragraph
              color={COLORS.BLACK}
              onClick={() => window.open('https://sell-high.io', '_blank')}
            >
              Start earning
            </UI.Paragraph>
          </UI.Button>

          <Styled.Bot>
            <Checks />
          </Styled.Bot>
        </Styled.Content>
        {video && <Styled.Video src={video} autoPlay loop muted />}
      </Styled.Top>
      <Styled.HR />

      <Styled.Bot>
        <Stats />
      </Styled.Bot>
    </Styled.Home>
  );
};

export default Home;
