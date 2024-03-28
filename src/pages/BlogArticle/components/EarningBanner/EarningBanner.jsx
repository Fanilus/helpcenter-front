import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';
import Coins from '../../../../components/Icons/Coins/Coins';

const APP_LINK = process.env.REACT_APP_APP_LINK;

const EarningBanner = () => {
  return (
    <Styled.EarningBanner>
      <Coins />
      <UI.H2 noMedia={true} color={COLORS.BLACK}>
        Start earning right now
      </UI.H2>
      <UI.Button onClick={() => window.open(APP_LINK, '_blank')}>
        <UI.Paragraph size={'medium'} color={COLORS.BLACK}>
          start earning
        </UI.Paragraph>
      </UI.Button>
    </Styled.EarningBanner>
  );
};

export default EarningBanner;
