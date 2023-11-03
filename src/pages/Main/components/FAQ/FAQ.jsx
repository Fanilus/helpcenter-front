import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import FaqList from './components/FaqList';
import ExtraFaq from './components/ExtraFaq';
import { ANIMATION } from '../../../../models/enum';

const FAQ = () => {
  return (
    <UI.Container>
      <Styled.FAQ>
        <Styled.H1Wrapper>
          <UI.H1>
            <UI.Animation type={'text'}>FAQ</UI.Animation>
          </UI.H1>
        </Styled.H1Wrapper>
        <Styled.FaqQuestions>
          <FaqList />
          <UI.Animation delay={ANIMATION.STEP}>
            <ExtraFaq />
          </UI.Animation>
        </Styled.FaqQuestions>
      </Styled.FAQ>
    </UI.Container>
  );
};

export default FAQ;
