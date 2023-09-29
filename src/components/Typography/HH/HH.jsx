import React from 'react';
import * as Styled from './styled';

export const HH = ({ color, children, mobile }) => {
  return (
    <Styled.HH mobile={mobile} color={color}>
      {children}
    </Styled.HH>
  );
};

export default HH;
