import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import Checks from './Checks';
import Stats from './Stats';

import video from '../../../../assets/video/video_low_quality.webm';
import { importAllImages, isMobile } from '../../../../lib/lib';

import { useStep } from '../../../../hooks';
import BebraIcon from '../../../../img/BebraIcon';
import XIcon from '../../../../img/XIcon';
import TelegramIcon from '../../../../img/TelegramIcon';
const imageContext = require.context(
  '../../../../assets/video/frames/home',
  false,
  /\.(png|jpe?g|gif|svg)$/
);
const images = importAllImages(imageContext);

const APP_LINK = process.env.REACT_APP_APP_LINK;

const frameRate = 30;
const frameInterval = 1000 / frameRate;
const totalFrames = 360;

const Home = ({ loading, statistics }) => {
  const step = useStep();
  const mobile = isMobile();

  const canvasRef = useRef(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const framesToLoad = useRef(Array(totalFrames).fill(null));
  const imagesLoaded = useRef(false);
  const loaderCounter = useRef(0);
  const currentFrame = useRef(0);

  const handleImageLoad = () => {
    loaderCounter.current++;
    if (loaderCounter.current === totalFrames - 1) {
      imagesLoaded.current = true;
      setIsCanvasReady(true);
    }
  };

  useEffect(() => {
    if (mobile) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const frameWidth = canvas.width;
      const frameHeight = canvas.height;

      framesToLoad.current = Array.from({ length: totalFrames }, (_, i) => {
        const img = new Image();
        img.src = images[Object.keys(images)[i]];
        img.onload = handleImageLoad;
        return img;
      });

      const drawNextFrame = () => {
        const img = framesToLoad.current[currentFrame.current];

        ctx.clearRect(0, 0, frameWidth, frameHeight);
        if (img) {
          ctx.drawImage(img, 0, 0, frameWidth, frameHeight);
        }
        if (imagesLoaded.current) {
          currentFrame.current = (currentFrame.current + 1) % totalFrames;
        }
        setTimeout(drawNextFrame, frameInterval);
      };

      drawNextFrame();
    }
  }, [mobile]);

  return (
    <Styled.Home>
      <UI.Container>
        <Styled.Top>
          <Styled.Content>
            <UI.Animation>
              <Styled.Title>
                <UI.HH>
                  Turn time into money.{' '}
                  <span>Set a limit order with yield.</span>
                </UI.HH>
              </Styled.Title>
            </UI.Animation>
            <UI.Animation delay={step}>
              <Styled.Description>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Grow your wealth and earn passive income from your stablecoins
                  or major crypto assets by monetizing your commitment to sell
                  above market price or buy below market price.
                </UI.Paragraph>
              </Styled.Description>
            </UI.Animation>

            <UI.Animation delay={step * 2}>
              <Styled.Wrapper>
                <UI.Button>
                  <UI.Paragraph
                    color={COLORS.BLACK}
                    onClick={() => window.open(APP_LINK, '_blank')}
                  >
                    Start earning
                  </UI.Paragraph>
                </UI.Button>
                <Styled.IconWrapper>
                  <BebraIcon />
                  <TelegramIcon />
                  <XIcon />
                </Styled.IconWrapper>
              </Styled.Wrapper>
            </UI.Animation>

            <Styled.Bot>
              <Checks />
            </Styled.Bot>
          </Styled.Content>
          {mobile ? (
            <>
              <Styled.Frame ref={canvasRef} width={287} height={287} />
              {!isCanvasReady && (
                <img
                  width={287}
                  height={287}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: '0',
                    transform: 'translateX(-50%)',
                  }}
                  src={images[Object.keys(images)[0]]}
                  alt=""
                />
              )}
            </>
          ) : (
            <Styled.Video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              type="video/webm"
              preload="auto"
            />
          )}
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
