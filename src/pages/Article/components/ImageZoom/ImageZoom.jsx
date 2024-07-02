import React, { useState } from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const ImageZoom = ({ src, alt, title }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <Styled.ImageWrapper>
        <img alt={alt} src={src} onClick={handleZoom} />
        <span size={'large'}>{title}</span>
      </Styled.ImageWrapper>
      {isZoomed && (
        <Styled.Overlay onClick={handleClose}>
          <Styled.ZoomedImage alt={alt} src={src} />
        </Styled.Overlay>
      )}
    </>
  );
};

export default ImageZoom;
