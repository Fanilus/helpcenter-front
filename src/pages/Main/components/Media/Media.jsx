import React, { useState, useEffect } from 'react';

import Slider from './Components/Slider/Slider';
import Arrows from './Components/Arrows/Arrows';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import useData from './hooks/useData';

const Media = () => {
  const dataMedia = useData;
  const [step, setStep] = useState(0);
  const sliderWidth = dataMedia.length * (308 + 30);
  const [countDisplaySlide, setCountDisplaySlide] = useState(4);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 767) {
      setCountDisplaySlide(1);
    } else if (width <= 1439) {
      setCountDisplaySlide(2);
    } else {
      setCountDisplaySlide(4);
    }
  }, []);

  const handleNext = () => {
    setStep((prevStep) =>
      Math.min(
        prevStep + countDisplaySlide,
        dataMedia.length - countDisplaySlide
      )
    );
  };

  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - countDisplaySlide, 0));
  };

  const isDisabledPrev = step === 0;
  const isDisabledNext = step >= dataMedia.length - countDisplaySlide;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setOffset(diff);
  };

  const handleTouchEnd = () => {
    const moveThreshold = 50;
    if (Math.abs(offset) > moveThreshold) {
      if (offset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setOffset(0);
  };

  return (
    <UI.Animation>
      <Styled.Media>
        <UI.Container>
          <Styled.Header>
            <UI.H2 noMedia color={'rgba(215, 203, 250, 0.25)'}>
              Media
            </UI.H2>
            <Arrows
              isDisabledPrev={isDisabledPrev}
              isDisabledNext={isDisabledNext}
              prevSlide={handlePrev}
              nextSlide={handleNext}
            />
          </Styled.Header>
          <Slider
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
            dataMedia={dataMedia}
            step={step}
            sliderWidth={sliderWidth}
          />
        </UI.Container>
      </Styled.Media>
    </UI.Animation>
  );
};

export default Media;
