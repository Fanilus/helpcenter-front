import React from 'react';

import * as Styled from './styled';
import ArrowSlider from '../../../../../../img/media/ArrowSlider';

const Arrows = ({ prevSlide, nextSlide, isDisabledPrev, isDisabledNext }) => {
  return (
    <Styled.Arrows>
      <ArrowSlider onClick={prevSlide} active={!isDisabledPrev} />
      <ArrowSlider onClick={nextSlide} right active={!isDisabledNext} />
    </Styled.Arrows>
  );
};

export default Arrows;
