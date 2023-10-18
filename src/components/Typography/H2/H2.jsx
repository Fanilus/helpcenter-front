import React from 'react';
import * as Styled from './styled';

export const H2 = ({ children, color, ...props }) => {
  return (
    <Styled.H2 color={color} {...props}>
      {children}
    </Styled.H2>
  );
};

export default H2;
