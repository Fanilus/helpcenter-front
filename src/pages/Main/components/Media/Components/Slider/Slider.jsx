import React, { useState } from 'react';

import * as Styled from './styled';

import SliderCard from '../SliderCard/SliderCard';

const Slider = ({
  dataMedia,
  step,
  sliderWidth,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => {
  return (
    <Styled.Slider
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Styled.SliderContainer style={{ width: sliderWidth }}>
        <Styled.SliderWrapper
          style={{ transform: `translateX(-${step * (308 + 30)}px)` }}
        >
          {dataMedia.map((item, index) => (
            <SliderCard
              key={index}
              image={item.image}
              text={item.text}
              author={item.author}
              date={item.date}
              link={item.link}
              imgAthor={item.imgAthor}
            />
          ))}
        </Styled.SliderWrapper>
      </Styled.SliderContainer>
    </Styled.Slider>
  );
};

export default Slider;
