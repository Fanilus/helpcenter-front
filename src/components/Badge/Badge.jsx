import React from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';

const Badge = ({ children }) => {
  return (
    <Styled.Badge>
      <UI.Paragraph size={'medium'}>{children}</UI.Paragraph>
    </Styled.Badge>
  );
};

export default Badge;
