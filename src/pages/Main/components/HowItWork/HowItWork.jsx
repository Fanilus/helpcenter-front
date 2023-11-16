import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import video from '../../../../assets/video/currency_low_quality.webm';
import SellHightChart from '../../../../img/SellHightChart.svg';
import BuyLowChart from '../../../../img/BuyLowChart.svg';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import Checks from '../Home/Checks';
import Stats from '../Home/Stats';
import { useStep } from '../../../../hooks';
import { importAllImages, isMobile } from '../../../../lib/lib';

const imageContext = require.context(
  '../../../../assets/video/frames/currency',
  false,
  /\.(png|jpe?g|gif|svg)$/
);
const images = importAllImages(imageContext);
const frameRate = 30;
const frameInterval = 1000 / frameRate;
const totalFrames = 90;

const HowItWork = ({ loading, statistics }) => {
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
    <Styled.HowItWork>
      <UI.Container>
        <Styled.MobileOnly mb={'100px'}>
          <Checks />
          {!loading && <Stats statistics={statistics} />}
        </Styled.MobileOnly>

        <UI.H1 color={'rgba(215, 203, 250, 0.25)'}>
          <UI.Animation type={'text'}>How it works</UI.Animation>
        </UI.H1>

        <Styled.Content>
          {mobile ? (
            <>
              <canvas
                ref={canvasRef}
                width={307}
                height={126}
                style={{ margin: '0 auto' }}
              />
              {!isCanvasReady && (
                <img
                  width={307}
                  height={126}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                  src={images[Object.keys(images)[0]]}
                  alt=""
                />
              )}
            </>
          ) : (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              type="video/webm"
              preload="auto"
            />
          )}
          <Styled.Description>
            <UI.Animation>
              <Styled.ListItem>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>1.</UI.Paragraph>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Set the asset, the direction of the order, and the price
                </UI.Paragraph>
                <Styled.HR />
              </Styled.ListItem>
            </UI.Animation>
            <UI.Animation delay={step}>
              <Styled.ListItem>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>2.</UI.Paragraph>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Define contract time period for lock-up
                </UI.Paragraph>
                <Styled.HR />
              </Styled.ListItem>
            </UI.Animation>
            <UI.Animation delay={step * 2}>
              <Styled.ListItem>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>3.</UI.Paragraph>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Review the agreement to ensure you clearly understand it and
                  are comfortable with both potential outcomes
                </UI.Paragraph>
                <Styled.HR />
              </Styled.ListItem>
            </UI.Animation>
            <UI.Animation delay={step * 3}>
              <Styled.ListItem>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>4.</UI.Paragraph>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Click “Confirm” and confirm transaction in your wallet
                </UI.Paragraph>
                <Styled.HR />
              </Styled.ListItem>
            </UI.Animation>
            <UI.Animation delay={step * 4}>
              <Styled.ListItem>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>5.</UI.Paragraph>
                <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                  Wait until the contract expires and receive fixed yield and
                  either ETH, BTC or USDC back directly to your wallet
                </UI.Paragraph>
                <Styled.HR />
              </Styled.ListItem>
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
                    <UI.Animation delay={step}>
                      <UI.H2>↑ Sell high</UI.H2>
                    </UI.Animation>
                    <UI.Animation delay={step}>
                      <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                        You have ETH or BTC and ready <br /> to sell it above
                        the market price
                      </UI.Paragraph>
                    </UI.Animation>
                  </div>
                </Styled.CardDescription>
                <UI.Animation delay={step * 2}>
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
                    <UI.Animation delay={step}>
                      <UI.H2>↓ Buy low</UI.H2>
                    </UI.Animation>
                    <UI.Animation delay={step}>
                      <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
                        You have USDC and ready to buy <br />
                        ETH or BTC below the market <br />
                        price
                      </UI.Paragraph>
                    </UI.Animation>
                  </div>
                </Styled.CardDescription>
                <UI.Animation delay={step * 2}>
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
      </UI.Container>
    </Styled.HowItWork>
  );
};

export default HowItWork;
