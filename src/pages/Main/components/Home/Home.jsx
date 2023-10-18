import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import Cubes_375 from '../../../../assets/video/375_12sec.mp4';
import Cubes_768 from '../../../../assets/video/768_12sec.mp4';
import Cubes_1440 from '../../../../assets/video/1440_12sec.mp4';
import Cubes_1920 from '../../../../assets/video/1920_12sec.mp4';

import Screen_375 from '../../../../assets/video/375_12sec.jpg';
import Screen_768 from '../../../../assets/video/768_12sec.jpg';
import Screen_1440 from '../../../../assets/video/1440_12sec.jpg';
import Screen_1920 from '../../../../assets/video/1920_12sec.jpg';

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

const screens = {
  375: Screen_375,
  768: Screen_768,
  1440: Screen_1440,
  1920: Screen_1920,
};

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [video, setVideo] = useState();
  const [screen, setScreen] = useState();
  const videoRef = useRef();
  const containerRef = useRef();

  const adaptiveWidth = (width) => {
    if (width >= 1920) {
      setVideo(videos['1920']);
      setScreen(screens['1920']);
      return;
    }
    if (width >= 1440) {
      setVideo(videos['1440']);
      setScreen(screens['1440']);
      return;
    }
    if (width >= 768) {
      setVideo(videos['768']);
      setScreen(screens['768']);
      return;
    }
    if (width >= 375) {
      setVideo(videos['375']);
      setScreen(screens['375']);
      return;
    }
  };

  useEffect(() => {
    adaptiveWidth(width);
  }, [width]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    const updateVisibility = () => {
      if (!videoRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setWidth(window.innerWidth);
          adaptiveWidth(window.innerWidth);
        }
        return;
      }
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.bottom < 0) setVideo(() => null);
    };
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', updateVisibility);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  return (
    <Styled.Screen>
      <Styled.Home background={screen}>
        <Styled.Top ref={containerRef}>
          <Styled.Content>
            <UI.Animation>
              <Styled.Title>
                <UI.HH>
                  Turn time into money.{' '}
                  <span>By setting limit order with yield.</span>
                </UI.HH>
              </Styled.Title>
            </UI.Animation>

            <UI.Animation delay={0.2}>
              <Styled.Description>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Earn up to XX annualized on your USDC/ETH/BTC by being ready
                  to sell above market price or to buy below market price.
                  Powered by options.
                </UI.Paragraph>
              </Styled.Description>
            </UI.Animation>

            <UI.Animation delay={0.4}>
              <UI.Button>
                <UI.Paragraph
                  color={COLORS.BLACK}
                  onClick={() => window.open('https://sell-high.io', '_blank')}
                >
                  Start earning
                </UI.Paragraph>
              </UI.Button>
            </UI.Animation>

            <Styled.Bot>
              <Checks />
            </Styled.Bot>
          </Styled.Content>
          {video && (
            <Styled.Video
              ref={videoRef}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              type="video/mp4"
            />
          )}
        </Styled.Top>
        <Styled.HR />

        <Styled.Bot>
          <Stats />
        </Styled.Bot>
      </Styled.Home>
    </Styled.Screen>
  );
};

export default Home;
