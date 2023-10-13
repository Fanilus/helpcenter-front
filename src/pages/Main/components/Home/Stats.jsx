import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';

import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { Grid, GridElem } from '../../../../components/_DEPRECATED';

const Stats = () => {
  return (
    <Grid
      template={'8fr 7fr 6fr 7fr 8fr'}
      lgColumns={4}
      mdColumns={2}
      gap={'30px'}
      lgGap={'15px'}
    >
      <GridElem
        column={1}
        row={1}
        lgColumn={1}
        lgRow={1}
        xsColumn={1}
        xsRow={1}
        textAlign={'left'}
      >
        <Styled.Card>
          <UI.HH mobile={true}>$3.7M</UI.HH>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Total TradedVolume
          </UI.Paragraph>
        </Styled.Card>
      </GridElem>
      <GridElem
        column={2}
        row={1}
        lgColumn={2}
        lgRow={1}
        xsColumn={2}
        xsRow={1}
        textAlign={'left'}
      >
        <Styled.Card>
          <UI.HH mobile={true}>$93.1K</UI.HH>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Total ValueLocked
          </UI.Paragraph>
        </Styled.Card>
      </GridElem>
      <GridElem
        column={3}
        row={1}
        lgColumn={3}
        lgRow={1}
        xsColumn={1}
        xsRow={2}
        textAlign={'left'}
      >
        <Styled.Card>
          <UI.HH mobile={true}>751</UI.HH>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>Total orders</UI.Paragraph>
        </Styled.Card>
      </GridElem>
      <GridElem
        column={4}
        row={1}
        lgColumn={4}
        lgRow={1}
        xsColumn={2}
        xsRow={2}
        textAlign={'left'}
      >
        <Styled.Card>
          <UI.HH mobile={true}>50.2%</UI.HH>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>Average APR</UI.Paragraph>
        </Styled.Card>
      </GridElem>
      <GridElem
        column={5}
        row={1}
        lgColumn={'span 4'}
        lgRow={2}
        xsColumn={'span 2'}
        xsRow={3}
        textAlign={'left'}
      >
        <Styled.Card>
          <UI.HH mobile={true}>$40.5K</UI.HH>
          <UI.Paragraph size={TYPOGRAPHY_SIZE.LARGE}>
            Total Premium Generaed
          </UI.Paragraph>
        </Styled.Card>
      </GridElem>
    </Grid>
  );
};

export default Stats;
