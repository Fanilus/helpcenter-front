import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import CheckCircle from '../../../../components/Icons/CheckCircle/CheckCircle';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { useStep } from '../../../../hooks';

const Checks = () => {
  const step = useStep();

  return (
    <Styled.Checks>
      <UI.Animation distance={'25px'}>
        <Styled.Check>
          <CheckCircle />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
            Simple
          </UI.Paragraph>
        </Styled.Check>
      </UI.Animation>
      <UI.Animation delay={step} distance={'25px'}>
        <Styled.Check>
          <CheckCircle />
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE} lh={'100%'}>
            Fixed yield
          </UI.Paragraph>
        </Styled.Check>
      </UI.Animation>
      <UI.Animation delay={step * 2} distance={'25px'}>
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
