import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import CheckCircle from '../../../../components/Icons/CheckCircle/CheckCircle';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { ANIMATION } from '../../../../models/enum';

const Checks = () => {
  return (
    <Styled.Checks>
      <UI.Animation distance={'25px'}>
        <Styled.Check>
          <CheckCircle />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
            Instant
          </UI.Paragraph>
        </Styled.Check>
      </UI.Animation>
      <UI.Animation delay={ANIMATION.STEP} distance={'25px'}>
        <Styled.Check>
          <CheckCircle />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
            Fixed yield
          </UI.Paragraph>
        </Styled.Check>
      </UI.Animation>
      <UI.Animation delay={ANIMATION.STEP * 2} distance={'25px'}>
        <Styled.Check>
          <CheckCircle />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
            Flexible terms
          </UI.Paragraph>
        </Styled.Check>
      </UI.Animation>
    </Styled.Checks>
  );
};

export default Checks;
