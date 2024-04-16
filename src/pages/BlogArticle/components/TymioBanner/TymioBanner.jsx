import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const TymioBanner = () => {
  return (
    <Styled.EarningBanner>
      <a href="https://tymio.com/" rel="noreferrer" target="_blank">
        <UI.H2 noMedia={true} color={COLORS.PINK}>
          Tymio →
        </UI.H2>
      </a>
      <UI.Paragraph size={'large'} color={COLORS.BLACK}>
        Tymio is an innovative platform that combines limit orders with yield.
        Users can set time-limit orders with yield for assets like ETH or WBTC.
      </UI.Paragraph>
    </Styled.EarningBanner>
  );
};

export default TymioBanner;
