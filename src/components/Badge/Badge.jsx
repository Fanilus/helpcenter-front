import React from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

const Badge = ({ children, height, width, padding }) => {
  return (
    <Styled.Badge padding={padding} height={height} width={width}>
      <UI.Paragraph size={'medium'}>{children}</UI.Paragraph>
    </Styled.Badge>
  );
};

export default Badge;
