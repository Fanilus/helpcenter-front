import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as TymioUI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const Helpful = () => {
  return (
    <Styled.Helpful>
      <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
        Was this article helpful?
      </TymioUI.Paragraph>
      <Styled.ButtonWrapper>
        <TymioUI.Button type={'blog'}>
          <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
            YES
          </TymioUI.Paragraph>
        </TymioUI.Button>
        <TymioUI.Button type={'blog'}>
          <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
            NO
          </TymioUI.Paragraph>
        </TymioUI.Button>
      </Styled.ButtonWrapper>
    </Styled.Helpful>
  );
};

export default Helpful;
