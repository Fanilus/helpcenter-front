import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import CheckCircle from '../../../../components/Icons/CheckCircle/CheckCircle';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const Checks = () => {
  return (
    <Styled.Checks>
      <Styled.Check>
        <CheckCircle />
        <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
          Instant
        </UI.Paragraph>
      </Styled.Check>
      <Styled.Check>
        <CheckCircle />
        <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
          Fixed yield
        </UI.Paragraph>
      </Styled.Check>
      <Styled.Check>
        <CheckCircle />
        <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
          Flexible terms
        </UI.Paragraph>
      </Styled.Check>
    </Styled.Checks>
  );
};

export default Checks;
